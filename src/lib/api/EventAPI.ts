import config from "../config";
import { EventObject } from "../types/enum";
import axios from "axios";

export const getEvents = async (): Promise<EventObject[]> => {
  const requestUrl = `${config.api.baseUrl}${config.api.endpoints.event.getEvents}`;
  const response = await axios.get<EventObject[]>(requestUrl);
  return response.data;
};
