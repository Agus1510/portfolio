import React from "react";
import darkTheme from "./skillsDark.module.css";
import lightTheme from "./skillsLight.module.css";
import { ThemeProvider } from "styled-components";

var style = darkTheme;

function Skills(props) {
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <body id="skills" className={style.flexContainer}>
        <div className={style.flexContainer2}>
          <div className={style.descriptionContainer}>
            <div className={style.title}>
              <p className={style.glitch}>
                <span aria-hidden="true">My skills</span>
                My skills<span aria-hidden="true">My skills</span>
              </p>
            </div>
            <div className={style.description}>
              <p>
                My technical skills are oriented to technologies such as:
                Node.js, SQL, Javascript, React.js, Redux, HTML, CSS. Among my
                soft skills you will find: Proactivity, initiative,
                collaboration, curiosity and eager to learn.
              </p>
            </div>
          </div>
          <div className={style.progress}>
            <p> Front end</p>
            <div className={style.progressBar}>
              <div className={style.progressFront}></div>
            </div>
            <p> Back end</p>
            <div className={style.progressBar}>
              <div className={style.progressBack}></div>
            </div>
            <p> React JS</p>
            <div className={style.progressBar}>
              <div className={style.progressReact}></div>
            </div>
          </div>
        </div>
        <div className={style.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <canvas id="canvas3" width="800" height="960" className={style.canvas}>
          Your Browser Don't Support Canvas, Please Download Chrome ^_^``
        </canvas>
      </body>
    </ThemeProvider>
  );
}

export default Skills;
