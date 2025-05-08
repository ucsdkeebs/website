import Button from "../Button";
import { EventObject, TicketData } from "@/lib/types/enum";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./style.module.css";

interface TicketsModalProps {
  tickets: TicketData[];
  event: EventObject;
  isOpen: boolean;
  onClose: () => void;
}

const TicketsModal: React.FC<TicketsModalProps> = ({
  tickets,
  event,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Your Tickets for {event.name}</h2>
        <div className={styles.ticketGrid}>
          {tickets.map((ticket, index) => (
            <div key={index} className={styles.ticketCard}>
              <QRCodeCanvas value={ticket._id} size={128} />
              <p>
                {ticket.first_name} {ticket.last_name} ({ticket.gender_identity}
                )
              </p>
            </div>
          ))}
        </div>
        <Button onClick={onClose} className={styles.closeButton}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default TicketsModal;
