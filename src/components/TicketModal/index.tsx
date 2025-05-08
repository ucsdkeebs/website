import Button from "../Button";
import { TicketData } from "@/lib/types/enum";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./style.module.css";

interface TicketModalProps {
  ticket: TicketData;
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({
  ticket,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Your Ticket for {ticket.eventId.name}</h2>
        <div className={styles.ticketCard}>
          <QRCodeCanvas value={ticket._id} size={128} />
          <p>
            {ticket.first_name} {ticket.last_name} ({ticket.gender_identity})
          </p>
        </div>
        <Button onClick={onClose} className={styles.closeButton}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default TicketModal;
