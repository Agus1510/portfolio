import React, { useEffect, useRef, useState } from "react";
import darkTheme from "./homeDark.module.css";
import { ThemeProvider } from "styled-components";
var style = darkTheme;

function Home(props) {
  const asteroidContainerRef = useRef(null);
  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);
  const planet3Ref = useRef(null);
  const planet4Ref = useRef(null);
  const planet5Ref = useRef(null);
  const planet6Ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const asteroidContainer = asteroidContainerRef.current;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      let speedScale = 0.015;
      if (windowWidth < 100) {
        // Si el ancho de la pantalla es menor a 100, ajusta la velocidad
        speedScale = 1.959;
      }
      // Calcula la opacidad en función del scroll (0 cuando alcanza el 100% de scroll)
      const calculatedOpacity = 1 - Math.min(scrollY / maxScroll, 1);

      asteroidContainer.style.transform = `scale(${1 + scrollY * speedScale})`;

      let speedMultiplier = 1.5; // Valor predeterminado
      if (windowWidth < 100) {
        // Si el ancho de la pantalla es menor a 100, ajusta la velocidad
        speedMultiplier = 3.5;
      }

      if (windowWidth <= 1000) {
        const leftPosition123 = -scrollY * speedMultiplier; // Ajusta el valor según la velocidad de desplazamiento
        planet1Ref.current.style.left = `${leftPosition123}px`;
        planet2Ref.current.style.left = `${leftPosition123}px`;
      } else {
        // Calcula la posición horizontal en función del scroll (para los planetas 1, 2 y 3)
        const leftPosition123 = -scrollY * speedMultiplier; // Ajusta el valor según la velocidad de desplazamiento
        planet1Ref.current.style.left = `${leftPosition123}px`;
        planet2Ref.current.style.left = `${leftPosition123}px`;
        planet3Ref.current.style.left = `${leftPosition123}px`;

        // Calcula la posición horizontal en función del scroll (para los planetas 4, 5 y 6)
        const rightPosition456 = scrollY * speedMultiplier; // Ajusta el valor según la velocidad de desplazamiento
        planet4Ref.current.style.left = `${rightPosition456}px`;
        planet5Ref.current.style.left = `${rightPosition456}px`;
        planet6Ref.current.style.left = `${rightPosition456}px`;
      }

      setOpacity(calculatedOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

  return (
    <div id="top" className={style.flexContainer}>
      <div className={style.description}>
        <p className={style.glitch1}>
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
      <div className={style.planetas}>
        <img
          src="./img/planeta1.png"
          alt="planeta1"
          className={`${style.first} ${style.planeta1}`}
          ref={planet1Ref}
        />
        <img
          src="./img/planeta2.png"
          alt="planeta2"
          className={`${style.first} ${style.planeta2}`}
          ref={planet2Ref}
        />
        {windowWidth > 1000 && (
          <>
            <img
              src="./img/planeta3.png"
              alt="planeta3"
              className={`${style.first} ${style.planeta3}`}
              ref={planet3Ref}
            />
            <img
              src="./img/planeta4.png"
              alt="planeta4"
              className={`${style.first} ${style.planeta4}`}
              ref={planet4Ref}
            />
            <img
              src="./img/planeta5.png"
              alt="planeta5"
              className={`${style.first} ${style.planeta5}`}
              ref={planet5Ref}
            />
            <img
              src="./img/planeta6.png"
              alt="planeta6"
              className={`${style.first} ${style.planeta6}`}
              ref={planet6Ref}
            />
          </>
        )}
      </div>
      <div className={style.asteroidContainer} style={{ opacity: opacity }}>
        <img
          src="./img/piedras.png"
          alt="piedras"
          ref={asteroidContainerRef}
          className={style.asteroid}
        />
      </div>
    </div>
  );
}

export default Home;
