import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type Locale = "pt" | "es" | "en";

interface ChangeLanguageProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
}

const ChangeLanguage = ({
  locale,
  setLocale,
}: ChangeLanguageProps): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fa-circle cursor-pointer border-none  bg-primary text-secondary rounded-full p-2 hover:bg-primary/80 hover:scale-105 transition-transform duration-500 w-6 h-6 flex items-center justify-center"
      >
        <IoLanguage />
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2 absolute top-14 right-64 bg-secondary p-2 rounded language-menu">
          <button
            onClick={() => handleLanguageChange("pt")}
            className={`language-btn ${locale === "pt" ? "active" : ""}`}
          >
            PT
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`language-btn ${locale === "en" ? "active" : ""}`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("es")}
            className={`language-btn ${locale === "es" ? "active" : ""}`}
          >
            ES
          </button>
        </div>
      )}
    </>
  );
};

export default ChangeLanguage;
