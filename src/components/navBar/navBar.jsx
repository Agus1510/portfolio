import React from "react";
import Linkedin from "../../icons/linkedin";
import darkTheme from "./navBarDark.module.css";
import lightTheme from "./navBarLight.module.css";
import Github from "../../icons/github";
import ReactPlayer from "react-player";
import { ThemeProvider } from "styled-components";
import Theme from "../../icons/theme";
import { themeSwitcher } from "../../Redux/reducer";
import { useDispatch } from "react-redux";
var style = darkTheme;

function NavBar(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (props.theme === "dark") {
      dispatch(themeSwitcher("light"));
    } else {
      dispatch(themeSwitcher("dark"));
    }
  };

  const handleCv = () => {
    window.open("files/CV_Agustin Panizza_FullStack Developer english.pdf");
  };
  const handleCvES = () => {
    window.open("files/CV_Agustin Panizza_FullStack Developer.pdf");
  };
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <div className={style.navBar}>
        <div className={style.image}>
          <img src="img/smile.png" alt="logo" />
        </div>
        <div className={style.buttons}>
          <a href="#top">Home</a>
          <a href="#aboutMe">About me</a>
          <a href="#skills">My skills</a>
          <a href="#portfolio">Portfolio</a>
          <a onClick={() => handleCv()}>English CV</a>
          <a onClick={() => handleCvES()}>Spanish CV</a>
        </div>
        <div className={style.Links}>
          <a
            href="https://github.com/Agus1510"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-panizza-b4060a220/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a onClick={() => handleClick()}>
            <Theme />
          </a>
        </div>
        {/* <div className={style.player}>
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
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default NavBar;
