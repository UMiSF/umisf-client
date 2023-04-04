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
            University of Moratuwa<br/>
            International Shuttlers Fest
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
