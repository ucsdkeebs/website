import config from "../config";
import { GetCheckedIn, GetCheckedInNonWin } from "../types/apiResponses";
import axios from "axios";
import { TicketTailorData } from "../types/enum";

// Get Checked In
export const getCheckedInTickets = async (
  adminId: string
): Promise<GetCheckedIn> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.getCheckedIn}/${adminId}`;
    const response = await axios.post<GetCheckedIn>(requestUrl);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Fetching checked in tickets failed.");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

// Get all tickets that havent won
export const getCheckedInTicketsNoWin = async (
  adminId: string
): Promise<TicketTailorData[]> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.getCheckedInNoWin}/${adminId}`;
    const response = await axios.get<GetCheckedInNonWin>(requestUrl);

    return response.data.tickets;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Failed to fetch tickets");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

// Updates ticket to show as a winner
export const updateWinner = async (
  ticketTailorId: string,
  adminId: string
): Promise<null> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.updateWinner}/${ticketTailorId}`;
    const response = await axios.post<null>(requestUrl);

    return null;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Couldn't update the winner");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
}