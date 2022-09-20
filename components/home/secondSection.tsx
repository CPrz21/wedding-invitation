import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoLocationSharp } from "react-icons/io5";

export const SecondSection = () => {
  return (
    <section className="h-screen w-screen bg-w-secondary relative">
      <div className="absolute top-[50%] left-[25%] translate-x-[-50%] translate-y-[-50%] rotate-[-5deg]">
        <h2 className="font-dancing text-7xl text-center mb-10">
          Nuestra Boda
        </h2>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="w-full h-[30rem] relative rounded-lg overflow-hidden">
            <Image
              src="/images/aycphoto.jpg"
              alt={`Best Couple Ever ❤️`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </AnimationOnScroll>
      </div>
      <div className="w-full h-1/2 flex justify-end items-center">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInRight"
          className="w-[40%] font-nothing"
        >
          <p className="text-4xl mb-5">
            <strong>Cuando?</strong>
          </p>
          <p className="text-2xl">Sábado, 12 Nov. 2022</p>
          <p className="text-2xl">Recepción: 3:30pm</p>
        </AnimationOnScroll>
      </div>
      <div className="w-full h-1/2 bg-white flex justify-end items-center">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInRight"
          className="w-[40%] font-nothing"
        >
          <p className="text-4xl mb-5">
            <strong>Donde?</strong>
          </p>
          <p className="text-4xl mb-2">
            <strong>Santa Angela</strong>
          </p>
          <p className="text-2xl mb-8">
            Carretera al Boquerón, KM, 18.5, <br /> Volcán de, San Salvador
          </p>
          <a
            target="_blank"
            href="https://goo.gl/maps/BoWj1wzxgHs12hBw8"
            className="text-2xl text-w-primary"
            rel="noreferrer"
          >
            <strong>Ver Ubicación en Maps</strong>
            <IoLocationSharp className="inline ml-2 text-2xl" />
          </a>
        </AnimationOnScroll>
      </div>
    </section>
  );
};
