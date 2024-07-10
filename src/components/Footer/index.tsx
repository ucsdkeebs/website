import Image from "next/image";
import Link from 'next/link';
import styles from "./style.module.css";
import TitleHeader from "@/components/TitleHeader";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
        <TitleHeader title="Stay Connected!" />
    </div>
  );
};

export default Footer;
