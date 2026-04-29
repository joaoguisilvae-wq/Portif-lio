import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import type { Locale } from "../types";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ChangeLanguage = (): React.ReactNode => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
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
        <div className="flex flex-row w-64 gap-2 absolute items-center justify-center top-14 right-64 bg-secondary p-2 rounded">
          <button className="w-8 h-8 flex items-center justify-center">
            <IoIosArrowDropleft />
          </button>
          <p className="w-8 h-8 flex items-center justify-center">{locale}</p>
          <button className="w-8 h-8 flex items-center justify-center">
            <IoIosArrowDropright />
          </button>
        </div>
      )}
    </>
  );
};

export default ChangeLanguage;
