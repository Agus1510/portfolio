import React from "react";
import darkTheme from "./aboutMeDark.module.css";
import lightTheme from "./aboutMeLight.module.css";
import { ThemeProvider } from "styled-components";
var style = darkTheme;
function AboutMe(props) {
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <body id="aboutMe" className={style.flexContainer}>
        <div className={style.flexContainer2}>
          <div className={style.title}>
            <p className={style.glitch}>
              <span aria-hidden="true">About Me</span>
              About Me<span aria-hidden="true">About Me</span>
            </p>
          </div>
          <div className={style.description}>
            <p>
              I'm a Full-Stack web developer located in Argentina. I have a
              passion for programming although I started studying web
              development in <a href="https://www.soyhenry.com/">Soy Henry</a>{" "}
              on 2022 , always liked to program. I started in the programming
              world 10 years ago doing game servers.
            </p>
            <p>
              Well-organized person, problem solver, with high attention to
              detail.
            </p>

            <h1>Let's Make something special</h1>
          </div>
        </div>
        <div className={style.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <canvas id="canvas2" width="800" height="960" className={style.canvas}>
          Your Browser Don't Support Canvas, Please Download Chrome ^_^``
        </canvas>
      </body>
    </ThemeProvider>
  );
}

export default AboutMe;
