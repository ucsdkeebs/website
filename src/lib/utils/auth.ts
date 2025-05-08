import { getCookie } from "cookies-next";
import type { OptionsType } from "cookies-next";

export const getUserCookie = async (options: OptionsType) => {
  const cookie = await getCookie("USER", options);
  return cookie ? JSON.parse(cookie) : null;
};
