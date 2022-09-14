import { FC } from "react";
import { IChildren } from "../../interfaces";

interface ParallaxSectionProps extends IChildren {}

export const ParallaxSection: FC<ParallaxSectionProps> = ({ children }) => {
  return (
    <div className="parallax w-screen h-screen flex items-start justify-center pt-[10%]">
      {children}
    </div>
  );
};
