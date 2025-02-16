"use client";

import React from "react";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import styles from "./ClientsSection.module.scss";

const ClientsSection: React.FC = () => {
  return (
    <section className={styles.clients}>
      <div className="container section">
        <h2 className={styles.title}>Clientes Satisfeitos</h2>
        <ClientCarousel />
      </div>
    </section>
  );
};

export default ClientsSection;
