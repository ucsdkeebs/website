import Link from "next/link";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  href,
  className = "",
  children,
  onClick,
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return href ? (
    <Link className={buttonClass} href={href} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
