import Hero from "../sections/Hero";
import About from "../sections/About";
import Featured from "../sections/Featured";
import Sponsors from "../sections/Sponsors";
import { GetServerSideProps } from "next";
import { getUserCookie } from "@/lib/utils/auth";
import { PublicProfile } from "@/lib/types/apiResponses";
import styles from "../styles/Home.module.css";

export interface HomeProps {
  user?: PublicProfile;
}

export default function Home({ user }: HomeProps) {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Featured />
      <Sponsors />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getUserCookie({ req, res });
  return {
    props: {
      user,
    },
  };
};
