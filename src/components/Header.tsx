import { useState } from "react";
import styles from "@/styles/Header.module.css";

const menuLinks = [
  { label: "Minele", href: "/artistas/minele" },
  { label: "RafaMSL", href: "/artistas/rafamsl" },
  { label: "Nya", href: "/artistas/nya" },

];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.headerKyoto}>
      {/* Container que organiza o menu em 3 partes (esquerda, centro, direita) */}
      <div className={styles.navContainer}>
        {/* Logotipo/Marca ao centro */}
        <div className={styles.centerNav}>
          <a href="/">
            <img src="/d-kyoto-cherry.ico" alt="Logotipo Kyoto Records" className={styles.kyotoLogo} />
            <p className={styles.kyotoHeaderTitle}>
              KyotoRecords
            </p>
            
          </a>
        </div>

        {/* Menu da direita (desktop) */}
        <nav className={styles.rightNav}>
          {menuLinks.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Ícone de menu (hambúrguer) - só aparece no mobile */}
      <div className={styles.hamburger} onClick={handleToggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 
               6C3 6.55228 3.44772 7 4 
               7H20C20.5523 7 21 
               6.55228 21 6C21 
               5.44772 20.5523 5 20 
               5H4ZM7 12C7 
               11.4477 7.44772 11 8 
               11H20C20.5523 11 21 
               11.4477 21 12C21 
               12.5523 20.5523 13 20 
               13H8C7.44772 13 7 
               12.5523 7 12ZM13 
               18C13 17.4477 13.4477 17 
               14 17H20C20.5523 17 21 
               17.4477 21 18C21 
               18.5523 20.5523 19 20 
               19H14C13.4477 19 13 
               18.5523 13 18Z"
            fill="#212121"
          />
        </svg>
      </div>

      {/* Overlay de fundo escuro (clicar nele fecha o menu lateral) */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.active : ""}`}
        onClick={handleCloseMenu}
      ></div>

      {/* Menu lateral (mobile) */}
      <nav className={`${styles.sideNav} ${isMenuOpen ? styles.menuOpen : ""}`}>
        {/* Botão para fechar o menu lateral */}
        <div className={styles.closeButton} onClick={handleCloseMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.364 5.636a1 1 0 0 1 0 
                 1.414L13.414 12l4.95 4.95a1 1 0 1 
                 1-1.414 1.414L12 13.414l-4.95 
                 4.95a1 1 0 1 1-1.414-1.414L10.586 
                 12l-4.95-4.95a1 1 0 1 1 1.414-1.414L12 
                 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"
            />
          </svg>
        </div>

        {/* Todos os links (unidos em uma só lista) */}
        {[...menuLinks].map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
