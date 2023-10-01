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
import { useDispatch, useSelector } from "react-redux";
import NavBarMobile from "./components/navBar/navBarMobile";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../src/components/login/login";
import Register from "./components/register/register";
import { useEffect } from "react";
import { getAllRooms } from "./redux/actions";
import Complete from "./components/home/complete";

// function Animation() {
//   const theme = useSelector((state) => state.reducerCompleto.theme);
//   {
//     setTimeout(() => Canvas(theme), 1);
//     setTimeout(() => Canvas2(theme), 1);
//     setTimeout(() => Canvas3(theme), 1);
//     setTimeout(() => Canvas4(theme), 1);
//   }
// }

function App() {
  const theme = useSelector((state) => state.reducerCompleto.theme);
  const projects = useSelector((state) => state.reducerCompleto.allRooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRooms());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const blob = document.getElementById("blob");

  // document.body.onpointermove = (event) => {
  //   const { clientX, clientY } = event;
  //   blob.animate(
  //     {
  //       left: `${clientX}px`,
  //       top: `${clientY}px`,
  //     },
  //     { duration: 3000, fill: "forwards" }
  //   );
  // };
  return (
    <div className={style.app}>
      {/* <div id="blob" className={style.blob} /> */}
      <NavBar theme={theme} />
      <NavBarMobile theme={theme} />
      <Routes>
        <Route path="/" element={<Complete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
