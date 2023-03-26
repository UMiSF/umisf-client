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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A <br />
            facere eligendi esse explicabo laborum repudiandae corporis <br />
            praesentium et ducimus quod ut veniam deleniti periam
          </p>

          <button type="button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
