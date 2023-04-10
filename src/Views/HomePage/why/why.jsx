import React, { useEffect } from "react";
import styles from "./why.module.css";

const Why = () => {
  return (
    <div className={`${styles["why-container"]}`}>
      <div className={`${styles["why-title"]}`}>
        ABOUT <p style={{ display: "inline-block", color: "#0984E3" }}>UMiSF</p>
      </div>
      <div className={`${styles["why-desc"]}`}>
        <p>
          UMiSF is the annual badminton tournament organized by the badminton team of the University
          of Moratuwa, in collaboration with the Physical Education Division of the university. It
          is conducted under 4 main categories; <p style={{fontSize:"18px", fontWeight:"bold", display:"inline"}}>All island age group badminton championship</p>, University badminton championship
          , University staff badminton championship and Corporate badminton championship.
          We warmly welcome badminton enthusiasts from across the island to come together in a
          spirit of friendly competition and sportsmanship, to showcase their skills, with the
          intention of facilitating connections among individuals who share a passion for badminton.

        </p>
      </div>
      <div className={`${styles["why-view-more"]}`}>
        <a href="/about" type="button">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Why;
