"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ClientCarousel.module.scss";

const logos = [
  "/logos/logumrh.png",
  "/logos/propabanda.png",
  "/logos/clinica-apice.webp",
  "/logos/gesso-andrade.webp",
  "/logos/litoral-pisos.webp",
  "/logos/marmoraria-stone.webp",
  "/logos/pousada-lilabella.webp",
];

const ClientCarousel: React.FC = () => {
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
    centerMode: false,
    variableWidth: true,
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings} className={styles.carousel}>
        {logos.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={src}
              alt={`Client ${index}`}
              className={styles.image}
              width="auto"
              height={28}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
