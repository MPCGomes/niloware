import React from "react";
import styles from "./PricingCard.module.scss";
import Button from "../Button/Button";
import { Check as CheckIcon } from "@mui/icons-material";

interface FeatureCardProps {
  plan: string;
  mostPopular: string;
  price: string;
  monthlyPrice: string;
  feature: string;
  backgroundGradient:string;
  textColor: string;
  btnColor: string;
  btnBorder: string;
}

const PricingCard: React.FC<FeatureCardProps> = ({
  plan,
  mostPopular,
  price,
  monthlyPrice,
  feature,
  backgroundGradient,
  textColor,
  btnColor,
  btnBorder,

}) => {
  return (
    <div 
    style={{background: backgroundGradient, color: textColor}}
    className={styles.pricingCard}>
      <div className={styles.plan}>
        <p>{plan}</p>
        <p>{mostPopular}</p>
      </div>
      <p className={styles.price}>{price}</p>
      <p className={styles.monthlyPrice}>{monthlyPrice}</p>
      <Button text={"Contratar"} color={btnColor} borderColor={btnBorder} />
      <ul className={styles.featureList}>
        <li>
          <CheckIcon fontSize="small" /> {feature}
        </li>
      </ul>
    </div>
  );
};

export default PricingCard;
