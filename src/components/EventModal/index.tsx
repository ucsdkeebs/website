import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { EventObject, TicketData } from "@/lib/types/enum";
import InputField from "@/components/InputField";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Image from "next/image";
import { PublicProfile } from "@/lib/types/apiResponses";
import { EventAPI } from "@/lib/api";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { toast } from "react-toastify";

interface EventModalProps {
  event: EventObject;
  isOpen: boolean;
  onClose: () => void;
  user: PublicProfile;
}

const genders = ["She/her", "He/him", "They/them", "Other"];
const sources = [
  "Discord",
  "Instagram",
  "Tabling",
  "Friend/Word of Mouth",
  "Campus Advertising",
  "Other",
];

const EventModal: React.FC<EventModalProps> = ({
  event,
  isOpen,
  onClose,
  user,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<TicketData>({
    defaultValues: {
      gender_identity: "",
      from_where: "",
      raffle_slot: 1,
      expected_spend: "$0",
    },
  });

  const [ticketData, setTicketData] = useState<TicketData[]>([]);
  const router = useRouter();

  const removeTicket = (index: number) => {
    setTicketData((prevTickets) => prevTickets.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  const addTicket = (data: TicketData) => {
    setTicketData((prevTickets) => [...prevTickets, data]);
    reset();
  };

  const submitAllTickets = async () => {
    try {
      const updatedTicketData = ticketData.map((ticket) => ({
        ...ticket,
        raffle_slot: 1,
        expected_spend: "$0",
      }));
      if (user._id) {
        const response = await EventAPI.rsvpToEvent(
          event._id,
          user._id,
          updatedTicketData
        );
        toast.success("RSVP Successful!");
        onClose();
        setTimeout(() => {
          router.reload();
        }, 1500);
      }
    } catch (error: any) {
      console.error("Error RSVP-ing to event", error.message);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.closeButton} onClick={onClose}>
          &times;
        </Button>
        <div className={styles.eventInfo}>
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
          <h3 className={styles.eventTitle}>{event.name}</h3>
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
        <hr className={styles.divider}/>
        <div className={styles.formContainer}>
          {ticketData.length < event.ticket_limit ? (
            <form
              onSubmit={handleSubmit(addTicket)}
              className={styles.rsvpForm}
            >
              <p className={styles.ticketLimit}>
                For this event, you&apos;re only allowed to get{" "}
                {event.ticket_limit} ticket(s)
              </p>
              <h3>Add Ticket</h3>
              <InputField
                name="first_name"
                register={register}
                error={errors.first_name?.message}
                placeholder="First Name"
                required
              />
              <InputField
                name="last_name"
                register={register}
                error={errors.last_name?.message}
                placeholder="Last Name"
                required
              />
              {errors.gender_identity && (
                <span className={styles.error}>
                  {errors.gender_identity.message}
                </span>
              )}
              <Controller
                name="gender_identity"
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
              <Controller
                name="from_where"
                rules={{ required: "From where is required" }}
                control={control}
                render={({ field }) => (
                  <Dropdown
                    name="fromwhereOptions"
                    options={sources}
                    value={field.value}
                    onChange={field.onChange}
                    className={styles.dropdown}
                    placeholder="Where did you hear about this?"
                  />
                )}
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
                      {ticket.first_name} {ticket.last_name} (
                      {ticket.gender_identity})
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
