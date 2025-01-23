import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import Discord from "../../../public/assets/discord.svg";
import Tiktok from "../../../public/assets/tiktok.svg";
import Instagram from "../../../public/assets/instagram.svg";
import LinkedIn from "../../../public/assets/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.navlinks}>
        <p>Keyboard Club</p>
        <Link href="/about" className={styles.link}>
          About Us
        </Link>
        <Link href="/events" className={styles.link}>
          Events
        </Link>
        <Link href="/shop" className={styles.link}>
          Shop
        </Link>
        <Link href="/sponsors" className={styles.link}>
          Sponsors
        </Link>
        <Link href="/socials" className={styles.link}>
          Socials
        </Link>
        <Link href="/recruitment" className={styles.link}>
          Recruitment
        </Link>
      </div>
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <div className={styles.iconDiv}>
          <Link
            href="https://www.instagram.com/ucsdkeebs"
            className={styles.link}
          >
            <Image className={styles.icon} src={Instagram} alt="Instagram" />
            <p>Instagram</p>
          </Link>
          <Link href="https://discord.gg/KPVSVhPD" className={styles.link}>
            <Image className={styles.icon} src={Discord} alt="Discord" />
            <p>Discord</p>
          </Link>
          <Link
            href="https://www.tiktok.com/@ucsdkeebs"
            className={styles.link}
          >
            <Image className={styles.icon} src={Tiktok} alt="Tiktok" />
            <p>Tiktok</p>
          </Link>
          <Link
            href="https://www.linkedin.com/company/keyboard-club-uc-san-diego/"
            className={styles.link}
          >
            <Image className={styles.icon} src={LinkedIn} alt="LinkedIn" />
            <p>LinkedIn</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
