import type { Dispatch, SetStateAction } from "react";
import type { Locale, Translation } from "../types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Translation;
}

const Contact = ({
  locale: locale,
  setLocale: setLocale,
  copy: copy,
}: ContactProps) => {
  return (
    <div>
      <Navbar locale={locale} setLocale={setLocale} copy={copy} />
      <Footer copy={copy} />
    </div>
  );
};

export default Contact;
