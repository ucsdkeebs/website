import EventHero from "@/sections/EventHero";
import UpcomingEvents from "@/sections/UpcomingEvents";
import { EventObject } from "@/lib/types/enum";
import { EventAPI } from "@/lib/api";
import { GetServerSideProps } from "next";
import styles from "./style.module.css";

interface EventsProps {
  events: EventObject[];
}

export default function Events({ events }: EventsProps) {
  return (
    <main className={styles.main}>
      <EventHero />
      <UpcomingEvents events={events} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const eventsData = await EventAPI.getEvents();

    return { props: { events: eventsData } };
  } catch (error) {
    console.error("Error fetching events:", error);

    return { props: { events: [] } };
  }
};
