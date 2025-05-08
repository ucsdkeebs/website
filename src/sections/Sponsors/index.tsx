import ImageCarousel from "@/components/ImageCarousel";
import { sponsors } from "@/lib/constants/sponsors";
import Link from "next/link";
import styles from "./style.module.css";

const Sponsors: React.FC = () => {
  return (
    <div className={styles.container} id="sponsors">
      <div className={styles.blurb}>
        <h1>Our Past Sponsors</h1>
        <h2
          className={styles.message}
        >{`UCSD Keebs would not be able to do what we do without the support of our generous sponsors.
        
        From the bottom of our heart, thank you.`}</h2>
        <Link href="mailto:keyboardclub@ucsd.edu" className={styles.buttonLink}>
          Want to support?
        </Link>
      </div>
      <ImageCarousel sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
