import { IoLanguage } from "react-icons/io5";
import { useState } from "react";

const ChangeLanguage = () => {
  const [language, setLanguage] = useState("pt");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="change-language">
      <IoLanguage />
    </button>
  );
};

export default ChangeLanguage;
