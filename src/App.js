import style from "./App.module.css";
import Home from "./components/home/home";
import NavBar from "./components/navBar/navBar";
import Canvas from "./components/canvas/canvas";
import Canvas2 from "./components/canvas/canvas2";
import Canvas3 from "./components/canvas/canvas3";
import Canvas4 from "./components/canvas/canvas4";
import AboutMe from "./components/aboutMe/aboutMe";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import { useSelector } from "react-redux";

function Animation() {
  const theme = useSelector((state) => state.reducerCompleto.theme);
  {
    setTimeout(() => Canvas(theme), 1);
    setTimeout(() => Canvas2(theme), 1);
    setTimeout(() => Canvas3(theme), 1);
    setTimeout(() => Canvas4(theme), 1);
  }
}

function App() {
  const theme = useSelector((state) => state.reducerCompleto.theme);
  return (
    <div className={style.app}>
      <NavBar theme={theme} />
      <div className={style.flexColumn}>
        <Home theme={theme} />
        <AboutMe theme={theme} />
        <Skills theme={theme} />
        <Portfolio theme={theme} />
        <Animation theme={theme} />
      </div>
    </div>
  );
}

export default App;
