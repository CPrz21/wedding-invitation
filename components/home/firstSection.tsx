import { FC } from "react";

interface FirstSectionProps {}

export const FirstSection: FC<FirstSectionProps> = () => {
  return (
    <div className="parallax w-screen h-screen flex flex-col items-center justify-start pt-[65%] md:pt-[30%] lg:pt-[15%]">
      <h1 className="font-nothing text-4xl md:text-6xl lg:text-7xl xl:text-9xl typing-text">
        Save the date
      </h1>
      <h1 className="mb-5 text-w-primary">Aida & Carlos</h1>
      <h2>Sabado, 12 Nov. 2022</h2>
    </div>
  );
};
