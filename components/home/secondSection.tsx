import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoLocationSharp } from "react-icons/io5";

export const SecondSection = () => {
  return (
    <section className="h-auto lg:h-screen w-screen bg-white lg:bg-w-secondary relative">
      <div className="lg:absolute lg:top-[50%] lg:left-[25%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rotate-[-5deg] py-12 lg:py-0">
        <h2 className="font-dancing text-5xl md:text-7xl text-center mb-10">
          Nuestra Boda
        </h2>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="w-3/4 h-[30rem] lg:w-full md:w-2/4 md:h-[40rem] lg:h-[30rem] relative rounded-lg overflow-hidden mx-auto lg:mx-0 rotate-[-7deg] lg:rotate-[0deg]">
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
      <div className="w-full h-auto lg:h-1/2 flex justify-end items-center bg-w-secondary lg:bg-transparent py-12 lg:py-0 px-6 lg:px-0">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInRight"
          className="w-full lg:w-[40%] font-nothing text-center lg:text-left"
        >
          <p className="text-2xl md:text-4xl mb-5">
            <strong>Cuando?</strong>
          </p>
          <p className="text-xl md:text-2xl">Sábado, 12 Nov. 2022</p>
          <p className="text-xl md:text-2xl">Recepción: 3:30pm</p>
        </AnimationOnScroll>
      </div>
      <div className="w-full h-auto lg:h-1/2 bg-white flex justify-end items-center py-12 lg:py-0 px-6 lg:px-0">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInRight"
          className="w-full lg:w-[40%] font-nothing text-center lg:text-left"
        >
          <p className="text-2xl md:text-4xl mb-5">
            <strong>Donde?</strong>
          </p>
          <p className="text-2xl md:text-4xl mb-2">
            <strong>Santa Angela</strong>
          </p>
          <p className="text-xl md:text-2xl mb-8">
            Carretera al Boquerón, KM, 18.5, <br /> Volcán de, San Salvador
          </p>
          <a
            target="_blank"
            href="https://goo.gl/maps/BoWj1wzxgHs12hBw8"
            className="text-xl md:text-2xl text-w-primary"
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
