import Button from "@/components/Button";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import { useState } from "react";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import styles from "./style.module.css";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User logged in with Google:", user);
      // Make api call to check if user is in database and add them if not
      // if new user go to register page
    } catch (error: any) {
      setErrorMessage("Failed to log in with Google");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.popup}>
        <Image
          className={styles.logo}
          width={80}
          height={80}
          src={Logo}
          alt="Keebs Logo"
        />
        <h1>Welcome!</h1>
        <p>
          If you are new, sign up with your UCSD email. For returning users, log
          in to get started
        </p>
        {/* Go to google sign in page */}
        <Button onClick={handleGoogleLogin}>Sign in</Button>
        <div className={styles.loginDivider}>
          <hr className={styles.divider} />
          <p className={styles.or}>or</p>
          <hr className={styles.divider} />
        </div>
        {/* Go to sign up page */}
        <Button variant="secondary" href="/register">
          Sign up with UCSD email
        </Button>
      </div>
    </main>
  );
}
