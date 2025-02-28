import { FC } from "react";
import Image from "next/image";
import { Star } from "@mui/icons-material";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  photo: string;
  name: string;
  title: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  photo,
  name,
  title,
  rating,
  testimonial,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <Image
          src={photo}
          alt={`${name} - ${title}`}
          width={42}
          height={42}
          className={styles.photo}
        />
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>

      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={index < rating ? styles.starFilled : styles.starEmpty}
          />
        ))}
      </div>

      <p className={styles.testimonial}>{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
