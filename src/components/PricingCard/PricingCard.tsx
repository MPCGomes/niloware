import React from "react";
import clsx from "clsx";
import styles from "./PricingCard.module.scss";
import Button from "../Button/Button";
import { Check as CheckIcon } from "@mui/icons-material";

interface PricingCardProps {
  plan: string;
  mostPopular?: boolean;
  price: string;
  monthlyPrice?: string;
  features: string[];
  variant?: "default" | "popular";
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  mostPopular = false,
  price,
  monthlyPrice,
  features,
  variant = "default",
}) => {
  const whatsappLink = `https://wa.me/5512974096393?text=Olá, quero contratar o plano ${encodeURIComponent(
    plan
  )}.`;

  return (
    <div className={clsx(styles.pricingCard, styles[variant])}>
      <div className={styles.plan}>
        <p>{plan}</p>
        {mostPopular && <p className={styles.mostPopular}>Mais Popular</p>}
      </div>
      <p className={styles.price}>{price}</p>
      {monthlyPrice && <p className={styles.monthlyPrice}>{monthlyPrice}</p>}

      <Button
        text="Contratar"
        color={variant === "popular" ? "default" : "subtle"}
        onClick={() => window.open(whatsappLink, "_blank")}
      />

      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.listItem}>
            <span
              className={clsx(styles.checkIcon, {
                [styles.popularIcon]: variant === "popular",
              })}
            >
              <CheckIcon fontSize="small" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
