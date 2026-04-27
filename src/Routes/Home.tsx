import type { Dispatch, SetStateAction } from "react";

import HeroParticles from "../components/Home/Particles";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomeContent from "../components/Home/HomeContent";
import type { Locale, Translation } from "../types";

interface HomeProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Translation;
}

const Home = ({ locale, setLocale, copy }: HomeProps) => {
  return (
    <div className={"w-full background"}>
      <Navbar locale={locale} setLocale={setLocale} copy={copy} />
      <HomeContent copy={copy} />
      <HeroParticles />
      <Footer copy={copy} />
    </div>
  );
};

export default Home;
