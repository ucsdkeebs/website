import EventHero from "@/sections/EventHero";
import UpcomingEvents from "@/sections/UpcomingEvents";
import Banner from "@/components/Banner";
import { EventObject } from "@/lib/types/enum";
import { EventAPI } from "@/lib/api";
import { GetServerSideProps } from "next";
import styles from "./style.module.css";
import { getUserCookie } from "@/lib/utils/auth";
import { PublicProfile } from "@/lib/types/apiResponses";

interface EventsProps {
  events: EventObject[];
  loggedIn: boolean;
  user: PublicProfile | null;
}

export default function Events({ events, loggedIn, user }: EventsProps) {
  return (
    <main className={styles.main}>
            <Banner/>
      <EventHero />
      <UpcomingEvents events={events} loggedIn={loggedIn} user={user} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const eventsData = await EventAPI.getEvents();
    const user = await getUserCookie({ req, res });
    const loggedIn = !!user;

    return {
      props: {
        events: eventsData,
        loggedIn,
        user,
      },
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        events: [],
        loggedIn: false,
        user: null,
      },
    };
  }
};
