import React from "react";
import lightTheme from "./homeLight.module.css";
import darkTheme from "./homeDark.module.css";
import { ThemeProvider } from "styled-components";
var style = darkTheme;

function Home(props) {
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <body id="top" className={style.flexContainer}>
        <div className={style.description}>
          <p className={style.glitch}>
            <span aria-hidden="true">Hi, i'm Agustin.</span>
            Hi, i'm Agustin.
            <span aria-hidden="true">Hi, i'm Agustin.</span>
          </p>
          <h3> FullStack web developer</h3>
        </div>
        <div className={style.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <canvas id="canvas" width="800" height="960" className={style.canvas}>
          Your Browser Don't Support Canvas, Please Download Chrome ^_^``
        </canvas>
      </body>
    </ThemeProvider>
  );
}

export default Home;
