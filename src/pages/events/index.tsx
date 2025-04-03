import EventHero from "@/sections/EventHero";
import UpcomingEvents from "@/sections/UpcomingEvents";
import { EventObject } from "@/lib/types/enum";
import { EventAPI } from "@/lib/api";
import { GetServerSideProps } from "next";
import styles from "./style.module.css";
import { getCookie } from "cookies-next";

interface EventsProps {
  events: EventObject[];
  loggedIn: boolean;
}

export default function Events({ events, loggedIn}: EventsProps) {
  return (
    <main className={styles.main}>
      <EventHero />
      <UpcomingEvents events={events} loggedIn={loggedIn} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const eventsData = await EventAPI.getEvents();
    const userCookie = getCookie("USER", { req, res }) || null;
    const loggedIn = !!userCookie;

    return { props: { events: eventsData, loggedIn } };
  } catch (error) {
    console.error("Error fetching events:", error);

    return { props: { events: [] } };
  }
};
