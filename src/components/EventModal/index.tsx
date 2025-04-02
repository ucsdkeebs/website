import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { EventObject } from "@/lib/types/enum";
import InputField from "@/components/InputField";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Image from "next/image";
import styles from "./style.module.css";

interface EventModalProps {
  event: EventObject;
  isOpen: boolean;
  onClose: () => void;
  onRSVP: (data: any) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  pronouns: string;
  fromWhere: string;
}

const genders = ["She/her", "He/him", "They/them", "Other"];

const EventModal: React.FC<EventModalProps> = ({
  event,
  isOpen,
  onClose,
  onRSVP,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      pronouns: "",
    },
  });

  const [ticketData, setTicketData] = useState<FormData[]>([]);

  const removeTicket = (index: number) => {
    setTicketData((prevTickets) => prevTickets.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  // Function to add ticket
  const addTicket = (data: FormData) => {
    setTicketData((prevTickets) => [...prevTickets, data]);
    reset(); // Reset form for next input
  };

  // Function to submit all tickets
  const submitAllTickets = () => {
    onRSVP(ticketData);
    setTicketData([]); // Clear tickets after submission
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.eventInfo}>
          <h2 className={styles.eventTitle}>{event.name}</h2>

          {event.image_link && (
            <div className={styles.eventImage}>
              <Image
                src={event.image_link}
                fill
                alt="Event Image"
                unoptimized
              />
            </div>
          )}

          <p className={styles.eventDate}>
            {new Date(event.start_date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}{" "}
            -{" "}
            {new Date(event.end_date).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>

          <p className={styles.eventDescription}>{event.description}</p>
        </div>
        <div className={styles.formContainer}>
          {ticketData.length < event.ticket_limit ? (
            <form
              onSubmit={handleSubmit(addTicket)}
              className={styles.rsvpForm}
            >
              <p>
                For this event, you're only allowed to get {event.ticket_limit}{" "}
                ticket(s)
              </p>
              <h3>Add Ticket</h3>
              <InputField
                name="firstName"
                register={register}
                error={errors.firstName?.message}
                placeholder="First Name"
                required
              />
              <InputField
                name="lastName"
                register={register}
                error={errors.lastName?.message}
                placeholder="Last Name"
                required
              />
              {errors.pronouns && (
                <span className={styles.error}>{errors.pronouns.message}</span>
              )}
              <Controller
                name="pronouns"
                rules={{ required: "Pronouns are required" }}
                control={control}
                render={({ field }) => (
                  <Dropdown
                    name="pronounsOptions"
                    options={genders}
                    value={field.value}
                    onChange={field.onChange}
                    className={styles.dropdown}
                    placeholder="Pronouns"
                  />
                )}
              />
            <InputField
                name="fromWhere"
                register={register}
                error={errors.fromWhere?.message}
                placeholder="Where Did You Hear About This Event?"
                required
              />

              <Button className={styles.addTicketButton}>Add Ticket</Button>
            </form>
          ) : (
            <p>You have reached the ticket limit for this event.</p>
          )}

          {ticketData.length > 0 && (
            <div className={styles.ticketContainer}>
              <h3>Added Tickets</h3>
              <div className={styles.ticketGrid}>
                {ticketData.map((ticket, index) => (
                  <div key={index} className={styles.ticketCard}>
                    <p>
                        {ticket.firstName} {ticket.lastName} ({ticket.pronouns})
                    </p>
                    <Button
                      onClick={() => removeTicket(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
              <Button onClick={submitAllTickets} className={styles.rsvpButton}>
                Submit All Tickets
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
