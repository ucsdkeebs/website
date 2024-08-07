import About from "../sections/About";
import Events from "../sections/Events";
import Featured from "../sections/Featured";
import TitleHeader from "@/components/TitleHeader";
import styles from "../styles/Home.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <TitleHeader title="About Us" />
        <About />
        <TitleHeader title="Upcoming Events" />
        <Events />
        <TitleHeader title="Featured Club Activities" />
        <Featured />
      </main>

      
    </>
  );
}
