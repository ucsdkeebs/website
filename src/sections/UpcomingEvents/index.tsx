import EventCard from "@/components/EventCard";
import { EventObject } from "@/lib/types/enum";
import styles from "./style.module.css";
import { PublicProfile } from "@/lib/types/apiResponses";

interface UpcomingEventsProps {
  events: EventObject[];
  loggedIn: boolean;
  user: PublicProfile | null;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  loggedIn,
  user,
}) => {
  const now = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.end_date) >= now
  );
  const pastEvents = events.filter((event) => new Date(event.end_date) < now);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              loggedIn={loggedIn}
              user={user}
            />
          ))
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>

      <h1 className={styles.title}>Past Events</h1>
      <div className={styles.eventContainer}>
        {pastEvents.length > 0 ? (
          pastEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              loggedIn={loggedIn}
              user={user}
            />
          ))
        ) : (
          <p>No past events.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
