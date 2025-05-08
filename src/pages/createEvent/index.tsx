import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { PublicProfile } from "@/lib/types/apiResponses";
import EventForm from "@/sections/EventForm";
import styles from "./style.module.css";

interface CreateEventProps {
  user: PublicProfile;
}

export default function CreateEvent({ user }: CreateEventProps) {
  return (
    <main className={styles.main}>
      <EventForm user={user} />
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
