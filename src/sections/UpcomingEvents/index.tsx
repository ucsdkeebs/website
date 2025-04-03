import EventCard from "@/components/EventCard";
import { EventObject } from "@/lib/types/enum";
import styles from "./style.module.css";
import { PublicProfile } from "@/lib/types/apiResponses";

interface UpcomingEventsProps {
  events: EventObject[];
  loggedIn: boolean;
  user: PublicProfile | null;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, loggedIn, user }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} event={event} loggedIn={loggedIn} user={user}/>)
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
