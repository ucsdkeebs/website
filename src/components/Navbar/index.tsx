import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import logo from "../../../public/assets/logo.png";
import ProfileIcon from "../../../public/assets/icons/profile.png";
import { deleteCookie } from "cookies-next";
import { PublicProfile } from "@/lib/types/apiResponses";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import { useState } from "react";

interface NavbarProps {
  user?: PublicProfile;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    deleteCookie("USER");
    deleteCookie("ACCESS_TOKEN");
    router.push("/login");
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logolink}>
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      <button
        className={`${styles.menubutton} ${
          isMenuOpen ? styles.closebutton : styles.openbutton
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles.navcontainer}>
        <div className={`${styles.navlinks} ${isMenuOpen ? styles.show : ""}`}>
          <Link href="/" className={styles.logolink2}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </Link>
          <Link
            href="/#about"
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/events"
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/#involved"
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link
            href="/#sponsors"
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            href="/#contact"
            className={styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          {user ? (
            <div className={styles.profileContainer}>
              <div className={styles.user}>
              <Image src={ProfileIcon} width={40} height={40} alt="Profile Icon"></Image>
              <span className={styles.username}>{user.username}</span>
              </div>
              <Button onClick={handleLogOut}>Log Out</Button>
            </div>
          ) : (
            <Link
              href="/login"
              className={`${styles.button} ${styles.button2}`}
            >
              Join
            </Link>
          )}
        </div>
        {!user && (
          <Link href="/login" className={styles.button}>
            Join
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;