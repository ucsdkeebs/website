import styles from "./style.module.css";
import Image from "next/image";
import { EventObject } from "@/lib/types/enum";
import eventImage from "../../../public/assets/event.png";

const EventCard: React.FC<{ event: EventObject }> = ({ event }) => {
  console.log(event)
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);

  const formattedStartDate = `${startDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} ${startDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  const formattedEndDate = `${endDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;

  const formattedDateTimeRange = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className={styles.event_card}>
      <h2 className={styles.event_title}>{event.name}</h2>
      <p className={styles.event_date}> {formattedDateTimeRange}
      </p>
    </div>
  );
};

export default EventCard;
