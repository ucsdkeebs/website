import Image from "next/image";
import FITK from "../../../public/assets/events/fitk.png";
import LITK from "../../../public/assets/events/litk.png";
import NYNK from "../../../public/assets/events/nynk.png";
import styles from "./style.module.css";

const EventHero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.blurb}>
          We host big events every quarter, perfect for both beginners and
          custom keyboard lovers. Come try out new keyboards, chat with the
          community, and learn more about the hobby! We also throw fun socials
          like GBMs, boba hangouts, and game room events. Plus, we organize
          group buys for cool club and keyboard merch designed by our own
          artists. Join us and be part of the fun!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Image src={LITK} fill alt="LITK image" />
          <p className={styles.blurb}>Love In The Keebs | Winter 2024</p>
        </div>
        <div className={styles.image}>
          <Image src={FITK} fill alt="FITK image" />
          <p className={styles.blurb}>Fall Into Keebs | Fall 2024</p>
        </div>
        <div className={styles.image}>
          <Image src={NYNK} fill alt="NYNK image" />
          <p className={styles.blurb}>New Year New Keebs | Winter 2025</p>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
