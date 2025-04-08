import { TicketAPI } from "@/lib/api";
import TicketView from "@/components/TicketView";
import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import styles from "./style.module.css";
import { TicketData } from "@/lib/types/enum";

interface TicketsViewProps {
  tickets: TicketData[];
}

export default function TicketsView({ tickets }: TicketsViewProps) {
  return (
    <main className={styles.main}>
      <TicketView tickets={tickets}/>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const userCookie = (await getCookie("USER", { req, res })) || null;

    const user = userCookie ? JSON.parse(userCookie as string) : null;

    if (!user || !user.admin || !user._id) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const ticketsData = await TicketAPI.getAllTickets(user._id);

    return { props: { tickets: ticketsData } };
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
