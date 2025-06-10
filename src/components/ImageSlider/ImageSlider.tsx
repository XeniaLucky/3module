import React, { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./img/Rectangle_2.png",
    "./img/0x0.png"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className={styles.imageContainer}>
      <img src="./img/rectangle_white&black.png" className={styles.backgroundImg} alt="Background" />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`${styles.overlay} ${index === currentIndex ? styles.active : ''}`}
          alt={`Image ${index + 1}`}
        />
      ))}
    </section>
  );
};

export default ImageSlider;
