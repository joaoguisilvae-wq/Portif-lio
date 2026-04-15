import { Link } from "react-router-dom";

import ChangeLanguage from "../components/ChangeLanguage";

import style from "./Home.module.css";

const Home = () => {
  // function t(key: string) {
  //   const keys = key.split(".");
  //   let value = translations[currentLanguage];

  //   for (const k of keys) {
  //     value = value[k];
  //   }

  //   return value;
  // }
  return (
    <div className={"container " + style.container}>
      <div className={"flex-container " + style.flexContainer}>
        <div className={style.titleContainer}>
          <h1>Home</h1>
          <img src="#" alt="Imagem hollow night" />
        </div>
        <div className={style.contentContainer}>
          <h3>Seguir adiante na jornada</h3>
          <div className={style.grid}>
            <Link to="/projects" className={style.linkCard}>
              Explore meus projetos
            </Link>
            <Link to="/about" className={style.linkCard}>
              Descubra mais sobre mim
            </Link>
            <Link to="/contact" className={style.linkCard}>
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Feito por: João Guilherme
          <span className={style.currentYear}></span>. &copy; Todos os direitos
          reservados.
        </p>
      </footer>
      <ChangeLanguage />
    </div>
  );
};

export default Home;
