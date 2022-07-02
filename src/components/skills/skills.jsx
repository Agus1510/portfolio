import React from "react";
import style from "./skills.module.css";

function Skills() {
  return (
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
              My technical skills are oriented to technologies such as: Node.js,
              SQL, Javascript, React.js, Redux, HTML, CSS. Among my soft skills
              you will find: Proactivity, initiative, collaboration, curiosity
              and eager to learn.
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
      <canvas id="canvas3" width="800" height="960">
        Your Browser Don't Support Canvas, Please Download Chrome ^_^``
      </canvas>
    </body>
  );
}

export default Skills;
