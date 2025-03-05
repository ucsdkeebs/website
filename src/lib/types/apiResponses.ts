export interface PublicProfile {
  uid: string;
  email: string;
  username: string;
  pronouns: string;
  ucsd_affiliation?: boolean;
  year?: string;
  major?: string;
}


export interface CreateUserResponse {
  user: PublicProfile;
}

export interface LoginResponse {
  message?: string;
  user: PublicProfile;
  redirect?: string;
}
