import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import { getUserCookie } from "@/lib/utils/auth";
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
    const userData = await getUserCookie({ req, res });
    const tokenCookie = await getCookie("ACCESS_TOKEN", { req, res });

    const email = userData?.email || "";
    const token = typeof tokenCookie === "string" ? tokenCookie : "";

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
