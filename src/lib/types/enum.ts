export interface EventObject {
  id: string;
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
