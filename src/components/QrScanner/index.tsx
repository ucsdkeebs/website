import { useState } from "react";
import { Scanner, IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { TicketAPI } from "@/lib/api";
import { TicketData } from "@/lib/types/enum";
import Image from "next/image";
import CheckIcon from "../../../public/assets/icons/check.png";
import ErrorIcon from "../../../public/assets/icons/error.png";
import { PublicProfile } from "@/lib/types/apiResponses";
import styles from "./style.module.css";
import Button from "../Button";

interface QrScannerProps {
  admin: PublicProfile;
}

const QrScanner: React.FC<QrScannerProps> = ({ admin }) => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState<TicketData | null>(null);
  const [scannerActive, setScannerActive] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleClose = () => {
    setScannerActive(false);
    setValue("");
    setUser(null);
    setStatus("");
  };

  const handleScan = async (results: IDetectedBarcode[]) => {
    if (!results?.length) return;

    const ticketId = results[0].rawValue;
    if (ticketId === value) return;

    setValue(ticketId);

    try {
      const response = await TicketAPI.checkIn(ticketId, admin._id as string);
      setUser(response.ticket);
      setStatus("success");
    } catch (err: any) {
      setUser(null);
      setStatus("error");
    }
  };

  return (
    <div className={styles.container}>
      <h2>QR Code Scanner</h2>

      {!scannerActive ? (
        <Button variant="secondary" onClick={() => setScannerActive(true)}>
          Open Scanner
        </Button>
      ) : (
        <>
          <Scanner
            styles={{
              container: { maxWidth: "400px" },
              finderBorder: 4,
            }}
            onScan={handleScan}
          />
          <Button variant="secondary" onClick={handleClose}>Close Scanner</Button>
        </>
      )}

      {value && <p>Scanned Ticket Id: {value}</p>}
      {user && (
        <p>
          Scanned Name: {user.first_name} {user.last_name}
        </p>
      )}

      {status === "success" && (
        <Image
          src={CheckIcon}
          alt="Check-in success"
          width={150}
          height={150}
        />
      )}
      {status === "error" && (
        <Image src={ErrorIcon} alt="Check-in failed" width={150} height={150} />
      )}
    </div>
  );
};

export default QrScanner;
