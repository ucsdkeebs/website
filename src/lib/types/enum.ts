export interface EventObject {
  _id: string;
  name: string;
  max_attendees: number;
  max_rsvps: number;
  number_of_keebs: number;
  start_date: string;
  end_date: string;
  ticket_limit: number;
  slot_limit: number;
  num_slots: number;
  description?: string;
  image_link?: string;
  is_active: boolean;
}

export interface TicketData {
  _id: string;
  ownerId: {
    _id: string;
    email: string;
  };
  eventId: {
    _id: string;
    name: string;
  };
  first_name: string;
  last_name: string;
  gender_identity: string;
  from_where: string;
  expected_spend: string;
  checked_in?: boolean;
  raffle_slot: number;
}

export interface Sponsor {
  name: string;
  url: string;
  image: string;
}