import Image from "next/image";
import Link from 'next/link';
import styles from "./style.module.css";
import TitleHeader from "@/components/TitleHeader";
import Discord from "../../../public/assets/discord.svg";
import Tiktok from "../../../public/assets/tiktok.svg";
import Instagram from "../../../public/assets/instagram.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
        <h1>Stay Connected!</h1>
        <div className={styles.iconDiv}>
            <Link href="https://discord.gg/KPVSVhPD"><Image className={styles.icon} src={Discord} alt="Discord"/></Link>
            <Link href="https://www.instagram.com/ucsdkeebs"><Image className={styles.icon} src={Instagram} alt="Instagram"/></Link>
            <Link href="https://www.tiktok.com/@ucsdkeebs"><Image className={styles.icon} src={Tiktok} alt="Tiktok"/></Link>
        </div>
    </div>
  );
};

export default Footer;
