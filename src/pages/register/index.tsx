import { getCookie } from 'cookies-next/client';
import Register from "@/sections/RegisterForm";

export default function RegisterPage() {
  let email = "";
  let token = "";

  try {
    const userCookie = getCookie("USER");
    const tokenCookie = getCookie("ACCESS_TOKEN");

    if (userCookie) {
      const userData = JSON.parse(userCookie);
      email = userData?.email || "";
    }

    if (tokenCookie) {
      token = tokenCookie;
    }
  } catch (error) {
    console.error("Error retrieving cookies:", error);
  }

  return <Register email={email} token={token} />;
}
