import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/SecondNavBar.module.css";
import { FiMenu, FiX } from "react-icons/fi";

type SecondNavbarProps = {};

const SecondNavbar: React.FC<SecondNavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.header}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FiX className={styles.icon} /> : <FiMenu className={styles.icon} />}
        </div>
      </div>
      <div className={`${styles.cardContent} ${menuOpen ? styles.open : ""}`}>
        <Link href="/photos" passHref className={styles.link}>
          FOTOS
        </Link>
        <Link href="/videos" passHref className={styles.link}>
          VÍDEOS
        </Link>
      </div>
    </div>
  );
};

export default SecondNavbar;
