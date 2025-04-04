import React, { useState } from "react";
import styles from "@/styles/Photos.module.css";
import Header from "@/components/Header";
import SecondNavBar from "@/components/SecondNavBar";
import Head from "next/head";
import Footer from "@/components/Footer";

type Photo = {
  id: number;
  url: string;
};

const initialPhotos: Photo[] = [
  { id: 1, url: "/assets/images/photo1.jpg" },
  { id: 2, url: "/assets/images/photo2.jpg" },
  { id: 3, url: "/assets/images/photo3.jpg" },
  { id: 4, url: "/assets/images/photo4.jpg" },
  { id: 5, url: "/assets/images/photo5.jpg" },
  { id: 6, url: "/assets/images/photo6.jpg" },
  { id: 7, url: "/assets/images/photo7.jpg" },
];

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([...initialPhotos].reverse());
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedPhotoIndex(null);

  const showNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prevIndex) => (prevIndex! + 1) % photos.length);
    }
  };

  const showPreviousPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prevIndex) => (prevIndex! - 1 + photos.length) % photos.length);
    }
  };

  const addPhoto = (newPhoto: Photo) => {
    setPhotos((prevPhotos) => [newPhoto, ...prevPhotos]);
  };

  return (
    <>  
      <Head>
        <title>Fotos | KyotoRecords</title>
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
      <SecondNavBar />

      <section className={styles.sectionPhotos}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={styles.galleryItem}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img src={photo.url} alt={`Foto ${photo.id}`} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhotoIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.prevButton} onClick={showPreviousPhoto}>❮</button>
            <img
              src={photos[selectedPhotoIndex].url}
              alt="Foto Ampliada"
              className={styles.modalImage}
            />
            <button className={styles.nextButton} onClick={showNextPhoto}>❯</button>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PhotoGallery;
