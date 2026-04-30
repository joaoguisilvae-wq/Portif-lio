import { useTranslation } from "@/context/TranslationContext";
import ProjectCard from "./ProjectCard";

const ProjectCardsComponent = () => {
  const { copy } = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-center mx-auto my-20">
      <ProjectCard
        cardKey={copy.projectsInfos[0].key}
        img={copy.projectsInfos[0].img}
        status={copy.projectsInfos[0].status}
        date={copy.projectsInfos[0].date}
        title={copy.projectsInfos[0].title}
        subtitle={copy.projectsInfos[0].subtitle}
        description={copy.projectsInfos[0].description}
        skills={copy.projectsInfos[0].skills}
        linkGithub={copy.projectsInfos[0].linkGithub}
        linkProject={copy.projectsInfos[0].linkProject}
      />
      <ProjectCard
        cardKey={copy.projectsInfos[1].key}
        img={copy.projectsInfos[1].img}
        status={copy.projectsInfos[1].status}
        date={copy.projectsInfos[1].date}
        title={copy.projectsInfos[1].title}
        subtitle={copy.projectsInfos[1].subtitle}
        description={copy.projectsInfos[1].description}
        skills={copy.projectsInfos[1].skills}
        linkGithub={copy.projectsInfos[1].linkGithub}
        linkProject={copy.projectsInfos[1].linkProject}
      />
      <ProjectCard
        cardKey={copy.projectsInfos[2].key}
        img={copy.projectsInfos[2].img}
        status={copy.projectsInfos[2].status}
        date={copy.projectsInfos[2].date}
        title={copy.projectsInfos[2].title}
        subtitle={copy.projectsInfos[2].subtitle}
        description={copy.projectsInfos[2].description}
        skills={copy.projectsInfos[2].skills}
        linkGithub={copy.projectsInfos[2].linkGithub}
        linkProject={copy.projectsInfos[2].linkProject}
      />
      <ProjectCard
        cardKey={copy.projectsInfos[4].key}
        img={copy.projectsInfos[4].img}
        status={copy.projectsInfos[4].status}
        date={copy.projectsInfos[4].date}
        title={copy.projectsInfos[4].title}
        subtitle={copy.projectsInfos[4].subtitle}
        description={copy.projectsInfos[4].description}
        skills={copy.projectsInfos[4].skills}
        linkGithub={copy.projectsInfos[4].linkGithub}
        linkProject={copy.projectsInfos[4].linkProject}
      />
      <ProjectCard
        cardKey={copy.projectsInfos[3].key}
        img={copy.projectsInfos[3].img}
        status={copy.projectsInfos[3].status}
        date={copy.projectsInfos[3].date}
        title={copy.projectsInfos[3].title}
        subtitle={copy.projectsInfos[3].subtitle}
        description={copy.projectsInfos[3].description}
        skills={copy.projectsInfos[3].skills}
        linkGithub={copy.projectsInfos[3].linkGithub}
        linkProject={copy.projectsInfos[3].linkProject}
      />
    </div>
  );
};

export default ProjectCardsComponent;
