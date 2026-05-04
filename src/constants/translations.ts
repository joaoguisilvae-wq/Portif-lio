import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import type { Locale, Translation } from "../types";

export const translations: Record<Locale, Translation> = {
  pt: {
    localeLabel: "Português",
    navAria: "Seções principais",
    socialAria: "Redes e contato",
    navHome: "Início",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    topMeta: "// 23.5505° S · 46.6333° W", // ✅ fix: coordenadas de São Paulo
    kicker: "Desenvolvedor · Gamer · Calistênico",
    titleStart: "Materializando",
    titleEnd: "pensamentos.",
    descriptionStart:
      "Projetando e desenvolvendo softwares com paciência, foco ",
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
      "Uma pequena coleção de projetos que criei, quebrei e reconstruí. Cada uma é uma aplicação de casos reais.",
    // ✅ fix: campo faltava no PT
    projectsArchive:
      "Trabalhos antigos arquivados. Entre em contato para o catálogo completo.",
    projectsInfos: [
      {
        key: "fitai",
        date: "2026",
        statusType: "developing",
        img: "src/assets/img/FitAi.png",
        title: "FIT.AI",
        subtitle: "Faça seu plano de treino com IA",
        description:
          "Um SaaS de academia onde você pode gerenciar e criar planos de treino com IA.",
        skills: { "1st": "Next.js", "2nd": "React", "3rd": "TypeScript" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Bootcamp-Treinos-API",
        linkProject: "",
        status: "Desenvolvendo",
      },
      {
        key: "calculadora",
        date: "2026",
        statusType: "refactoring",
        img: "src/assets/img/CalcImg.png",
        title: "Calculadora multifunções",
        subtitle: "Contas das simples as avançadas",
        description:
          "Uma calculadora cientifica com função de histórico, tabelas de conversão, calculo de IMC e muito mais. Tudo feito com React e bibliotecas.",
        skills: {
          "1st": "React",
          "2nd": "JavaScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "",
        linkProject:
          "https://calculadora-react-px32ftrfu-joaoguisilvae-wqs-projects.vercel.app/tutorial?step=1&redirect=/",
        status: "Refatorando",
      },
      {
        key: "hotel",
        date: "2026",
        statusType: "developing",
        img: "",
        title: "BRH - Hospedagem",
        subtitle: "Hospedagem fácil e rápida",
        description:
          "Projeto de e-commerce de uma página de hotéis tendo hotéis, preços e serviços reais, mas sem compra real.",
        skills: {
          "1st": "React",
          "2nd": "TypeScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "https://github.com/joaoguisilvae-wq/BRH",
        linkProject: "", // ✅ fix: link errado removido
        status: "Desenvolvendo",
      },
      {
        key: "staygreen",
        date: "2026",
        statusType: "developing",
        title: "StayGreen",
        subtitle: "Conscientização Monetária",
        description:
          "Um projeto sobre economia que visa ajudar pessoas a sair das dívidas por meio de gráficos, tabelas e etc.",
        skills: { "1st": "JavaScript", "2nd": "Python", "3rd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/StayGreen",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "Desenvolvendo",
      },
      {
        key: "notes",
        date: "2026",
        statusType: "completed",
        img: "",
        title: "Dev-Notes",
        subtitle: "Faça suas anotações",
        description:
          "Um projeto feito enquanto aprendia JS, crie novas tarefas, apague-as ou fixe-as. E não perca suas anotações com o salvamento local.",
        skills: { "1st": "JavaScript", "2nd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Dev-notes",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "Desenvolvido",
      },
    ],
    aboutEyebrow: "— Sobre",
    aboutTitle: "Um desenvolvedor focado.",
    aboutLead:
      "Trabalho entre código e composição: construindo ferramentas, interfaces e pequenos mundos. Valorizo sistemas que envelhecem bem, interfaces interativas e a disciplina de remover mais do que adicionar.",
    aboutParagraphOne:
      "Estou estudando a quase 2 anos, e venho fazendo projetos pequenos a médios, sempre focando em projetos responsivos, interativos e com um design mais limpo possível.",
    aboutParagraphTwo:
      "Meus problemas favoritos são os que exigem pensamento crítico, criatividade e novos aprendizados.",
    aboutParagraphThree:
      "Longe do teclado, geralmente estou jogando, caminhando ou lendo.",
    aboutFacts: [
      { label: "Natural de", value: "São Paulo" },
      { label: "Atuando desde", value: "2025" },
      { label: "Stack principal", value: "TypeScript · JavaScript · React" },
      { label: "Atualmente", value: "Projetos pessoais e com amigos" },
      {
        label: "Foco",
        value: "Interfaces interativas e experiências de usuário",
      },
      { label: "Aberto a", value: "Pedidos e oportunidades" },
    ],
    contactEyebrow: "— Contato",
    contactTitle: "Contate-me ou diga-algo.",
    contactLead:
      "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante ou quer conversar sobre tecnologia, sinta-se à vontade para me contatar.",
    contactInfos: [
      {
        title: "Email",
        value: "joaoguisilvae@gmail.com",
        link: "mailto:joaogui.silvae@gmail.com",
        icon: BiLogoGmail,
        count: "01",
      },
      {
        title: "LinkedIn",
        value: "joão Guilherme",
        link: "https://www.linkedin.com/in/jo%C3%A3o-guilherme-b46971397/",
        icon: BiLogoLinkedin,
        count: "02",
      },
      {
        title: "GitHub",
        value: "joaoguisilvae-wq",
        link: "https://github.com/joaoguisilvae-wq",
        icon: BiLogoGithub,
        count: "03",
      },
      {
        title: "Instagram",
        value: "joao G.S.E",
        link: "https://www.instagram.com/joaogui.silvaeugenio?igsh=cXN4YndpMGQ1bm56",
        icon: BiLogoInstagram,
        count: "04",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  es: {
    localeLabel: "Español",
    navAria: "Secciones principales",
    socialAria: "Redes y contacto",
    navHome: "Inicio",
    navProjects: "Proyectos",
    navAbout: "Sobre",
    navContact: "Contacto",
    topMeta: "// 23.5505° S · 46.6333° W", // ✅ fix: coordenadas de São Paulo
    kicker: "Desarrollador · Gamer · Calisténico",
    titleStart: "Construyendo",
    titleEnd: "en la oscuridad.",
    descriptionStart:
      "Diseño e ingeniero software con la paciencia de un artesano ",
    descriptionEnd: "y la curiosidad de un explorador.",
    linkProjects: "Proyectos",
    linkAbout: "Sobre mí",
    linkContact: "Contacto",
    footerTagline: `Creado por João G. Silva Eugenio. © ${new Date().getFullYear()}.`,
    footerGithub: "github",
    footerInsta: "Instagram",
    footerEmail: "email",
    projectsEyebrow: "— Trabajos seleccionados",
    projectsCount: "05 / trabajos",
    projectsTitle: "Proyectos",
    projectsIntro:
      "Una pequeña colección de proyectos que construí, rompí y reconstruí. Cada uno es una aplicación de casos reales.",
    projectsArchive:
      "Trabajos antiguos archivados. Comunícate conmigo para el catálogo completo.",
    projectsInfos: [
      {
        key: "fitai",
        date: "2026",
        statusType: "developing",
        img: "src/assets/img/FitAi.png",
        title: "FIT.AI",
        subtitle: "Crea tu plan de entrenamiento con IA",
        description:
          "Un SaaS de gimnasio donde puedes gestionar y crear planes de entrenamiento con IA.",
        skills: { "1st": "Next.js", "2nd": "React", "3rd": "TypeScript" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Bootcamp-Treinos-API",
        linkProject: "",
        status: "Desarrollando",
      },
      {
        key: "calculadora",
        date: "2026",
        statusType: "refactoring",
        img: "src/assets/img/CalcImg.png",
        title: "Calculadora multifunción",
        subtitle: "Desde cálculos simples hasta avanzados",
        description:
          "Una calculadora científica con historial, tablas de conversión, cálculo de IMC y mucho más. Todo hecho con React y bibliotecas.",
        skills: {
          "1st": "React",
          "2nd": "JavaScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "",
        linkProject:
          "https://calculadora-react-px32ftrfu-joaoguisilvae-wqs-projects.vercel.app/tutorial?step=1&redirect=/",
        status: "Refactorizando",
      },
      {
        key: "hotel",
        date: "2026",
        statusType: "developing",
        img: "",
        title: "BRH - Hospedaje",
        subtitle: "Hospedaje fácil y rápido",
        description:
          "Proyecto de e-commerce de una página de hoteles con hoteles, precios y servicios reales, pero sin compra real.",
        skills: {
          "1st": "React",
          "2nd": "TypeScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "https://github.com/joaoguisilvae-wq/BRH",
        linkProject: "", // ✅ fix: link errado removido
        status: "Desarrollando",
      },
      {
        key: "staygreen",
        date: "2026",
        statusType: "developing",
        img: "",
        title: "StayGreen",
        subtitle: "Conciencia Monetaria",
        description:
          "Un proyecto sobre economía que busca ayudar a las personas a salir de las deudas mediante gráficos, tablas y más.",
        skills: { "1st": "JavaScript", "2nd": "Python", "3rd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/StayGreen",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "Desarrollando",
      },
      {
        key: "notes",
        date: "2026",
        statusType: "completed",
        img: "",
        title: "Dev-Notes",
        subtitle: "Haz tus anotaciones",
        description:
          "Un proyecto hecho mientras aprendía JS, crea nuevas tareas, elimínalas o fíjalas. Y no pierdas tus notas gracias al guardado local.",
        skills: { "1st": "JavaScript", "2nd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Dev-notes",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "Desarrollado", // ✅ fix: era "Desarrollando"
      },
    ],
    aboutEyebrow: "— Sobre",
    aboutTitle: "Un desarrollador enfocado.", // ✅ fix: era "Un ingeniero silencioso."
    // ✅ fix: retraduzido do PT
    aboutLead:
      "Trabajo entre código y composición: construyendo herramientas, interfaces y pequeños mundos. Valoro los sistemas que envejecen bien, las interfaces interactivas y la disciplina de eliminar más de lo que se agrega.",
    // ✅ fix: retraduzido do PT
    aboutParagraphOne:
      "Llevo casi 2 años estudiando y he ido desarrollando proyectos de pequeño a mediano tamaño, siempre enfocándome en proyectos responsivos, interactivos y con el diseño más limpio posible.",
    // ✅ fix: retraduzido do PT
    aboutParagraphTwo:
      "Mis problemas favoritos son los que exigen pensamiento crítico, creatividad y nuevos aprendizajes.",
    // ✅ fix: retraduzido do PT
    aboutParagraphThree:
      "Lejos del teclado, generalmente estoy jugando, caminando o leyendo.",
    aboutFacts: [
      { label: "Natural de", value: "São Paulo" }, // ✅ fix: era "Pacific Northwest"
      { label: "Activo desde", value: "2025" }, // ✅ fix: era "2014"
      { label: "Stack principal", value: "TypeScript · JavaScript · React" }, // ✅ fix: era "Rust · Go"
      { label: "Actualmente", value: "Proyectos personales y con amigos" }, // ✅ fix: era startup de audio
      {
        label: "Foco",
        value: "Interfaces interactivas y experiencias de usuario",
      }, // ✅ fix
      { label: "Abierto a", value: "Pedidos y oportunidades" }, // ✅ fix: era "Colaboraciones y residencias"
    ],
    contactEyebrow: "— Contacto",
    contactTitle: "Contáctame o dime algo.",
    contactLead:
      "Siempre estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto interesante o quieres hablar sobre tecnología, no dudes en contactarme.",
    contactInfos: [
      {
        title: "Email",
        value: "joaoguisilvae@gmail.com",
        link: "mailto:joaogui.silvae@gmail.com",
        icon: BiLogoGmail,
        count: "01",
      },
      {
        title: "LinkedIn",
        value: "joão Guilherme",
        link: "https://www.linkedin.com/in/jo%C3%A3o-guilherme-b46971397/",
        icon: BiLogoLinkedin,
        count: "02",
      },
      {
        title: "GitHub",
        value: "joaoguisilvae-wq",
        link: "https://github.com/joaoguisilvae-wq",
        icon: BiLogoGithub,
        count: "03",
      },
      {
        title: "Instagram",
        value: "joao G.S.E",
        link: "https://www.instagram.com/joaogui.silvaeugenio?igsh=cXN4YndpMGQ1bm56",
        icon: BiLogoInstagram,
        count: "04",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  en: {
    localeLabel: "English",
    navAria: "Main sections",
    socialAria: "Social and contact",
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    topMeta: "// 23.5505° S · 46.6333° W", // ✅ fix: coordenadas de São Paulo
    kicker: "Developer · Gamer · Calisthenics",
    titleStart: "Building",
    titleEnd: "in the dark.",
    descriptionStart:
      "I design and engineer software with the patience of a craftsman ",
    descriptionEnd: "and the curiosity of an explorer.",
    linkProjects: "Projects",
    linkAbout: "About",
    linkContact: "Contact",
    footerTagline: `Created by João G. Silva Eugenio. © ${new Date().getFullYear()}.`,
    footerGithub: "github",
    footerInsta: "Instagram",
    footerEmail: "email",
    projectsEyebrow: "— Selected works",
    projectsCount: "05 / works",
    projectsTitle: "Projects",
    projectsIntro:
      "A small collection of projects I built, broke and rebuilt. Each one is a real-world application.",
    projectsArchive: "Archived works. Reach out for the complete catalog.",
    projectsInfos: [
      {
        key: "fitai",
        date: "2026",
        statusType: "developing",
        img: "src/assets/img/FitAi.png",
        title: "FIT.AI",
        subtitle: "Build your workout plan with AI",
        description:
          "A gym SaaS where you can manage and create workout plans with AI.",
        skills: { "1st": "Next.js", "2nd": "React", "3rd": "TypeScript" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Bootcamp-Treinos-API",
        linkProject: "",
        status: "In development",
      },
      {
        key: "calculadora",
        date: "2026",
        statusType: "refactoring",
        img: "src/assets/img/CalcImg.png",
        title: "Multi-function Calculator",
        subtitle: "From simple to advanced calculations",
        description:
          "A scientific calculator with history, conversion tables, BMI calculator and much more. All built with React and libraries.",
        skills: {
          "1st": "React",
          "2nd": "JavaScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "",
        linkProject:
          "https://calculadora-react-px32ftrfu-joaoguisilvae-wqs-projects.vercel.app/tutorial?step=1&redirect=/",
        status: "Refactoring",
      },
      {
        key: "hotel",
        date: "2026",
        statusType: "developing",
        img: "",
        title: "BRH - Lodging",
        subtitle: "Easy and fast lodging",
        description:
          "An e-commerce hotel page project with real hotels, prices and services, but no real purchases.",
        skills: {
          "1st": "React",
          "2nd": "TypeScript",
          "3rd": "Tailwind/shadcn",
        },
        linkGithub: "https://github.com/joaoguisilvae-wq/BRH",
        linkProject: "", // ✅ fix: link errado removido
        status: "In development",
      },
      {
        key: "staygreen",
        date: "2026",
        statusType: "developing",
        img: "",
        title: "StayGreen",
        subtitle: "Financial Awareness",
        description:
          "A project about personal finance that aims to help people get out of debt through charts, tables and more.",
        skills: { "1st": "JavaScript", "2nd": "Python", "3rd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/StayGreen",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "In development",
      },
      {
        key: "notes",
        date: "2026",
        statusType: "completed",
        img: "",
        title: "Dev-Notes",
        subtitle: "Take your notes",
        description:
          "A project built while learning JS — create new tasks, delete or pin them. Never lose your notes thanks to local storage.",
        skills: { "1st": "JavaScript", "2nd": "HTML/CSS" },
        linkGithub: "https://github.com/joaoguisilvae-wq/Dev-notes",
        linkProject: "https://stay-green-seven.vercel.app/",
        status: "Developed", // ✅ fix: era "developed" (minúsculo inconsistente)
      },
    ],
    aboutEyebrow: "— About",
    aboutTitle: "A focused developer.", // ✅ fix: era "A silent engineer."
    // ✅ fix: retraduzido do PT
    aboutLead:
      "I work between code and composition: building tools, interfaces and small worlds. I value systems that age well, interactive interfaces and the discipline of removing more than adding.",
    // ✅ fix: retraduzido do PT
    aboutParagraphOne:
      "I've been studying for almost 2 years, building small to medium projects, always focused on responsive, interactive work with the cleanest design possible.",
    // ✅ fix: retraduzido do PT
    aboutParagraphTwo:
      "My favorite problems are the ones that demand critical thinking, creativity and new learning.",
    // ✅ fix: retraduzido do PT
    aboutParagraphThree:
      "Away from the keyboard, I'm usually gaming, walking or reading.",
    aboutFacts: [
      { label: "From", value: "São Paulo" }, // ✅ fix: era "Pacific Northwest"
      { label: "Active since", value: "2025" }, // ✅ fix: era "2014"
      { label: "Main stack", value: "TypeScript · JavaScript · React" }, // ✅ fix: era "Rust · Go"
      { label: "Currently", value: "Personal projects and with friends" }, // ✅ fix: era startup de audio
      { label: "Focus", value: "Interactive interfaces and user experiences" }, // ✅ fix
      { label: "Open to", value: "Requests and opportunities" }, // ✅ fix: era "Collaborations and residencies"
    ],
    contactEyebrow: "— Contact",
    contactTitle: "Get in touch or say something.",
    contactLead:
      "I'm always open to new opportunities and collaborations. If you have an interesting project or want to talk about technology, feel free to reach out.",
    contactInfos: [
      {
        title: "Email",
        value: "joaoguisilvae@gmail.com",
        link: "mailto:joaogui.silvae@gmail.com",
        icon: BiLogoGmail,
        count: "01",
      },
      {
        title: "LinkedIn",
        value: "joão Guilherme",
        link: "https://www.linkedin.com/in/jo%C3%A3o-guilherme-b46971397/",
        icon: BiLogoLinkedin,
        count: "02",
      },
      {
        title: "GitHub",
        value: "joaoguisilvae-wq",
        link: "https://github.com/joaoguisilvae-wq",
        icon: BiLogoGithub,
        count: "03",
      },
      {
        title: "Instagram",
        value: "joao G.S.E",
        link: "https://www.instagram.com/joaogui.silvaeugenio?igsh=cXN4YndpMGQ1bm56",
        icon: BiLogoInstagram,
        count: "04",
      },
    ],
  },
};
