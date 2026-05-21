import config from "../config";
import { GetCheckedIn, GetCheckedInNonWin, GetCheckedInByRaffleSlot } from "../types/apiResponses";
import { TicketTailorData } from "../types/enum";
import axiosInstance from './axiosInstance';

// Get Checked In
export const getCheckedInTickets = async (): Promise<GetCheckedIn> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.getCheckedIn}`;
    const response = await axiosInstance.post<GetCheckedIn>(requestUrl);

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
export const getCheckedInTicketsNoWin = async (): Promise<TicketTailorData[]> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.getCheckedInNoWin}`;
    const response = await axiosInstance.get<GetCheckedInNonWin>(requestUrl);

    return response.data.tickets;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Failed to fetch tickets");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

// Get tickets by raffle slot (no win)
export const getCheckedInByRaffleSlot = async (requestBody: {raffleSlot: number}): Promise<TicketTailorData[]> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.getCheckedInByRaffleSlot}`;
    const response = await axiosInstance.get<GetCheckedInByRaffleSlot>(requestUrl);

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
): Promise<null> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.ticketTailor.updateWinner}/${ticketTailorId}`;
    const response = await axiosInstance.post<null>(requestUrl);

    return null;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "Couldn't update the winner");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
}