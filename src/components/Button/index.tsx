import Link from "next/link";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  href,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <Link
      className={`${styles.button} ${styles[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
