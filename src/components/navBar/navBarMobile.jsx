import React from "react";
import Menu from "../../icons/menu";
import { useState, useEffect } from "react";
import style from "./navBarMobile.module.css";
import { useDispatch } from "react-redux";
import { themeSwitcher } from "../../Redux/reducer";

function NavBarMobile(props) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (props.theme === "dark") {
      dispatch(themeSwitcher("light"));
    } else {
      dispatch(themeSwitcher("dark"));
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.closest("#data-dropdown-button");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (isDropdownButton) {
        setActive(!active);
      }
      if (!isDropdownButton) {
        setActive(false);
      }
      console.log(active);
    });
  }, []);

  const handleCv = () => {
    window.open("files/CV-Agustin-Panizza-FullStack-web-developer-english.pdf");
  };
  const handleCvES = () => {
    window.open("files/CV-Agustin-Panizza-FullStack-web-developer.pdf");
  };
  return (
    <div className={style.flexContainer}>
      <div data-dropdown className={style.dropdown}>
        <div id="data-dropdown-button" className={style.icon}>
          <Menu />
        </div>
        <div className={active ? style.dropdownmenuActive : style.dropdownmenu}>
          {" "}
          <a href="#top" data-dropdown-button>
            Home
          </a>
          <a href="#aboutMe" data-dropdown-button>
            About me
          </a>
          <a href="#skills" data-dropdown-button>
            My skills
          </a>
          <a href="#portfolio" data-dropdown-button>
            Portfolio
          </a>
          <a onClick={() => handleCv()}>English CV</a>
          <a onClick={() => handleCvES()}>Spanish CV</a>
          <a
            href="https://github.com/Agus1510"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-panizza-b4060a220/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p onClick={() => handleClick()}>Change theme</p>
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;
