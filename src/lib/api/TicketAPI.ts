import config from "../config";
import { CheckInResponse, GetAllTicketsResponse } from "../types/apiResponses";
import axios from "axios";
import { TicketData } from "../types/enum";

// Check in ticket
export const checkIn = async (
  ticketId: string,
  adminId: string
): Promise<CheckInResponse> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticket.checkinTicket}/${ticketId}/${adminId}`;
    const response = await axios.post<CheckInResponse>(requestUrl);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "RSVP failed");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

// Get all tickets
export const getAllTickets = async (
  adminId: string
): Promise<TicketData[]> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticket.getAllTickets}/${adminId}`;
    const response = await axios.get<GetAllTicketsResponse>(requestUrl);

    return response.data.tickets;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Failed to fetch tickets");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

// Get user's tickets
export const getUserTickets = async (
  userId: string
): Promise<TicketData[]> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticket.getUserTicket}/${userId}`;
    const response = await axios.get<GetAllTicketsResponse>(requestUrl);

    return response.data.tickets;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Couldn't get user tickets");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
}