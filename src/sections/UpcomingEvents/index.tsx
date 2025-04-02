import EventCard from "@/components/EventCard";
import styles from "./style.module.css";

const exampleEvent = {
    id: "1",
    title: "Spring GBM",
    description:
      "Join us for our biggest event of the quarter! Try out new mechanical keyboards, meet other enthusiasts, and learn from the experts. Whether you're new to the hobby or a seasoned collector, there's something for everyone!",
    location: "Main Conference Hall, Keebs HQ",
    startTime: "2025-04-10T14:00:00Z",
    endTime: "2025-04-10T18:00:00Z",
  };

const UpcomingEvents: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events</h1>
      <div className={styles.eventContainer}>
      <EventCard event={exampleEvent} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
