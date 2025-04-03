import Button from "@/components/Button";
import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import { UserAPI } from "@/lib/api";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userCookie = getCookie("USER");
    if (userCookie) {
      router.push("/");
    }
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Make api call to check if user is in database and add them if not
      // if new user go to register page
      const userToken = await user.getIdToken();
      const checkUser = await UserAPI.login(userToken);

      setCookie("ACCESS_TOKEN", userToken);

      if (checkUser == "/register") {
        setCookie("USER", user);
        router.push("/register");
      } else {
        setCookie("USER", checkUser);
        router.push("/");
      }
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
          If you are new, sign in with your <strong>Google</strong> account and fill out the new user
          information. If you are a UCSD student, please use your UCSD email to
          be allowed into UCSD-exclusive events.
        </p>
        <Button variant="secondary" onClick={handleGoogleLogin}>Sign in</Button>
        <p>For returning users, please log in!</p>
        <Button onClick={handleGoogleLogin}>Log in</Button>
      </div>
    </main>
  );
}
