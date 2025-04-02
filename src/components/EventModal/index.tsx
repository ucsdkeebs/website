import { useForm } from "react-hook-form";
import { EventObject } from "@/lib/types/enum";
import InputField from "@/components/InputField";
import Button from "../Button";
import Image from "next/image";
import styles from "./style.module.css";

interface EventModalProps {
  event: EventObject;
  isOpen: boolean;
  onClose: () => void;
  onRSVP: (data: any) => void;
}

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
  } = useForm();

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        {/* <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button> */}
        <div className={styles.eventInfo}>
          <h2 className={styles.eventTitle}>{event.name}</h2>

          {event.image_link && (
            <div className={styles.eventImage}>
              <Image
                src={event.image_link}
                fill
                alt="Event Image"
                unoptimized
              ></Image>
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

        <form onSubmit={handleSubmit(onRSVP)} className={styles.rsvpForm}>
          <InputField
            name="name"
            register={register}
            error={errors.name?.message}
            placeholder="Your Name"
            required
          />

          <Button className={styles.rsvpButton}>RSVP Now</Button>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
