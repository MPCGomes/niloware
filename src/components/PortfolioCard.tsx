import type { FC, ReactNode } from "react";

interface PortfolioCardProps {
  title: ReactNode;
  tags: ReactNode[];
  imageBackground: string;
  link: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  title,
  tags,
  imageBackground,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={`Veja o projeto: ${
        typeof title === "string" ? title : "Projeto"
      }`}
      className="relative min-h-[300px] h-full flex flex-col justify-end gap-[10px] p-[26px_24px] rounded-[24px] text-text-light no-underline bg-top bg-no-repeat bg-[length:100%] transition-[background-size] duration-300 ease-in-out hover:bg-[length:110%] overflow-hidden"
      style={{ backgroundImage: `url(${imageBackground})` }}
    >
      <div className="pointer-events-none absolute inset-0 z-[1] rounded-[24px] bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,115,255,0.3)_100%)]" />

      <p className="text-md font-semibold z-[2]">{title}</p>
      <div className="flex flex-wrap gap-[10px] z-[2]">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="text-base px-[10px] py-[2px] border border-text-light rounded-[30px] w-fit"
          >
            {tag}
          </p>
        ))}
      </div>
    </a>
  );
};

export default PortfolioCard;
