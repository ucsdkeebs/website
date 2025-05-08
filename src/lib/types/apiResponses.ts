import { TicketData } from "./enum";

export interface PublicProfile {
  _id?: string;
  uid: string;
  email: string;
  username: string;
  pronouns: string;
  ucsd_affiliation?: boolean;
  year?: string;
  major?: string;
  admin?: boolean;
}

export interface CreateUserResponse {
  user: PublicProfile;
}

export interface LoginResponse {
  message?: string;
  user: PublicProfile;
  redirect?: string;
}

export interface RsvpResponse {
  message: string;
  tickets: TicketData[];
}

export interface CheckInResponse {
  message: string;
  ticket: TicketData;
}

export interface GetAllTicketsResponse {
  tickets: TicketData[];
}