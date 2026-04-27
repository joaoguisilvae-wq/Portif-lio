export type Locale = "pt" | "es" | "en";

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
  projectsArchive: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  aboutParagraphOne: string;
  aboutParagraphTwo: string;
  aboutParagraphThree: string;
  aboutFacts: { label: string; value: string }[];
}

export type NavbarCopy = Pick<
  Translation,
  "navHome" | "navProjects" | "navAbout" | "navContact"
>;
