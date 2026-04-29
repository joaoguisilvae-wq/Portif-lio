import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "../context/TranslationContext";

const Navbar = () => {
  const { copy } = useTranslation();
  const [isOpened, setIsOpened] = useState(true);

  const bounceVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 1,
        bounce: 0.6,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      {/* Navbar com animação */}
      <motion.div
        variants={bounceVariants}
        initial="hidden"
        animate={isOpened ? "visible" : "exit"}
      >
        <div className="flex text-center items-center justify-around p-4 sticky top-0 w-full backdrop-blur-md z-50 h-16 font-jetbrains">
          <div className="flex text-center items-center gap-2">
            <FaCircle className="text-primary" />
            <p>JG. Silva</p>
          </div>
          <div className="flex text-center items-center justify-between gap-4">
            <Link to="/" className="mx-2 text text-primary link-hover">
              {copy.navHome}
            </Link>
            <Link to="/projects" className="mx-2 text text-primary link-hover">
              {copy.navProjects}
            </Link>
            <Link to="/about" className="mx-2 text text-primary link-hover">
              {copy.navAbout}
            </Link>
            <Link to="/contact" className="mx-2 text text-primary link-hover">
              {copy.navContact}
            </Link>
          </div>
          <ChangeLanguage />
        </div>
      </motion.div>
      <motion.button
        onClick={() => setIsOpened(!isOpened)}
        animate={{ rotate: isOpened ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="w-full flex justify-center p-2"
      >
        {isOpened ? (
          <IoIosArrowDown className="text-primary/40" />
        ) : (
          <IoIosArrowUp className="text-primary/40" />
        )}
      </motion.button>
    </div>
  );
};

export default Navbar;
