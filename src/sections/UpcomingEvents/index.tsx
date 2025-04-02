import EventCard from "@/components/EventCard";
import { EventObject } from "@/lib/types/enum";
import styles from "./style.module.css";

interface UpcomingEventsProps {
  events: EventObject[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
    console.log(events)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
