import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { FirstSection, SecondSection, ThirdSection } from "../components";

const Home: NextPage = () => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  return (
    <>
      <Head>
        <title>Boda PΓ©rez Flores π°π»ββοΈπ€΅π»ββοΈβ€οΈ</title>
        <meta name="author" content="CPerez" />
        <meta
          name="description"
          content="Ven a nuestra boda este 12 de noviembre ππ"
        />
        <meta property="og:title" content="Boda PΓ©rez Flores π°π»ββοΈπ€΅π»ββοΈβ€οΈ" />
        <meta
          property="og:description"
          content="Ven a nuestra boda este 12 de noviembre ππ"
        />
        <meta property="og:image" content={`${origin}/images/aychands2.png`} />
      </Head>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
    </>
  );
};

export default Home;
