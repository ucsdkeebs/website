import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import Register from "@/sections/RegisterForm";

interface RegisterPageProps {
  email: string;
  token: string;
}

export default function RegisterPage({ email, token }: RegisterPageProps) {
  return <Register email={email} token={token} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const userCookie = await getCookie("USER", { req, res });
    const tokenCookie = await getCookie("ACCESS_TOKEN", { req, res });

    let email = "";
    let token = "";

    if (typeof userCookie === "string") {
      const userData = JSON.parse(userCookie);
      email = userData?.email || "";
    }

    if (typeof tokenCookie === "string") {
      token = tokenCookie;
    }

    return {
      props: { email, token },
    };
  } catch (error) {
    console.error("Error retrieving cookies:", error);
    return {
      props: { email: "", token: "" },
    };
  }
};
