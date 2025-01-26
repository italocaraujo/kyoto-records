import styles from "@/styles/ContentMusicArtist.module.css";

const ContentMusicArtist = () => {
  interface ContentMusicArtist {
    cover: string;
    music: string;
    date: string;
    url: string;
  }

  const contentMusic: ContentMusicArtist[] = [
    {
      cover: "/assets/covers/mineleFauna.png",
      music: "Minele - Fauna",
      date: "Released November 16, 2024",
      url: "https://open.spotify.com/intl-pt/track/3mOjDY35tyt7GzsLkuq751?si=5f242b590b7e475c",
    },
    {
      cover: "/assets/covers/rafaNaVisao.png",
      music: "RafaMSL - Na Visão",
      date: "Released September 29, 2024",
      url: "https://open.spotify.com/intl-pt/track/1hlGhvnWXDFKVeLHEYWcYv?si=e5101093c17444bc",
    },
    {
      cover: "/assets/covers/mineleTelecinese.png",
      music: "Minele - Telecinese (feat. RafaMSL)",
      date: "Released August 16, 2024",
      url: "https://open.spotify.com/intl-pt/track/5EuvkAU25hURxOky05Z32g?si=519c58c2c6894bdc",
    },
    {
      cover: "/assets/covers/zecaParasita.png",
      music: "Zeca Icaris - Parasita",
      date: "Released October 16, 2023",
      url: "https://www.youtube.com/playlist?list=PLFWypV3Onhh5HNVEm_8Syq-y9qXjXAuna",
    },
  ];

  return (
    <section>
      <div className={styles.ouvirLinks}>
        {contentMusic.map(({ cover, music, date, url }, index) => (
          <div key={index} className={styles.card}>
            <img src={cover} alt={music} className={styles.coverImage} />
            <h3 className={styles.musicTitle}>{music}</h3>
            <p className={styles.releaseDate}>{date}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.listenLink}>
              Ouvir
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentMusicArtist;
