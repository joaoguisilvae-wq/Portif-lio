import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

type Locale = "pt" | "es" | "en";

interface Translation {
  localeLabel: string;
  navAria: string;
  socialAria: string;
  navHome: string;
  navProjects: string;
  navAbout: string;
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

const translations: Record<Locale, Translation> = {
  pt: {
    localeLabel: "Português",
    navAria: "Seções principais",
    socialAria: "Redes e contato",
    navHome: "Início",
    navProjects: "Projetos",
    navAbout: "Sobre",
    topMeta: "// 47.6062° N · 122.3321° W",
    kicker: "Desenvolvedor · Gamer · Calistênico",
    titleStart: "Construindo",
    titleEnd: "no escuro.",
    descriptionStart:
      "Projeto e desenvolvo software com a paciência de um artesão ",
    descriptionEnd: "e a curiosidade de um explorador.",
    linkProjects: "Projetos",
    linkAbout: "Sobre",
    linkContact: "Contato",
    footerTagline: `Criado Por João G. Silva Eugenio. © ${new Date().getFullYear()}.`,
    footerGithub: "github",
    footerInsta: "Instagram",
    footerEmail: "email",
    projectsEyebrow: "— Trabalhos selecionados",
    projectsCount: "05 / trabalhos",
    projectsTitle: "Projetos",
    projectsIntro:
      "Um pequeno arquivo de coisas que construí, quebrei e reconstruí. Cada uma é um estudo de contenção.",
    projectsArchive:
      "Trabalhos antigos arquivados. Entre em contato para o catálogo completo.",
    aboutEyebrow: "— Sobre",
    aboutTitle: "Um engenheiro silencioso.",
    aboutLead:
      "Trabalho entre codigo e composicao: construindo ferramentas, interfaces e pequenos mundos. Valorizo sistemas que envelhecem bem, interfaces que respiram e a disciplina de remover mais do que adicionar.",
    aboutParagraphOne:
      "Uma decada entre laboratorios de pesquisa, estudios indie e pequenas startups, sempre preferindo projetos onde o oficio importa mais que a escala.",
    aboutParagraphTwo:
      "Meus problemas favoritos vivem na fronteira de duas disciplinas: compiladores e tipografia, audio e arquitetura, sistemas e silencio.",
    aboutParagraphThree:
      "Longe do teclado, geralmente estou desenhando, caminhando ou alimentando uma pequena obsessao por sintetizadores analogicos.",
    aboutFacts: [
      { label: "Baseado em", value: "Pacific Northwest" },
      { label: "Atuando desde", value: "2014" },
      { label: "Stack principal", value: "TypeScript · Rust · Go" },
      { label: "Atualmente", value: "Uma startup de audio tools" },
      { label: "Foco", value: "Ferramentas, sistemas, interfaces" },
      { label: "Aberto a", value: "Colaboracoes e residencias" },
    ],
  },
  es: {
    localeLabel: "Español",
    navAria: "Secciones principales",
    socialAria: "Redes y contacto",
    navHome: "Inicio",
    navProjects: "Proyectos",
    navAbout: "Sobre",
    topMeta: "// 47.6062° N · 122.3321° W",
    kicker: "Desarrollador · Sistemas · Máquinas silenciosas",
    titleStart: "Construyendo",
    titleEnd: "en la oscuridad.",
    description:
      "Diseño e ingeniero software con la paciencia de un artesano y la curiosidad de un explorador.",
    linkProjects: "Proyectos",
    linkAbout: "Sobre mí",
    linkContact: "Contacto",
    footerTagline: "Hecho en soledad. © 2026.",
    footerGithub: "github",
    footerX: "x",
    footerEmail: "email",
    projectsEyebrow: "— Trabajo seleccionado",
    projectsCount: "05 / trabajos",
    projectsTitle: "Proyectos",
    projectsIntro:
      "Un pequeño archivo de cosas que he construido, roto y reconstruido. Cada una es un estudio de contención.",
    projectsArchive:
      "Trabajos antiguos archivados. Escríbeme para obtener el catálogo completo.",
    aboutEyebrow: "— Sobre",
    aboutTitle: "Un ingeniero silencioso.",
    aboutLead:
      "Trabajo entre codigo y composicion: construyendo herramientas, interfaces y pequenos mundos. Me importan los sistemas que envejecen bien, las interfaces que respiran y la disciplina de quitar mas de lo que agrego.",
    aboutParagraphOne:
      "Una decada entre laboratorios de investigacion, estudios indie y pequenas startups; prefiero proyectos donde el oficio importa mas que la escala.",
    aboutParagraphTwo:
      "Mis problemas favoritos viven en la frontera de dos disciplinas: compiladores y tipografia, audio y arquitectura, sistemas y silencio.",
    aboutParagraphThree:
      "Lejos del teclado suelo estar dibujando, caminando o cuidando una pequena obsesion por los sintetizadores analogicos.",
    aboutFacts: [
      { label: "Basado en", value: "Pacific Northwest" },
      { label: "Trabajando desde", value: "2014" },
      { label: "Stack principal", value: "TypeScript · Rust · Go" },
      { label: "Actualmente", value: "Una startup de herramientas de audio" },
      { label: "Foco", value: "Herramientas, sistemas, interfaces" },
      { label: "Abierto a", value: "Colaboraciones y residencias" },
    ],
  },
  en: {
    localeLabel: "English",
    navAria: "Main sections",
    socialAria: "Social and contact",
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    topMeta: "// 47.6062° N · 122.3321° W",
    kicker: "Developer · Systems · Quiet machines",
    titleStart: "Building",
    titleEnd: "in the dark.",
    description:
      "I design and engineer software with the patience of a craftsman and the curiosity of an explorer.",
    linkProjects: "Projects",
    linkAbout: "About",
    linkContact: "Contact",
    footerTagline: "Crafted in solitude. © 2026.",
    footerGithub: "github",
    footerX: "x",
    footerEmail: "email",
    projectsEyebrow: "— Selected work",
    projectsCount: "05 / works",
    projectsTitle: "Projects",
    projectsIntro:
      "A small archive of things I have built, broken, and rebuilt. Each one a study in restraint.",
    projectsArchive: "Older work archived. Reach out for the full catalogue.",
    aboutEyebrow: "— About",
    aboutTitle: "A quiet engineer.",
    aboutLead:
      "I work between code and composition, building tools, interfaces, and small worlds. I care about systems that age well, interfaces that breathe, and the discipline of removing more than I add.",
    aboutParagraphOne:
      "A decade between research labs, indie studios, and small startups, preferring projects where craft matters more than scale.",
    aboutParagraphTwo:
      "My favorite problems sit at the seam of two disciplines: compilers and typography, audio and architecture, systems and silence.",
    aboutParagraphThree:
      "Away from the keyboard I am usually drawing, walking, or tending to a small obsession with analog synthesizers.",
    aboutFacts: [
      { label: "Based in", value: "Pacific Northwest" },
      { label: "Working since", value: "2014" },
      { label: "Main stack", value: "TypeScript · Rust · Go" },
      { label: "Currently", value: "An audio-tooling startup" },
      { label: "Focus", value: "Tools, systems, interfaces" },
      { label: "Open to", value: "Collaborations & residencies" },
    ],
  },
};

function App() {
  const [locale, setLocale] = useState<Locale>("pt");
  const copy = translations[locale];

  return (
    <Routes>
      <Route
        path="/"
        element={<Home locale={locale} setLocale={setLocale} copy={copy} />}
      />
      <Route
        path="/projects"
        element={<Projects locale={locale} setLocale={setLocale} copy={copy} />}
      />
      <Route
        path="/about"
        element={<About locale={locale} setLocale={setLocale} copy={copy} />}
      />
      <Route
        path="/contact"
        element={<Contact locale={locale} setLocale={setLocale} copy={copy} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
