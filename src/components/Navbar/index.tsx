import Image from "next/image";
import Link from 'next/link';
import logo from "../../../public/assets/logo.png";
import styles from "./style.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
        <Link href="/"><Image className={styles.logo} src={logo} alt="logo"/></Link>
        <Link href="/login" className={styles.button}>Log in</Link>
    </div>
  );
};

export default Navbar;