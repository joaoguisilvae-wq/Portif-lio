import type { Dispatch, SetStateAction } from "react";

import HeroParticles from "../components/Home/Particles";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomeContent from "../components/Home/HomeContent";

type Locale = "pt" | "es" | "en";

interface HomeProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Record<string, string>;
}

const Home = ({ locale, setLocale, copy: _copy }: HomeProps) => {
  return (
    <div className={"w-full background"}>
      <Navbar locale={locale} setLocale={setLocale} copy={_copy} />
      <HomeContent copy={_copy} />
      <HeroParticles />
      <Footer copy={_copy} />
    </div>
  );
};

export default Home;
