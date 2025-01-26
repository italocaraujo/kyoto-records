import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render button if `show` is true
  if (!show) {
    return null;
  }

  return (
    <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Voltar ao topo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        version="1.1"
        viewBox="0 0 490 490"
        className={styles.arrowUp}
      >
        <g>
          <polygon points="8.081,242.227 82.05,314.593 199.145,194.882 199.145,490 306.14,490 306.14,210.504 407.949,314.593 481.919,242.227 245.004,0" />
        </g>
      </svg>
    </button>
  );
}
