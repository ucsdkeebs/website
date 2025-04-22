import { useState } from "react";
import { PublicProfile } from "@/lib/types/apiResponses";
import { TicketData } from "@/lib/types/enum";
import Button from "../Button";
import TicketModal from "../TicketModal";
import styles from "./style.module.css";

interface ProfileProps {
  user: PublicProfile;
  tickets: TicketData[];
}

const Profile: React.FC<ProfileProps> = ({ user, tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openTicketModal = (ticket: TicketData) => {
    setSelectedTicket(ticket);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h2>User Profile</h2>
        <div className={styles.profileCard}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Pronouns: {user.pronouns}</p>
        </div>
      </div>
      <div className={styles.ticketContainer}>
        <h2>Tickets</h2>
        {tickets.map((ticket) => (
          <div className={styles.ticketCard} key={ticket._id}>
            <h3>{ticket.eventId.name}</h3>
            <p>
              Name: {ticket.first_name} {ticket.last_name}
            </p>
            <p>Status: {ticket.checked_in ? "Checked In" : "Not Checked In"}</p>
            <Button onClick={() => openTicketModal(ticket)}>View Ticket</Button>
          </div>
        ))}
        <TicketModal
          ticket={selectedTicket as TicketData}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Profile;
