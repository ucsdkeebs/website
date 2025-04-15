import { TicketAPI } from "@/lib/api";
import TicketView from "@/components/TicketView";
import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { TicketData } from "@/lib/types/enum";
import { PublicProfile } from "@/lib/types/apiResponses";
import styles from "./style.module.css";

interface TicketsViewProps {
  tickets: TicketData[];
  user: PublicProfile;
}

export default function TicketsView({ tickets }: TicketsViewProps) {
  return (
    <main className={styles.main}>
      <TicketView tickets={tickets} />
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

    const ticketsData = await TicketAPI.getAllTickets(user._id);

    return { props: { tickets: ticketsData, user } };
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
