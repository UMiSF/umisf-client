import React, { useEffect } from "react";
import styles from "./header.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";

const HomePage = () => {
  return (
    <div>
      <div className={`${styles["headerDiv"]}`}>
        <HeaderPage />
        <div className={`${styles["UMiSF-container"]}`}>
          <h1>UMiSF</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A 
            facere eligendi esse explicabo laborum repudiandae corporis 
            praesentium et ducimus quod ut veniam deleniti periam
          </p>

          <a href="/about" type="button">View More</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
