import React from "react";
import Linkedin from "../../icons/linkedin";
import style from "./navBar.module.css";
import Github from "../../icons/github";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.image}>
        <img src="img/smile.png" alt="logo" />
      </div>
      <div className={style.buttons}>
        <a href="#top">Home</a>
        <a href="#aboutMe">About me</a>
        <a href="#skills">My skills</a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className={style.Links}>
        <a href="https://github.com/Agus1510" target="_blank">
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/agustin-panizza-b4060a220/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
      <div className={style.player}>
        <ReactPlayer
          url="https://soundcloud.com/themostepicmusic/epic-score-the-end-is-in-sight"
          config={{
            soundcloud: { auto_play: true },
          }}
          width="150px"
          height="150px"
          volume=".4"
          playing={true}
        />
      </div>
    </div>
  );
}

export default NavBar;
