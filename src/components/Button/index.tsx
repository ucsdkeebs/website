import Link from "next/link";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  variant = "primary",
  href,
  className = "",
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return href ? (
    <Link className={buttonClass} href={href}>
      {children}
    </Link>
  ) : (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
