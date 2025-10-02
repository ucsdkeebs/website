import Link from "next/link";
import styles from "./style.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src="/assets/events/OAKmarquee.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Link
      className={styles.link}
        href="https://www.tickettailor.com/events/keyboardclub"
        target="_blank"
        rel="noopener noreferrer"
      >
        Looking for Once Upon A Keeb tickets? Click here!
      </Link>
    </div>
  );
};

export default Banner;
