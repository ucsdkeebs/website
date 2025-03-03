import styles from "./style.module.css";
import Link from "next/link";

interface TextCardProps {
  title: string;
  body: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "primary" | "secondary";
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  body,
  buttonText,
  buttonHref,
  variant = "primary",
}) => {
  return (
    <div className={`${styles.textCard} ${styles[variant]}`}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.body}>{body}</h3>
      {buttonText && buttonHref && (
        <Link href={buttonHref} className={styles.buttonLink}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default TextCard;
