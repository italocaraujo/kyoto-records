import { useEffect, useState, useRef } from "react";
import styles from "@/styles/artists/Minele.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReleasesSection from "@/components/ReleasesSection"; // Import the new component
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Head from "next/head";
import SecondNavbar from "@/components/SecondNavBar";

interface Release {
  title: string;
  date: string;
  cover: string;
  href: string;
}

export default function Minele() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const releases: Release[] = [
    {
        title: "Fauna",
        date: "Released November 16, 2024",
        cover: "/assets/covers/mineleFauna.png",
        href: "https://open.spotify.com/intl-pt/track/3mOjDY35tyt7GzsLkuq751?si=5f242b590b7e475c",
    },
    {
      title: "Telecinese",
      date: "Released August 16, 2024",
      cover: "/assets/covers/mineleTelecinese.png",
      href: "https://open.spotify.com/intl-pt/track/5EuvkAU25hURxOky05Z32g?si=519c58c2c6894bdc",
    },
  ];

  // === Fade-in for Banner ===
  useEffect(() => {
    const banner = document.querySelector<HTMLDivElement>(`.${styles.bannerImage}`);
    if (banner) {
      banner.style.opacity = "1";
      banner.style.transform = "scale(1)";
    }
  }, []);

  // === Scroll-to-top Button Visibility ===
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === IntersectionObserver for Section Animations ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInSection);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // === Assign Refs to Sections Dynamically ===
  const setSectionRef = (el: HTMLElement | null, index: number) => {
    if (el instanceof HTMLDivElement) {
      sectionsRef.current[index] = el;
    }
  };

  // === Smooth Scroll to Top ===
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.artistPage}>
      <Head>
        <title>Minele | KyotoRecords</title>
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

      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerImage}></div>
        <div className={styles.bannerContent}>
          <h1>Minele</h1>
          <p>
            Minele é um artista de trap que iniciou sua carreira musical em 2020. 
            Embora seja conhecido por suas músicas no gênero trap, ele também se dedica ao rock, que é seu estilo musical favorito. 
            Em 2025, Minele planeja lançar diversas músicas, enquanto continua sua jornada de evolução e autodescoberta musical, 
            explorando novas sonoridades e expandindo seus horizontes a cada dia.
          </p>
        </div>
      </div>

      {/* Principais Lançamentos */}
      <ReleasesSection
        releases={releases}
        setSectionRef={setSectionRef}
        sectionIndex={0}
      />

      {/* Social Links */}
      <section ref={(el) => setSectionRef(el, 1)} className={styles.socialLinks}>
        <h2>Conecte-se</h2>
        <div className={styles.links}>
          <a
            href="https://www.instagram.com/mateusminele_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com/intl-pt/artist/5nn8awiEDc24pzC2veJ5X0?si=Bm2PlU0mTbyz_YeFicIoGw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            href="https://www.youtube.com/@kyoto.records"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </section>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
}
