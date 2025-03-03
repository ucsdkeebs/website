import styles from "./style.module.css";

interface TextCardProps {
  title: string;
  body: string;
  buttonText: string;
  variant?: "primary" | "secondary";
  onButtonClick?: () => void;
}

const TextCard: React.FC<TextCardProps> = ({
  title,
  body,
  buttonText,
  variant = "primary",
  onButtonClick,
}) => {
  return (
    <div className={`${styles.textCard} ${styles[variant]}`}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.body}>{body}</h3>
      <button className={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default TextCard;