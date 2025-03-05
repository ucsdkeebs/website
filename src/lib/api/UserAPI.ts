import config from "../config";
import { UserRegistration } from "../types/apiRequests";
import {
  PublicProfile,
  CreateUserResponse,
  LoginResponse,
} from "../types/apiResponses";
import axios from "axios";

export const createUser = async (
  user: UserRegistration
): Promise<PublicProfile> => {
  const requestUrl = `${config.api.baseUrl}${config.api.endpoints.user.createUser}`;
  console.log(user)
  const response = await axios.post<CreateUserResponse>(requestUrl, user);
  return response.data.user;
};

export const login = async (token: string): Promise<PublicProfile | string> => {
  const response = await axios.get<LoginResponse>(
    `${config.api.baseUrl}${config.api.endpoints.user.login}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.data.redirect) {
    return response.data.redirect;
  }
  return response.data.user;
};
