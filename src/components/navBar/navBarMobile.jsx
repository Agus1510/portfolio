import React from "react";
import Menu from "../../icons/menu";
import { useState, useEffect } from "react";
import style from "./navBarMobile.module.css";

function NavBarMobile() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches(style.icon);
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
  return (
    <div className={style.flexContainer}>
      <div data-dropdown className={style.dropdown}>
        <div data-dropdown-button className={style.icon}>
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
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;
