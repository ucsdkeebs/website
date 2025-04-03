import EventCard from "@/components/EventCard";
import { EventObject } from "@/lib/types/enum";
import styles from "./style.module.css";

interface UpcomingEventsProps {
  events: EventObject[];
  loggedIn: boolean;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, loggedIn }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} loggedIn={loggedIn}/>)
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
