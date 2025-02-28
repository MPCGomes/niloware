"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ClientCarousel.module.scss";
import Image from "next/image";

const clientLogos = [
  "/client-logos/logumrh.webp",
  "/client-logos/propabanda.webp",
  "/client-logos/clinica-apice.webp",
  "/client-logos/gesso-andrade.webp",
  "/client-logos/litoral-pisos.webp",
  "/client-logos/marmoraria-stone.webp",
  "/client-logos/pousada-lilabella.webp",
];

const ClientCarousel: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: false,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className={`${styles.wrapper} ${isMounted ? styles.visible : ""}`}>
      {isMounted && (
        <Slider {...settings} className={styles.carousel}>
          {clientLogos.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Client ${index}`}
                className={styles.image}
                width={0}
                height={28}
                sizes="auto"
                style={{ width: "auto", height: "28px" }}
                draggable="false"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ClientCarousel;
