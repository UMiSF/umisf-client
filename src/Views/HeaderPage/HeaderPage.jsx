import React, { useEffect } from "react";
import styles from "./headerPage.module.css";

const HeaderPage = () => {
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  return (
    <div>
        <div className={`${styles["navBarList"]}`}>
          <img
            src={require("../../assests/images/umisf_logo.png")}
            alt={"logo"}
          ></img>
          <ul>
            <a href="/" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Home</li>
            </a>
            <a href="/about" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>About</li>
            </a>
            <a href="/contact-us" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Contact Us</li>
            </a>
            <a href="#" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Gallery</li>
            </a>
            <a href="#" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Register</li>
            </a>
          </ul>
        </div>
        {/* minimized side nav bar */}
        <i
          id="toggle-btn"
          className={`${styles["toggle-button"]} bx bx-menu`}
          onClick={loadSideBar}
        ></i>
        <img
          id="side-img"
          className={`${styles["side-img"]}`}
          src={require("../../assests/images/umisf_logo.png")}
          alt={"logo"}
        ></img>
        <div id="navSideBar" className={`${styles["navSideBar"]}`}>
          <ul>
            <li className={`${styles["navBarItem"]}`}>
              <a href="/">Home</a>
            </li>
            <li className={`${styles["navBarItem"]}`}>
              <a href="#">About</a>
            </li>
            <li className={`${styles["navBarItem"]}`}>
              <a href="#">Contact Us</a>
            </li>
            <li className={`${styles["navBarItem"]}`}>
              <a href="#">Gallery</a>
            </li>
            <li className={`${styles["navBarItem"]}`}>
              <a href="#">Register</a>
            </li>
          </ul>
        </div> 
      </div>
  );
};

export default HeaderPage;
