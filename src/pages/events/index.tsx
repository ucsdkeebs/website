import EventHero from "@/sections/EventHero";
import UpcomingEvents from "@/sections/UpcomingEvents";
import { EventObject } from "@/lib/types/enum";
import { EventAPI } from "@/lib/api";
import { GetServerSideProps } from "next";
import styles from "./style.module.css";
import { getCookie } from "cookies-next";
import { PublicProfile } from "@/lib/types/apiResponses";

interface EventsProps {
  events: EventObject[];
  loggedIn: boolean;
  user: PublicProfile | null;
}

export default function Events({ events, loggedIn, user }: EventsProps) {
  return (
    <main className={styles.main}>
      <EventHero />
      <UpcomingEvents events={events} loggedIn={loggedIn} user={user} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const eventsData = await EventAPI.getEvents();
    const userCookie = await getCookie("USER", { req, res }) || null;

    const user = userCookie ? JSON.parse(userCookie as string) : null;
    const loggedIn = !!user;

    return { props: { events: eventsData, loggedIn, user } };
  } catch (error) {
    console.error("Error fetching events:", error);

    return { props: { events: [], loggedIn: false, user: null } };
  }
};
