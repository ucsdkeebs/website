import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/assets/newlogo.png";
import styles from "./style.module.css";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logolink}><Image className={styles.logo} src={logo} alt="logo"/></Link>
      <button className={`${styles.menubutton} ${isMenuOpen ? styles.closebutton : styles.openbutton}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles.navcontainer}>
        <div className={`${styles.navlinks} ${isMenuOpen ? styles.show : ""}`}>
          <Link href="/" className={styles.logolink2}><Image className={styles.logo} src={logo} alt="logo"/></Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/events" className={styles.link}>Events</Link>
          <Link href="/sponsors" className={styles.link}>Sponsors</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/login" className={`${styles.button} ${styles.button2}`}>Join</Link>
        </div>
        <Link href="/login" className={styles.button}>Join</Link>
      </div>
    </div>
  );
};

export default Navbar;
