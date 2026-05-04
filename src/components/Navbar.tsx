import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { motion, type Variants } from "framer-motion";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "../context/TranslationContext";

const Navbar = () => {
  const { copy } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const bounceVariants: Variants = {
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
    <div className="overflow-hidden w-full">
      <motion.div
        variants={bounceVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "exit"}
      >
        <div className="flex text-center items-center justify-around p-4 sticky top-0 w-full backdrop-blur-md z-50 h-16 font-jetbrains">
          <div className="flex text-center items-center gap-2">
            <FaCircle className="text-primary" />
            <p className="text-sm">JG. Silva</p>
          </div>
          <div className="grid grid-cols-2 sm:flex text-center items-center justify-between sm:gap-4">
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
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 0 : 180, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className="w-full flex justify-center p-2 h-10"
      >
        <IoIosArrowDown className="text-primary/40" />
      </motion.button>
    </div>
  );
};

export default Navbar;
