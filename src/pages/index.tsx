import About from "../sections/About";
import Events from "../sections/Events";
import Image from 'next/image';
import raccoon from '../../public/assets/racoon.svg';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <div className={styles.header_banner}>
        <h2 className={styles.header}>who we are</h2>
        <Image className={styles.raccoon_image} src={raccoon} width={100} height={100} alt="raccoon"></Image>
      </div>
        <About/>
        <div className={styles.header_banner}>
        <h2 className={styles.header}>upcoming events</h2>
        <Image className={styles.raccoon_image} src={raccoon} width={100} height={100} alt="raccoon"/>
      </div>
        <Events/>
      </main>
    </>
  );
}
