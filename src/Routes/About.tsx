import type { Dispatch, SetStateAction } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Locale, Translation } from "../types";

interface AboutProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Translation;
}

const About = ({ locale, setLocale, copy }: AboutProps): React.ReactNode => {
  return (
    <div>
      <Navbar locale={locale} setLocale={setLocale} copy={copy} />
      <Footer copy={copy} />
    </div>
  );
};

export default About;
