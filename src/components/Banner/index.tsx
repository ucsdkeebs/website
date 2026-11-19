import Link from "next/link";
import styles from "./style.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.video}
        src="/assets/events/hello_keebs_cropped.png"
      />
      <Link
      className={styles.link}
        href="https://www.tickettailor.com/events/keyboardclub"
        target="_blank"
        rel="noopener noreferrer"
      >
        Looking for Hello Keebs and Friends tickets? Click here!
      </Link>
    </div>
  );
};

export default Banner;
