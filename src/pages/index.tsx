import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import ContentMusicArtist from "@/components/home/ContentMusicArtist";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SecondNavbar from "@/components/SecondNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>KyotoRecords</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/d-kyoto-cherry.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/w-kyoto-cherry.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Header />
      <SecondNavbar />
      <main className={styles.mainHomePage}>
        <div className={styles.titleReleased}>
          ÚLTIMOS LANÇAMENTOS
        </div>
        <ContentMusicArtist />

      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
