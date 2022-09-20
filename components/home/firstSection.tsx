import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

interface FirstSectionProps {}

export const FirstSection: FC<FirstSectionProps> = () => {
  return (
    <div className="parallax w-screen h-screen flex flex-col items-center justify-start pt-[65%] md:pt-[30%] lg:pt-[15%]">
      <TypeAnimation
        sequence={["Save the date"]}
        wrapper="h1"
        className="font-nothing text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
        cursor={true}
        speed={5}
      />
      <h1 className="mb-5 text-w-primary">Aida & Carlos</h1>
      <h2>Sabado, 12 Nov. 2022</h2>
    </div>
  );
};
