"use client";

import React from "react";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";
import styles from "./FeaturesSection.module.scss";
import {
  Devices as DevicesIcon,
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon,
  Apps as AppsIcon,
  Share as ShareIcon,
  HeadsetMic as HeadsetMicIcon,
} from "@mui/icons-material";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const features = [
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Responsividade",
    description:
      "Designs personalizados e adaptados para computadores, tablets e celulares.",
    iconColor: "#0072FF",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Otimização Google",
    description: "Apareça no Google e seja encontrado com facilidade.",
    iconColor: "#00C853",
  },
  {
    icon: <EditIcon fontSize="large" />,
    title: "Personalização",
    description:
      "Edite textos, fontes e vídeos com ferramentas simples e intuitivas.",
    iconColor: "#6200EA",
  },
  {
    icon: <AppsIcon fontSize="large" />,
    title: "Variedade",
    description:
      "Soluções para advocacias, comércio, educação, turismo, saúde e muito mais.",
    iconColor: "#FF6D00",
  },
  {
    icon: <ShareIcon fontSize="large" />,
    title: "Integração",
    description:
      "Conecte suas soluções a redes sociais e sistemas empresariais.",
    iconColor: "#0091EA",
  },
  {
    icon: <HeadsetMicIcon fontSize="large" />,
    title: "Suporte",
    description:
      "Atendimento especializado, com manutenção e treinamentos completos.",
    iconColor: "#FFD600",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="container section">
      <SectionHeading
        subheading={"Você merece um site que vai impulsionar seu negócio"}
        heading={"Por Que Nos Escolher?"}
      />
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
