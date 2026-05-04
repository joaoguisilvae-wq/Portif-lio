import ContentCard from "./ContentCard";
import { useTranslation } from "@/context/TranslationContext";

const MeContacts = () => {
  const { copy } = useTranslation();
  return (
    <div className="flex justify-around gap-5 w-full mx-auto">
      <ContentCard
        title={copy.contactInfos[0].title}
        value={copy.contactInfos[0].value}
        link={copy.contactInfos[0].link}
        icon={copy.contactInfos[0].icon}
        count={copy.contactInfos[0].count}
      />
      <ContentCard
        title={copy.contactInfos[1].title}
        value={copy.contactInfos[1].value}
        link={copy.contactInfos[1].link}
        icon={copy.contactInfos[1].icon}
        count={copy.contactInfos[1].count}
      />
      <ContentCard
        title={copy.contactInfos[2].title}
        value={copy.contactInfos[2].value}
        link={copy.contactInfos[2].link}
        icon={copy.contactInfos[2].icon}
        count={copy.contactInfos[2].count}
      />
      <ContentCard
        title={copy.contactInfos[3].title}
        value={copy.contactInfos[3].value}
        link={copy.contactInfos[3].link}
        icon={copy.contactInfos[3].icon}
        count={copy.contactInfos[3].count}
      />
    </div>
  );
};

export default MeContacts;
