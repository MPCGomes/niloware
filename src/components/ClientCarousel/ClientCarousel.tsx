"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ClientCarousel.module.scss";

const logos = Array.from({ length: 8 }, (_, i) => `/logos/${i + 1}.png`);

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
            <Image
              src={src}
              alt={`Client ${index}`}
              className={styles.image}
              width={100}
              height={28}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
