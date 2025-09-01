import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[60px] lg:px-[120px] py-[56px] space-y-[56px]">
      {children}
    </div>
  );
};

const CarouselContainer = ({ children }: ContainerProps) => {
  return <div className="h-[100px]">{children}</div>;
};

export default Container;
export { CarouselContainer };
