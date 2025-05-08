import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <>
      <Head>
        <title>Keyboard Club at UC San Diego</title>
        <meta
          name="description"
          content="Join the Keyboard Club at UC San Diego to explore mechanical keyboards, mods, builds, and community events!"
        />
      </Head>
      <Navbar user={user} />
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
