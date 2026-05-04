import type { IconType } from "react-icons/lib";

export type Locale = "pt" | "es" | "en";

export type NavbarCopy = Pick<
  Translation,
  "navHome" | "navProjects" | "navAbout" | "navContact"
>;

type ProjectSkills = { "1st": string; "2nd": string; "3rd"?: string };

export interface Translation {
  localeLabel: string;
  navAria: string;
  socialAria: string;
  navHome: string;
  navProjects: string;
  navAbout: string;
  navContact: string;
  topMeta: string;
  kicker: string;
  titleStart: string;
  titleEnd: string;
  descriptionStart: string;
  descriptionEnd: string;
  linkProjects: string;
  linkAbout: string;
  linkContact: string;
  footerTagline: string;
  footerGithub: string;
  footerInsta: string;
  footerEmail: string;
  projectsEyebrow: string;
  projectsCount: string;
  projectsTitle: string;
  projectsIntro: string;
  projectsInfos: ProjectsInfos[];
  projectsArchive: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  aboutParagraphOne: string;
  aboutParagraphTwo: string;
  aboutParagraphThree: string;
  aboutFacts: { label: string; value: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactLead: string;
  contactInfos: ContactsInfos[];
}

export interface ProjectsInfos {
  key: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  skills: ProjectSkills;
  linkGithub: string;
  linkProject: string;
  status: string;
  statusType: string;
  img?: string;
}

export interface ContactsInfos {
  title: string;
  link: string;
  icon: IconType;
  value: string;
  count: string;
}

export interface ProjectCardProps extends Omit<ProjectsInfos, "key"> {
  cardKey: string;
}
