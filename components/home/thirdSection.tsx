import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Friend, Invitation } from "../../interfaces";

export const ThirdSection = () => {
  const { query } = useRouter();

  const { invitation = null, friend = null } = query || {};
  return (
    <section className="bg-w-secondary py-11 flex flex-col items-center">
      <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
        <h2 className="font-dancing text-5xl md:text-7xl text-center mb-4">
          ¡A celebrar!
        </h2>
      </AnimationOnScroll>
      <p className="text-2xl md:text-4xl mb-8 font-nothing w-4/5 md:w-3/5 text-center">
        Sera muy especial contar contigo, no olvides confirmar tu asistencia a
        nuestra boda.
      </p>
      <div className="flex space-x-2 justify-center">
        {friend && invitation ? (
          <a
            href={`
          https://api.whatsapp.com/send/?phone=503${
            (friend as Friend) === "A" ? "72344557" : "75013093"
          }&text=%C2%A1Hola%21+${
              (friend as Friend) === "A" ? "Aida" : "Carlos"
            }+quiero+confirmar+mi+asistencia${
              (invitation as Invitation) === "2" ? "+de+dos+personas" : ""
            }+para+tu+boda+%F0%9F%98%8A%F0%9F%8E%89
          `}
          >
            <button
              type="button"
              className="font-nothing inline-block px-6 py-2.5 bg-white text-black text-xl leading-tight shadow-md hover:opacity-70 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-40 active:shadow-lg transition duration-150 ease-in-out"
            >
              Confirmar
            </button>
          </a>
        ) : (
          <p className="text-2xl md:text-4xl px-3 text-center text-red-600">
            <strong>
              Ooops parece que no has recibido bien tu invitación, vuelvela a
              pedir a Aida
            </strong>
          </p>
        )}
      </div>
    </section>
  );
};
