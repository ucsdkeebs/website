import Link from "next/link";
import styles from "./style.module.css";
import Discord from "../../../public/assets/discord.svg";
import Tiktok from "../../../public/assets/tiktok.svg";
import Instagram from "../../../public/assets/instagram.svg";
import LinkedIn from "../../../public/assets/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <div className={styles.iconDiv}>
          <Link
            href="https://www.instagram.com/ucsdkeebs"
            className={styles.link}
          >
            <Instagram className={styles.icon} />
            <p>Instagram</p>
          </Link>
          <Link href="discord.gg/ucsdkeebs" className={styles.link}>
            <Discord className={styles.icon} />
            <p>Discord</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@ucsdkeebs"
            className={styles.link}
          >
            <Tiktok className={styles.icon} />
            <p>Tiktok</p>
          </Link>
          <Link
            href="https://www.linkedin.com/company/keyboard-club-uc-san-diego/"
            className={styles.link}
          >
            <LinkedIn className={styles.icon} />
            <p>LinkedIn</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
