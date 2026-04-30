import { useTranslation } from "@/context/TranslationContext";
import ProjectCardsComponent from "./ProjectCardsComponent";

const ProjectsContent = () => {
  const { copy } = useTranslation();
  return (
    <div>
      <div className="flex justify-around mt-10 mb-2">
        <p className="text-primary">{copy.projectsEyebrow}</p>
        <p className="text-foreground/40">{copy.projectsCount}</p>
      </div>
      <div className="flex flex-col max-w-[1200px] m-auto gap-4">
        <h1 className="text-9xl font-cormorant">{copy.projectsTitle}</h1>
        <p className="font-inter max-w-[500px]">{copy.projectsIntro}</p>
      </div>
      <ProjectCardsComponent />
    </div>
  );
};

export default ProjectsContent;
