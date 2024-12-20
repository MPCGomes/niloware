import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { HiOutlineExternalLink } from 'react-icons/hi';
import styles from './CardCarousel.module.scss';

interface CardCarouselProps {
  cards: Array<{
    id: number;
    client: string;
    tags: Array<string>;
    image: string;
    url: string;
  }>;
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
      {cards.map(card => (
        <div key={card.id} className={styles.cardCarousel}>
          <div className={styles.card}>
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={card.image}
                alt={card.client}
                className={styles.image}
                width={500}
                height={300}
              />
              <HiOutlineExternalLink className={styles.icon} />
            </a>
          </div>
          <div className={styles.text}>
            <div className={styles.tagContainer}>
              {card.tags.map((tag, index) => (
                <p key={index} className={index === 0 ? styles.mainTag : styles.tag}>
                  {tag}
                </p>
              ))}
            </div>
            <p className={styles.title}>{card.client}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;
