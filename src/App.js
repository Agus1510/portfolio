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

function Animation() {
  {
    setTimeout(() => Canvas(), 1);
    setTimeout(() => Canvas2(), 1);
    setTimeout(() => Canvas3(), 1);
    setTimeout(() => Canvas4(), 1);
  }
}

function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <div className={style.flexColumn}>
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Animation />
      </div>
    </div>
  );
}

export default App;
