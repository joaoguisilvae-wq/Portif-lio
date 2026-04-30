import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import DateComponent from "../DateComponent";

const HomeContent = () => {
  const { copy } = useTranslation();

  return (
    <>
      <div className="flex text-sm justify-around mt-20">
        <span>{copy.topMeta}</span>
        <DateComponent />
      </div>
      <div className="flex justify-around mt-6 text-sm">
        <div className="items-center justify-center gap-3 mt-6 pl-10">
          <p className="text-primary pl-7">{copy.kicker}</p>
          <div className="text-9xl font-cormorant">
            <h1 className="text-primary text-glow">{copy.titleStart}</h1>
            <h2>{copy.titleEnd}</h2>
          </div>
          <p>{copy.descriptionStart}</p>
          <p>{copy.descriptionEnd}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-10 text-5xl font-cormorant">
          <Link
            to="/projects"
            className="flex items-center gap-4 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">1</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkProjects}
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-4 mr-24 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">2</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkAbout}
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-4 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">3</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkContact}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
