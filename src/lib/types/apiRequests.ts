export interface UserRegistration {
  token: string;
  email: string;
  username: string;
  pronouns: string;
  ucsd_affiliation?: boolean;
  year?: string;
  major?: string;
}
