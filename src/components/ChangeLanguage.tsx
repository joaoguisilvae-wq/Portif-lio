import { IoLanguage } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import type { Locale } from "../types";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const ChangeLanguage = () => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  let next: Locale;
  let previous: Locale;

  switch (locale) {
    case "pt":
      next = "es";
      previous = "en";
      break;
    case "es":
      next = "en";
      previous = "pt";
      break;
    case "en":
      next = "pt";
      previous = "es";
      break;
  }

  const bounceVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      },
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fa-circle cursor-pointer border-none bg-primary text-secondary rounded-full p-2 hover:bg-primary/80 hover:scale-105 transition-transform duration-500 w-6 h-6 flex items-center justify-center"
      >
        <IoLanguage />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={bounceVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-row w-26 gap-2 absolute items-center justify-center top-14 right-54 text-primary bg-secondary p-2 rounded"
          >
            <IoIosArrowDropleft
              className="w-4 h-4 flex items-center justify-center cursor-pointer hover:opacity-85 hover:brightness-90 active:scale-95 active:opacity-70 active:brightness-75"
              onClick={() => handleLanguageChange(previous)}
            />
            <p className="w-8 h-8 flex items-center justify-center">{locale}</p>
            <IoIosArrowDropright
              className="w-4 h-4 flex items-center justify-center cursor-pointer hover:opacity-85 hover:brightness-90 active:scale-95 active:opacity-70 active:brightness-75"
              onClick={() => handleLanguageChange(next)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChangeLanguage;
