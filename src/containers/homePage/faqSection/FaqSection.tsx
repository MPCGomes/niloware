"use client";

import React from "react";
import FaqCard from "@/components/FaqCard/FaqCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./FaqSection.module.scss";

const faqs = [
  {
    question: "Por que devo ter um site?",
    answer:
      "Ter um site ajuda sua empresa a ser encontrada online, passando mais credibilidade e atraindo mais clientes.",
  },
  {
    question: "Quais tipos de sites a Niloware desenvolve?",
    answer:
      "Criamos blogs, landing pages, lojas virtuais e outros tipos de sites para diferentes áreas, como advocacia, gastronomia e muito mais.",
  },
  {
    question: "Qual o prazo médio de entrega de um site?",
    answer:
      "Um site básico pode ficar pronto em até 5 dias úteis, um site profissional em até 15 dias úteis e um projeto personalizado em até 20 dias úteis.",
  },
  {
    question: "O que preciso fornecer para desenvolver um site?",
    answer:
      "Informações básicas sobre seu negócio, como nome, endereço, telefone, logo, e textos, imagens, vídeos e outros conteúdos que você deseja ver no seu site.",
  },
  {
    question: "Meu site funcionará em tablets e celulares?",
    answer:
      "Sim, todos os nossos sites são adaptados para computadores, tablets e celulares.",
  },
  {
    question: "Meu site aparecerá no Google?",
    answer:
      "Sim, otimizamos todos os sites para que eles apareçam no Google e em outros mecanismos de busca, como Bing e Yahoo.",
  },
  {
    question: "Posso hospedar meu site em outra empresa?",
    answer:
      "Sim. Fornecemos os arquivos do site para você hospedar onde preferir. Nesse caso, não há custos mensais conosco, mas também não oferecemos suporte ou instalação em outros servidores.",
  },
  {
    question: "Quais os custos mensais após a entrega?",
    answer:
      "Se optar por nossa hospedagem e suporte, o valor é de R$ 29,90 mensais ou R$ 287,04 anuais (com 20% de desconto).",
  },
  {
    question: "Quais formas de pagamento estão disponíveis?",
    answer: "Aceitamos pagamento via Pix e transferência bancária.",
  },
  {
    question: "Qual a garantia de segurança ao contratar a Niloware?",
    answer:
      "Firmamos um contrato digital para garantir os direitos e deveres de ambas as partes, trazendo mais tranquilidade e proteção.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "É simples: entre em contato pelo WhatsApp ou clique nos botões disponíveis em nosso site.",
  },
  {
    question: "Posso fazer alterações no meu site após a entrega?",
    answer:
      "Sim. Todos os sites incluem um painel de controle simples, permitindo alterar textos, imagens, vídeos e até mesmo o próprio design.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="container section">
      <SectionHeading
        subheading="Respostas simples para ajudar você a fazer a escolha certa"
        heading="Perguntas Frequentes"
      />
      <div className={styles.faqGrid}>
        {faqs.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
