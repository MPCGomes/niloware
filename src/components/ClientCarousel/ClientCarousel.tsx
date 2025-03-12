"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./ClientCarousel.module.scss";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const clientLogos = [
  "/client-logos/logumrh.webp",
  "/client-logos/propabanda.webp",
  "/client-logos/clinica-apice.webp",
  "/client-logos/gesso-andrade.webp",
  "/client-logos/litoral-pisos.webp",
  "/client-logos/marmoraria-stone.webp",
  "/client-logos/pousada-lilabella.webp",
];

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

const ClientCarousel: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Slider {...settings} className={styles.carousel}>
        {clientLogos.map((src) => (
          <div key={src} className={styles.imageWrapper}>
            <Image
              src={src}
              alt="Client Logo"
              className={styles.image}
              width={0}
              height={36}
              sizes="auto"
              style={{ width: "auto", height: "36px" }}
              draggable="false"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
