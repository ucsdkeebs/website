import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { PublicProfile } from "@/lib/types/apiResponses";
import RaffleSpinner from "@/components/RaffleSpinner/index";
import styles from "./style.module.css";

interface RaffleSpinnerProps {
    user: PublicProfile;
}

//user is here so that we can call Admin API stuff from the raffle spinner
export default function Admin({ user }: RaffleSpinnerProps) {
  return (
    <main className={styles.main}>
      <RaffleSpinner admin={user} />
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
      console.error("Error :", error);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
  