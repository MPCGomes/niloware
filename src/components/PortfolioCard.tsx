import type { FC, ReactNode } from "react";
import Image from "next/image";

interface PortfolioCardProps {
  title: ReactNode;
  description: string;
  projectNum: string;
  image: string;
  link: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  title,
  description,
  projectNum,
  image,
  link,
}) => {
  return (
    <a
      href={link}
      className="w-[287px] h-[413px] bg-[var(--color-primary-ghost)] rounded-[10px] px-6 pb-2 flex items-end relative overflow-hidden hover:bg-[var(--color-primary-soft)] hover:-translate-y-4 transition-all ease-in-out duration-300"
    >
      <Image
        width={300}
        height={300}
        src='/portfolio/project-01.svg'
        alt="error"
        className="absolute top-0 rotate-[-20deg]"
      />
      <div className="flex gap-2 items-center">
        <p className="text-[4rem] font-medium text-[var(--color-primary)]">{projectNum}</p>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
