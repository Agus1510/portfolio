import React from "react";
import style from "./portfolio.module.css";

function Portfolio() {
  return (
    <body id="portfolio" className={style.flexContainer}>
      <div className={style.flexContainer2}>
        <div className={style.descriptionContainer}>
          <div className={style.title}>
            <p className={style.glitch}>
              <span aria-hidden="true">My portfolio</span>
              My portfolio<span aria-hidden="true">My portfolio</span>
            </p>
          </div>
          <div className={style.description}>
            <div className={style.codeLearn}>
              <a href="https://proyecto-pf.vercel.app/" target="_blank">
                <img src="img/CodeLearn.png" alt="codelearn" />
              </a>
              <p> CodeLearn</p>
              <h1>
                This was the final proyect that we made in group for SoyHenry
                bootcamp, in this proyect I worked in the front end and made the
                design
              </h1>
            </div>
            <div className={style.pokemon}>
              <a href="https://pokemon.panizza.dev/" target="_blank">
                <img
                  src=" https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
                  alt="pokemon"
                  width={300}
                />
              </a>
              <p>Pokemon API</p>
              <h1>
                This was the first proyect that I made alone and it was for
                SoyHenry bootcamp
              </h1>
            </div>
          </div>
        </div>
      </div>
      <canvas id="canvas4" width="800" height="960">
        Your Browser Don't Support Canvas, Please Download Chrome ^_^``
      </canvas>
    </body>
  );
}
export default Portfolio;
