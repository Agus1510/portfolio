import React from "react";
import darkTheme from "./portfolioDark.module.css";
import lightTheme from "./portfolioLight.module.css";
import { ThemeProvider } from "styled-components";
var style = darkTheme;

function Portfolio(props) {
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
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
                <a
                  href="https://proyecto-pf.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.image}>
                    <img src="img/CodeLearn.png" alt="codelearn" />
                  </div>
                </a>
                <p> CodeLearn</p>
                <div className={style.text}>
                  <h1>
                    This was the final proyect that we made in group for
                    SoyHenry bootcamp,I worked in the Front end and made the
                    design , in this project we learned how to work in groups
                    using the Scrum methodology. The page was made using
                    ReactJS, ExpressJs, NodeJs, JavaScript, HTML , CSS , MongoDb
                    and ReduxJs
                  </h1>
                </div>
              </div>
              <div className={style.pokemon}>
                <a
                  href="https://pokemon-dbchelk3w-agus1510.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.image}>
                    <img
                      src=" https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
                      alt="pokemon"
                      width={300}
                    />
                  </div>
                </a>
                <p>Pokemon API</p>
                <div className={style.text}>
                  <h1>
                    A Single Page Application that uses React, Redux and CSS for
                    frontend and Express, Sequelize, Nodejs and Postgres for
                    backend. It contains a built-in search bar, filters and
                    sorting that allow you to find any pokemon with ease. It
                    also has a simple React form that allows you to create your
                    own pokemons.
                  </h1>
                </div>
              </div>
              <div className={style.taller}>
                <a
                  href="https://hpelectrogenos.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.image}>
                    <img src="img/taller.webp" alt="taller" width={200} />
                  </div>
                </a>
                <p>Hp Grupos Electrogenos</p>
                <div className={style.text}>
                  <h1>
                    This is a website that I have designed and developed for a
                    generators company. It was developed using Html, Javascript,
                    React, Redux Tool-kit, HTML and Pure CSS for Front End and
                    Express with MongoDB in the Back End.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <canvas id="canvas4" width="400" height="1000" className={style.canvas}>
          Your Browser Don't Support Canvas, Please Download Chrome ^_^``
        </canvas>
      </body>
    </ThemeProvider>
  );
}
export default Portfolio;
