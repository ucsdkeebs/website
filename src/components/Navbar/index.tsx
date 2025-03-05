import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/assets/logo.png";
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
          <Link href="/#about" className={styles.link} onClick={()=> setIsMenuOpen(!isMenuOpen)}>About</Link>
          <Link href="/#events" className={styles.link} onClick={()=> setIsMenuOpen(!isMenuOpen)}>Events</Link>
          <Link href="/#involved" className={styles.link} onClick={()=> setIsMenuOpen(!isMenuOpen)}>Get Involved</Link>
          <Link href="/#sponsors" className={styles.link} onClick={()=> setIsMenuOpen(!isMenuOpen)}>Sponsors</Link>
          <Link href="/#contact" className={styles.link} onClick={()=> setIsMenuOpen(!isMenuOpen)}>Contact</Link>
          <Link href="/login" className={`${styles.button} ${styles.button2}`}>Join</Link>
        </div>
        <Link href="/login" className={styles.button}>Join</Link>
      </div>
    </div>
  );
};

export default Navbar;
