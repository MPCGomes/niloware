import { Container } from "@mui/material";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { SectionHeadingWithPortfolioLink } from "../ui/SectionHeading";

const projects = [
  {
    numProject: "01",
    title: "Projeto A",
    description: "Descrição do projeto A",
    imageSrc:
      "https://www.webolto.com/wp-content/uploads/sites/3/2021/04/agencia-web.jpg",
  },
  {
    numProject: "02",
    title: "Projeto B",
    description: "Descrição do projeto B",
    imageSrc:
      "https://www.webolto.com/wp-content/uploads/sites/3/2021/04/agencia-web.jpg",
  },
  {
    numProject: "03",
    title: "Projeto C",
    description: "Descrição do projeto C",
    imageSrc:
      "https://www.webolto.com/wp-content/uploads/sites/3/2021/04/agencia-web.jpg",
  },
  {
    numProject: "04",
    title: "Projeto D",
    description: "Descrição do projeto D",
    imageSrc:
      "https://www.webolto.com/wp-content/uploads/sites/3/2021/04/agencia-web.jpg",
  },
];

const PortfolioSection = () => {
  return (
    <section>
      <Container>
        <SectionHeadingWithPortfolioLink
          subheading={"teste"}
          heading={"teste"}
        />
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              numProject={project.numProject}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
