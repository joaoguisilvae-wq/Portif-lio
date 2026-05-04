import type { ContactsInfos } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContentCard = ({ title, count, link, value, icon }: ContactsInfos) => {
  const Icon = icon;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        className="bg-card-foreground/20 border border-secondary rounded-lg p-4 flex flex-col items-start min-w-[200px]  max-w-[250px]"
        onClick={() => setIsOpen(true)}
        layoutId={title}
      >
        <div className="flex justify-around items-center gap-3 mb-2">
          <Icon
            size={30}
            className="bg-foreground/20 rounded-full p-1 border border-primary"
          />
          <span>{count}</span>
        </div>
        <h3>{title}</h3>
        <p>{value}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward className="h-6 w-6 bg-foreground/20 rounded-full p-1 border border-primary" />
        </a>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 cursor-pointer"
            />
            <motion.div
              className="fixed inset-0 z-50 m-auto w-[300px] h-[300px] overflow-auto bg-card-foreground/20 border border-secondary rounded-lg p-4"
              layoutId={title}
            >
              <div className="flex justify-around items-center gap-3 mb-2">
                <Icon
                  size={50}
                  className="bg-foreground/20 rounded-full p-1 border border-primary"
                />
                <span className="text-3xl">{count}</span>
              </div>
              <div className="text-2xl flex flex-col items-start gap-5 mt-5">
                <h3>{title}</h3>
                <p className="text-lg">{value}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <MdOutlineArrowOutward className="h-8 w-8 bg-foreground/20 rounded-full p-1 border border-primary" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentCard;
