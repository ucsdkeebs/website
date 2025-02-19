import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page_container">
      <Navbar />
      <main className="main_content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
