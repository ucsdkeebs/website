import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Button";
import EventModal from "../EventModal";
import TicketsModal from "../TicketsModal";
import { EventObject, TicketData } from "@/lib/types/enum";
import { PublicProfile } from "@/lib/types/apiResponses";
import { EventAPI } from "@/lib/api";
import { useRouter } from "next/router";
import styles from "./style.module.css";

interface EventCardProps {
  event: EventObject;
  loggedIn: boolean;
  user: PublicProfile | null;
}

const EventCard: React.FC<EventCardProps> = ({ event, loggedIn, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userTickets, setUserTickets] = useState<TicketData[]>([]);
  const [isTicketsModalOpen, setIsTicketsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check if the user has already RSVP'd for this event
    if (user) {
      const fetchUserTickets = async () => {
        try {
          if (user._id) {
            const response = await EventAPI.getUserTicketsForEvent(
              user._id,
              event._id
            );
            if (response.tickets.length > 0) {
              setUserTickets(response.tickets);
            }
          }
        } catch (error) {
          console.error("Error fetching user tickets:", error);
        }
      };
      fetchUserTickets();
    }
  }, []);

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
    if (!loggedIn) {
      router.push("/login");
      return;
    }

    const hasRemainingTickets =
      event.ticket_limit === undefined ||
      userTickets.length < event.ticket_limit;

    if (hasRemainingTickets) {
      setIsModalOpen(true); // allow them to RSVP for more tickets
    } else {
      setIsTicketsModalOpen(true); // they've hit the limit, just view existing
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsTicketsModalOpen(false);
  };

  return (
    <div className={styles.event_card}>
      <h3 className={styles.event_title}>{event.name}</h3>
      {event.image_link && (
        <div className={styles.event_img}>
          <Image src={event.image_link} fill alt="Event Image" unoptimized />
        </div>
      )}
      <p className={styles.event_date}> {formattedDateTimeRange}</p>
      <p className={styles.event_description}>{event.description}</p>
      {new Date(event.end_date) > new Date() && (
        <>
          {loggedIn ? (
            <>
              {userTickets.length < event.ticket_limit && (
                <Button
                  className={styles.rsvp_button}
                  onClick={() => setIsModalOpen(true)}
                >
                  RSVP
                </Button>
              )}
              {userTickets.length > 0 && (
                <Button
                  className={styles.rsvp_button}
                  onClick={() => setIsTicketsModalOpen(true)}
                  variant="secondary"
                >
                  View Tickets
                </Button>
              )}
            </>
          ) : (
            <Button
              className={styles.rsvp_button}
              onClick={() => router.push("/login")}
            >
              Login to RSVP
            </Button>
          )}
        </>
      )}
      {user && isModalOpen && (
        <EventModal
          event={event}
          isOpen={isModalOpen}
          onClose={closeModal}
          user={user}
        />
      )}
      {user && isTicketsModalOpen && (
        <TicketsModal
          tickets={userTickets}
          event={event}
          isOpen={isTicketsModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EventCard;
