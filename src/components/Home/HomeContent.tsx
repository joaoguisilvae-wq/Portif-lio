import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import DateComponent from "../DateComponent";

const HomeContent = () => {
  const { copy } = useTranslation();

  return (
    <>
      <div className="flex text-sm justify-between sm:justify-around mt-20">
        <span>{copy.topMeta}</span>
        <DateComponent />
      </div>
      <div className="md:flex justify-around mt-6 text-sm">
        <div className="items-center justify-center gap-3 mt-6 pl-10">
          <p className="text-primary pl-2 text-sm">{copy.kicker}</p>
          <div className="lg:text-9xl md:text-8xl sm:text-7xl font-cormorant text-5xl">
            <h1 className="text-primary text-glow">{copy.titleStart}</h1>
            <h2>{copy.titleEnd}</h2>
          </div>
          <div>
            <p>{copy.descriptionStart}</p>
            <p>{copy.descriptionEnd}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 mt-10 text-5xl md:text-4xl sm:text-3xl font-cormorant">
          <Link
            to="/projects"
            className="flex items-center gap-2 lg:gap-4 transition-all duration-300 hover:text-primary "
          >
            <span className="text-primary text-base">1</span>
            <span className="w-4 h-[1px] bg-foreground/20 md:w-6"></span>
            {copy.linkProjects}
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 lg:gap-4 mr-24 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">2</span>
            <span className="w-4 h-[1px] bg-foreground/20 md:w-6"></span>
            {copy.linkAbout}
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 md:gap-4 transition-all duration-300 hover:text-primary "
          >
            <span className="text-primary text-base">3</span>
            <span className="w-4 h-[1px] bg-foreground/20 md:w-6"></span>
            {copy.linkContact}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
