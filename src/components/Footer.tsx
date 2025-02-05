import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 KyotoRecords - Todos os direitos reservados.</p>
      <div className={styles.links}>
        <a href="mailto:comercialkyotorecords@gmail.com" className={styles.link}>
          comercialkyotorecords@gmail.com
        </a>
        <a href="https://www.instagram.com/kyoto.records" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Instagram
        </a>
        <a href="https://www.youtube.com/@kyoto.records" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Youtube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
