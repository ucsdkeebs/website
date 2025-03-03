import Hero from "../sections/Hero";
import About from "../sections/About";
import Featured from "../sections/Featured";
import Sponsors from "../sections/Sponsors";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Featured />
      <Sponsors/>
    </main>
  );
}
