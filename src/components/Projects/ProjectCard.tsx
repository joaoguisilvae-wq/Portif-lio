import type { ProjectCardProps } from "@/types";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const statusColorMap: Record<string, string> = {
  developing: "bg-blue-500/30",
  refactoring: "bg-purple-500/30",
  completed: "bg-green-500/30",
  planned: "bg-gray-500/30",
};

const ProjectCard = ({
  cardKey,
  img,
  statusType,
  status,
  date,
  title,
  subtitle,
  description,
  skills,
  linkGithub,
  linkProject,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={cardKey}
        onClick={() => setIsOpen(true)}
        className="min-h-[300px] max-w-[325px] bg-secondary mx-auto cursor-pointer hover:scale-103 transition-all transitions-ease rounded-sm"
      >
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="bg-cover bg-center bg-no-repeat relative h-[150px] text-card-foreground/40 rounded-t-sm"
        >
          <span
            className={`absolute left-2 top-2 ${statusColorMap[statusType] || ""} text-white p-1 rounded-lg`}
          >
            {status}
          </span>
          <span className="absolute right-2 top-2">{date}</span>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-cormorant">{title}</h3>
          <h5 className="text-sm text-card-foreground/55 font-jetbrains mb-3">
            {subtitle}
          </h5>
          <p className="font-inter text-sm">{description}</p>
        </div>
        <div className="flex justify-around p-2 pb-3">
          <div className="text-sm gap-3 text-center">
            <span className="mr-2 bg-card-foreground/20 p-1 rounded-lg">
              {skills["1st"]}
            </span>
            <span className="mr-2 bg-card-foreground/20 p-1 rounded-lg">
              {skills["2nd"]}
            </span>
            <span className="bg-card-foreground/20 p-1 rounded-lg">
              {skills["3rd"] ? skills["3rd"] : "GitHub"}
            </span>
          </div>
          <div className="flex gap-2">
            <a href={linkGithub} target="_blank">
              <FaSquareGithub className="h-5 w-5" />
            </a>
            <a href={linkProject} target="_blank">
              <MdOutlineArrowOutward className="h-5 w-5" />
            </a>
          </div>
        </div>
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
              layoutId={cardKey}
              className="fixed inset-0 z-50 m-auto w-[600px] h-fit max-h-[90vh] overflow-auto bg-secondary rounded-lg"
            >
              <div
                style={{ backgroundImage: `url(${img})` }}
                className="bg-cover bg-center bg-no-repeat relative h-[250px] text-card-foreground/40"
              >
                <span
                  className={`absolute left-2 top-2 ${statusColorMap[statusType] || ""} text-white p-1 rounded-lg`}
                >
                  {status}
                </span>
                <span className="absolute right-2 top-2">{date}</span>
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-cormorant">{title}</h3>
                <h5 className="text-base text-card-foreground/55 font-jetbrains mb-3">
                  {subtitle}
                </h5>
                <p className="font-inter text-base">{description}</p>
              </div>
              <div className="flex justify-around p-2 pb-3">
                <div className="text-base gap-3 text-center">
                  <span className="mr-2 bg-card-foreground/20 p-2 rounded-lg">
                    {skills["1st"]}
                  </span>
                  <span className="mr-2 bg-card-foreground/20 p-2 rounded-lg">
                    {skills["2nd"]}
                  </span>
                  <span className="bg-card-foreground/20 p-2 rounded-lg">
                    {skills["3rd"] ? skills["3rd"] : "GitHub"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a href={linkGithub} target="_blank">
                    <FaSquareGithub className="h-6 w-6" />
                  </a>
                  <a href={linkProject} target="_blank">
                    <MdOutlineArrowOutward className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
