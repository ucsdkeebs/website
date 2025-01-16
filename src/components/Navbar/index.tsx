import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/assets/logo.png";
import styles from "./style.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
        <Link href="/"><Image className={styles.logo} src={logo} alt="logo"/></Link>
        <div className={styles.buttonContainer}>
            <Link href="/about" className={styles.button}>About Us</Link>
            <Link href="/events" className={styles.button}>Events</Link>
            <Link href="/shop" className={styles.button}>Shop</Link>
            <Link href="/sponsors" className={styles.button}>Sponsors</Link>
            <Link href="/socials" className={styles.button}>Socials</Link>
            <Link href="/recruitment" className={styles.button}>Recruitment</Link>
            <Link href="/login" className={styles.loginButton}><b>Log in</b></Link>
        </div>
    </div>
  );
};

export default Navbar;
