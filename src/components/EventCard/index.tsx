import styles from "./style.module.css";
import Image from "next/image";
import eventImage from "../../../public/assets/event.png";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; //standardizes the time so no client server conflicts
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export type EventObject = {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
};

const EventCard: React.FC<{ event: EventObject }> = ({ event }) => {
  //const startDate = new Date(event.startTime);
  //const endDate = new Date(event.endTime);

  const startDate = dayjs.utc(event.startTime).tz('America/Los_Angeles');
  const endDate = dayjs.utc(event.endTime).tz('America/Los_Angeles');

  /*const formattedStartTime = startDate.toLocaleString("en-US", {
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
  });*/

  const formattedStartTime = startDate.format("MMM D, YYYY, h:mm A");
  const formattedEndTime = endDate.format("h:mm A");

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
      {/* <p className={styles.event_description}>{event.description}</p> */}
    </div>
  );
};

export default EventCard;
