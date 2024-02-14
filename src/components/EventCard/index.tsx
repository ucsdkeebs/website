import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";

export type EventObject = {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
};

const EventCard: React.FC<{ event: EventObject }> = ({ event }) => {
  const startDate = new Date(event.startTime);
  const endDate = new Date(event.endTime);

  const formattedStartTime = startDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedEndTime = endDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const formattedDateTimeRange = `${formattedStartTime} - ${formattedEndTime}`;
  return (
    <div className={styles.event_card}>
      <Image
        src={eventImage}
        alt="Event Placeholder"
        className={styles.event_image}
      />
      <h2 className={styles.event_title}>{event.title}</h2>
      <p className={styles.event_date}><strong>Date:</strong> {formattedDateTimeRange}</p>
      <p className={styles.event_location}><strong>Location:</strong> {event.location}</p>
      <p className={styles.event_description}>{event.description}</p>
    </div>
  );
};

export default EventCard;
