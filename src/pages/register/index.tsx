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
    const userCookie = await getUserCookie({ req, res });

    if (userCookie) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    const userData = await getCookie("GOOGLE_USER", { req, res });
    const tokenCookie = await getCookie("ACCESS_TOKEN", { req, res });

    let email = "";
    if (typeof userData === "string") {
      const parsedUser = JSON.parse(userData);
      email = parsedUser.email || "";
    }
    const token = typeof tokenCookie === "string" ? tokenCookie : "";

    if (!email || !token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: { email, token },
    };
  } catch (error) {
    console.error("Error retrieving cookies:", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
