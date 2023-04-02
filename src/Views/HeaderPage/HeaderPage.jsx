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
    <div className={`${styles["nav-container"]}`}>
      <div className={`${styles["navBarList"]}`}>
        <img src={require("../../assests/images/umisf_logo.png")} alt={"logo"}></img>
        <ul>
          <a href="/" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </a>
          <a href="/about" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </a>
          <a href="#" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Register</li>
          </a>
          <a href="#" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws</li>
          </a>
          <a href="#" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Gallery</li>
          </a>
          <a href="#" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Developers</li>
          </a>
          <a href="/contact-us" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
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
          <a href="/" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </a>
          <a href="/about" className={`${styles["navBarItem"]}`}>
            <li>About</li>
          </a>
          <a href="/contact-us" className={`${styles["navBarItem"]}`}>
            <li>Register</li>
          </a>
          <a href="/contact-us" className={`${styles["navBarItem"]}`}>
            <li>Draws</li>
          </a>
          <a href="#" className={`${styles["navBarItem"]}`}>
            <li>Gallery</li>
          </a>
          <a href="/contact-us" className={`${styles["navBarItem"]}`}>
            <li>Developers</li>
          </a>
          <a href="#" className={`${styles["navBarItem"]}`}>
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
