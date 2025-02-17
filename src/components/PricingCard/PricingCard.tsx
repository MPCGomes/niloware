import React from "react";
import styles from "./PricingCard.module.scss";
import Button from "../Button/Button";
import { Check as CheckIcon } from "@mui/icons-material";

interface PricingCardProps {
  plan: string;
  mostPopular: string;
  price: string;
  monthlyPrice: string;
  features: string[];
  backgroundGradient: string;
  textColor: string;
  btnColor: string;
  btnBorder: string;
  listColor: string;
  checkColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  mostPopular,
  price,
  monthlyPrice,
  features,
  backgroundGradient,
  textColor,
  btnColor,
  btnBorder,
  listColor,
  checkColor,
}) => {
  return (
    <div
      style={{ background: backgroundGradient, color: textColor }}
      className={styles.pricingCard}
    >
      <div className={styles.plan}>
        <p>{plan}</p>
        {mostPopular && <p className={styles.mostPopular}>{mostPopular}</p>}
      </div>
      <p className={styles.price}>{price}</p>
      {monthlyPrice && <p className={styles.monthlyPrice}>{monthlyPrice}</p>}
      <Button text="Contratar" color={btnColor} borderColor={btnBorder} />
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} style={{ color: listColor }}>
            <span style={{ color: checkColor }}>
              <CheckIcon fontSize="small" />
            </span>{" "}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
