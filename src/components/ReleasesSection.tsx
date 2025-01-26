import styles from "@/styles/ReleasesSection.module.css";

interface Release {
  title: string;
  date: string;
  cover: string;
  href: string;
}

interface ReleasesSectionProps {
  releases: Release[];
  setSectionRef: (el: HTMLElement | null, index: number) => void;
  sectionIndex: number;
}

export default function ReleasesSection({
  releases,
  setSectionRef,
  sectionIndex,
}: ReleasesSectionProps) {
  return (
    <section
      ref={(el) => setSectionRef(el, sectionIndex)}
      className={styles.releases}
    >
      <h2>Principais Lançamentos</h2>
      <ul>
        {releases.map(({ title, date, cover, href }) => (
          <li key={title}>
            <img
              src={cover}
              alt={`Capa do álbum ${title}`}
              className={styles.albumCover}
            />
            <p className={styles.titleAlbum}>
              {title}
            </p>
            <p>{date}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.listenLink}>
              Ouvir
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
