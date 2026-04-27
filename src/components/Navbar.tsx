import { FaCircle } from "react-icons/fa";
import type { Dispatch, SetStateAction } from "react";
import ChangeLanguage from "./ChangeLanguage";
import { Link } from "react-router-dom";
import type { Locale, NavbarCopy } from "../types";

interface NavbarProps {
  locale?: Locale;
  setLocale?: Dispatch<SetStateAction<Locale>>;
  copy: NavbarCopy;
}

const Navbar = ({ locale, setLocale, copy }: NavbarProps): React.ReactNode => {
  return (
    <div>
      <div className="flex text-center items-center justify-around p-4 sticky top-0 w-full backdrop-blur-md z-50 h-16 font-jetbrains ">
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
        {locale && setLocale && (
          <ChangeLanguage locale={locale} setLocale={setLocale} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
