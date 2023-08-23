import React from "react";
import Home from "./home";
import AboutMe from "../aboutMe/aboutMe";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import style from "./complete.module.css";
import { useSelector } from "react-redux";

function Complete() {
  const theme = useSelector((state) => state.reducerCompleto.theme);
  const projects = useSelector((state) => state.reducerCompleto.allRooms);

  return (
    <div className={style.Home}>
      <div id="blob" className={style.blob}></div>
      <audio src="/music.mp3" autoPlay />
      <Home theme={theme} />
      <AboutMe theme={theme} />
      <Skills theme={theme} />
      <Portfolio theme={theme} props={projects} />
    </div>
  );
}

export default Complete;
