import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './CardCarousel.module.scss';
import { HiOutlineExternalLink } from "react-icons/hi";

interface Card {
  image: string;
  mainTag: string;
  tag: string[];
  title: string;
}

interface CardCarouselProps {
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {cards.map((card, index) => (
        <div key={index} className={styles.cardCarousel}>
          <div className={styles.card}>
            <Image
              src={card.image}
              alt={`Card ${index}`}
              className={styles.image}
              width={500}
              height={300}
            />
            <HiOutlineExternalLink className={styles.icon} />
          </div>
          <div className={styles.text}>
            <div className={styles.tagContainer}>
              <p className={styles.mainTag}>
                {card.mainTag}
              </p>
              {card.tag.map((subTag, subIndex) => (
                <p
                  key={subIndex}
                  className={styles.tag}
                >
                  {subTag}
                </p>
              ))}
            </div>
            <p className={styles.title}>
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
