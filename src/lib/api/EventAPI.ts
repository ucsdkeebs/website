import config from "../config";
import { EventObject, TicketData } from "../types/enum";
import { RsvpResponse } from "../types/apiResponses";
import axios from "axios";

export const getEvents = async (): Promise<EventObject[]> => {
  const requestUrl = `${config.api.baseUrl}${config.api.endpoints.event.getEvents}`;
  const response = await axios.get<EventObject[]>(requestUrl);
  return response.data;
};

export const rsvpToEvent = async (
  eventId: string,
  userId: string,
  ticketData: TicketData[]
): Promise<RsvpResponse> => {
  try {
    const requestUrl = `${config.api.baseUrl}${config.api.endpoints.event.rsvp}${eventId}/rsvp`;

    const body = {
      userId,
      ticketData,
    };

    const response = await axios.post<RsvpResponse>(requestUrl, body);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.error || "RSVP failed");
    } else {
      throw new Error("Network error or failed to reach server");
    }
  }
};

export const getUserTicketsForEvent = async (
    userId: string,
    eventId: string
  ): Promise<{ tickets: TicketData[] }> => {
    try {
      const requestUrl = `${config.api.baseUrl}${config.api.endpoints.event.getUserTickets}`;
  
      const body = {
        userId,
        eventId,
      };
  
      const response = await axios.post<{ tickets: TicketData[] }>(requestUrl, body);
  
      return response.data.tickets ? { tickets: response.data.tickets } : { tickets: [] };
    } catch (error: any) {
      return { tickets: [] };
    }
  };
  
