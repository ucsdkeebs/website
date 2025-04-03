import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { getCookie } from "cookies-next";
import { PublicProfile } from "@/lib/types/apiResponses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  let user: PublicProfile | undefined;
  try {
    const userCookie = getCookie("USER");
    if (typeof userCookie === "string") {
      user = JSON.parse(userCookie);
    }
  } catch {}

  return (
    <>
      <Navbar user={user} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
