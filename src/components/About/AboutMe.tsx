import { useTranslation } from "@/context/TranslationContext";
const AboutMe = () => {
  const { copy } = useTranslation();
  return (
    <div className="flex flex-col border-l border-primary/13 px-10 gap-5">
      <div className="gap-2">
        <span className="text-foreground/40 text-sm text-sm">
          {copy.aboutFacts[0].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[0].value}</p>
      </div>
      <div className="about-me">
        <span className="text-foreground/40 text-sm">
          {copy.aboutFacts[1].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[1].value}</p>
      </div>
      <div className="about-me">
        <span className="text-foreground/40 text-sm">
          {copy.aboutFacts[2].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[2].value}</p>
      </div>
      <div className="about-me">
        <span className="text-foreground/40 text-sm">
          {copy.aboutFacts[3].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[3].value}</p>
      </div>
      <div className="about-me">
        <span className="text-foreground/40 text-sm">
          {copy.aboutFacts[4].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[4].value}</p>
      </div>
      <div className="about-me">
        <span className="text-foreground/40 text-sm">
          {copy.aboutFacts[5].label}
        </span>
        <p className="about-me-p">{copy.aboutFacts[5].value}</p>
      </div>
    </div>
  );
};

export default AboutMe;
