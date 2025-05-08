export interface UserRegistration {
  token: string;
  email: string;
  username: string;
  pronouns: string;
  ucsd_affiliation?: boolean;
  year?: string;
  major?: string;
}

export interface EventCreation {
  name: string;
  max_attendees: number;
  max_rsvps: number;
  start_date: Date;
  end_date: Date;
  slot_limit: number;
  num_slots: number;
  description: string;
  image_link: string;
}