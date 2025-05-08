import QrScanner from "@/components/QrScanner";
import Button from "@/components/Button";
import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { PublicProfile } from "@/lib/types/apiResponses";
import styles from "./style.module.css";

interface AdminProps {
  user: PublicProfile;
}

export default function Admin({ user }: AdminProps) {
  return (
    <main className={styles.main}>
      <QrScanner admin={user} />
      <Button href="/ticketsView">Go to Tickets View</Button>
      <Button href='/createEvent'>Create An Event</Button>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const user = await getUserCookie({ req, res });

    if (!user || !user.admin || !user._id) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error("Error verifying admin user:", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
