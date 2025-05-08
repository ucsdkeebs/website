import { TicketAPI } from "@/lib/api";
import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { TicketData } from "@/lib/types/enum";
import { PublicProfile } from "@/lib/types/apiResponses";
import Profile from "@/components/Profile";
import styles from "./style.module.css";

interface ProfileProps {
  tickets: TicketData[];
  user: PublicProfile;
}

export default function ProfilePage({ tickets, user }: ProfileProps) {
  return (
    <main className={styles.main}>
      <Profile tickets={tickets} user={user} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const user = await getUserCookie({ req, res });

    if (!user) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const ticketsData = await TicketAPI.getUserTickets(user._id);

    return { props: { tickets: ticketsData, user } };
  } catch (error) {
    console.error("Error fetching user", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
