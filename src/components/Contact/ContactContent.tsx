import { useTranslation } from "@/context/TranslationContext";
import { motion } from "framer-motion";
import MeContacts from "./MeContacts";

const ContactContent = () => {
  const { copy } = useTranslation();
  return (
    <motion.div className="mt-20">
      <div className="ml-40 gap-5 flex flex-col">
        <span className="ml-10 text-primary">{copy.contactEyebrow}</span>
        <h1 className="text-7xl">{copy.contactTitle}</h1>
        <p className="text-lg">{copy.contactLead}</p>
      </div>
      <div className="w-full mx-auto mt-20">
        <MeContacts />
      </div>
    </motion.div>
  );
};

export default ContactContent;
