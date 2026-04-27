import type { Dispatch, SetStateAction } from "react";

type Locale = "pt" | "es" | "en";

interface HomeProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Record<string, string>;
}

const Contact = ({ locale, setLocale, copy }: HomeProps) => {
  return <div>Contact</div>;
};

export default Contact;
