import { useState } from "react";
import { TicketData } from "@/lib/types/enum";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import DownloadIcon from '../../../public/assets/icons/download.svg';
import styles from "./style.module.css";

interface TicketViewProps {
  tickets: TicketData[];
}

const TicketView: React.FC<TicketViewProps> = ({ tickets }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const statusOptions = ["All", "Checked In", "Not Checked In"];

  // Apply search and filter
  const filteredTickets = tickets.filter((ticket) => {
    const fullName = `${ticket.first_name} ${ticket.last_name}`.toLowerCase();
    const matchesName = fullName.includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All"
        ? true
        : filterStatus === "Checked In"
        ? ticket.checked_in
        : !ticket.checked_in;

    return matchesName && matchesStatus;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTickets = filteredTickets.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const downloadCSV = () => {
    const headers = ["Ticket ID", "Name", "From", "Spend", "Checked In"];
    const rows = filteredTickets.map((ticket) => [
      ticket._id,
      `${ticket.first_name} ${ticket.last_name}`,
      ticket.from_where,
      ticket.expected_spend,
      ticket.checked_in ? "Checked In" : "Not Checked In",
    ]);

    const csvContent =
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "tickets.csv");
    link.click();
  };

  return (
    <div className={styles.container}>
      <h2>All Tickets</h2>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page
          }}
        />

        <Dropdown
          name="checkin-filter"
          options={statusOptions}
          value={filterStatus}
          onChange={(value) => {
            setFilterStatus(value);
            setCurrentPage(1); // reset to first page
          }}
        />
        <DownloadIcon className={styles.downloadIcon}onClick={downloadCSV}/>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Name</th>
            <th>From</th>
            <th>Spend</th>
            <th>Checked In</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTickets.map((ticket) => (
            <tr key={ticket._id}>
              <td data-label="Ticket ID">{ticket._id}</td>
              <td data-label="Name">
                {ticket.first_name} {ticket.last_name}
              </td>
              <td data-label="From">{ticket.from_where}</td>
              <td data-label="Spend">{ticket.expected_spend}</td>
              <td data-label="Checked In">{ticket.checked_in ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className={styles.pagination}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </Button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default TicketView;
