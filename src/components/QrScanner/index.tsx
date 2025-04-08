import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import axios from "axios";

interface AdminQrScannerProps {
  adminId: string;
}

const AdminQrScanner: React.FC<AdminQrScannerProps> = ({ adminId }) => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleScan = async (result: string) => {
    if (result && result !== scanResult) {
      setScanResult(result);

      try {
        const res = await axios.post(`/api/checkin/${result}/${adminId}`);
        setMessage("✅ Check-in successful");
      } catch (err: any) {
        setMessage(err.response?.data?.error || "❌ Check-in failed");
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Admin QR Scanner</h2>
      <Scanner
        onScan={(text) => handleScan(text)}
        onError={(err) => {
          console.error("Scanner error:", err);
          setMessage("⚠️ Camera access error");
        }}
        options={{
          constraints: {
            facingMode: "environment",
          },
        }}
      />
      {scanResult && <p className="text-gray-700">Scanned Ticket ID: {scanResult}</p>}
      {message && <p className="font-semibold">{message}</p>}
    </div>
  );
};

export default AdminQrScanner;
