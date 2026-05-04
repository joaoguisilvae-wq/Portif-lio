import { useState } from "react";
import { useTranslation } from "@/context/TranslationContext";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AboutMe from "./AboutMe";

const AboutContent = () => {
  const { copy } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="font-cormorant mb-20">
      <p className="text-primary font-jetbrains mt-10 sm:mt-20 max-w-[1300px] mx-auto mb-3">
        {copy.aboutEyebrow}
      </p>
      <div className="flex text-center align-center items-center justify-around">
        <h1 className="text-5xl sm:text-7xl">{copy.aboutTitle}</h1>
        <motion.div
          layoutId="avatar"
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        >
          <Avatar className="w-16 h-16 hover:scale-107 transition-all ease-in-out duration-500 border border-foreground">
            <AvatarImage
              src="src\assets\img\IMG_20260122_170722.jpg"
              alt="Eu"
            />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 cursor-pointer"
            />

            <motion.div
              layoutId="avatar"
              className="fixed inset-0 z-50 m-auto w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden"
            >
              <img
                src="src\assets\img\IMG_20260122_170722.jpg"
                alt="Eu"
                className="w-full h-full rounded-full object-cover border-2 border-foreground"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="flex justify-around">
        <div className="max-w-2xl mt-6">
          <p className="mb-8 text-2xl">{copy.aboutLead}</p>
          <div className="flex flex-col gap-5 text-lg">
            <p>{copy.aboutParagraphOne}</p>
            <p>{copy.aboutParagraphTwo}</p>
            <p>{copy.aboutParagraphThree}</p>
          </div>
        </div>
        <AboutMe />
      </div>
    </motion.div>
  );
};

export default AboutContent;
