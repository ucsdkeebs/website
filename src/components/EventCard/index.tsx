import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import EventModal from "../EventModal";
import { EventObject } from "@/lib/types/enum";
import styles from "./style.module.css";

interface EventCardProps {
  event: EventObject;
  loggedIn: boolean;
}

const EventCard:React.FC<EventCardProps> = ({ event, loggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleRSVPClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.event_card}>
      <h2 className={styles.event_title}>{event.name}</h2>
      {event.image_link && (
        <div className={styles.event_img}>
          <Image
            src={event.image_link}
            fill
            alt="Event Image"
            unoptimized
          ></Image>
        </div>
      )}
      <p className={styles.event_date}> {formattedDateTimeRange}</p>
      <p className={styles.event_description}>{event.description}</p>
      {loggedIn && (
        <Button className={styles.rsvp_button} onClick={handleRSVPClick}>RSVP</Button>
      )}
      {isModalOpen && (
        <EventModal
          event={event}
          isOpen={isModalOpen}
          onClose={closeModal}
          onRSVP={(data) => {
            console.log("RSVP Data:", data);
            closeModal();
          }}
        />
      )}
    </div>
  );
};

export default EventCard;
