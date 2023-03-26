import React, { useEffect } from "react";
import styles from "./umpireNavbar.module.css";

const UmpireNavbar = (props) => {
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  const navLinks = [
    {
      title: "Home",
      image: "home.png",
      id: "home",
      link: "",
    },
    {
      title: "Courts & Stadiums",
      image: "court.png",
      id: "court",
      link: "court",
    },
    {
      title: "Matches",
      image: "badminton.png",
      id: "matches",
      link: "matches",
    },
    {
      title: "Match Results",
      image: "results.png",
      id: "match_results",
      link: "match_results",
    },
    {
      title: "Draws",
      image: "draws.png",
      id: "draws",
      link: "draws",
    },
  ];

  useEffect(() => {
    let id = "#" + props.page;
    document.querySelector(id).style.background = "white";
  }, []);

  return (
    <div className={`${styles["navbar-container"]}`}>
      <ul className={`${styles["navbar-ul"]}`}>
          {navLinks.map((navLink, index) => (
            <li className={`${styles["navbar-item"]}`} key={index}>
              <a
                href={`/umpire/${navLink.link}`}
                className={`${styles["navbar-item-link"]}`}
                id={navLink.id}
              >
                <img src={require(`../../assests/images/${navLink.image}`)} alt="" />{" "}
                {navLink.title}
              </a>
            </li>
          ))}
      </ul>

      {/* minimized side nav bar */}
      <i
        id="toggle-btn"
        className={`${styles["toggle-button"]} bx bx-menu`}
        onClick={loadSideBar}
      ></i>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          {navLinks.map((navLink, index) => (
            <li className={`${styles["navBarItem"]}`} key={index}>
              <a
                href={`/umpire/${navLink.link}`}
                className={`${styles["navbar-item-link"]}`}
                id={navLink.id}
              >
                <img src={require(`../../assests/images/${navLink.image}`)} alt="" />{" "}
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UmpireNavbar;
