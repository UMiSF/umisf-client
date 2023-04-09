import React from "react";
import styles from './notAvailablePage.module.css'

const NotAvailablePage = (props) => {
  return (
    <div className={`${styles["not-available-content"]}`}>
      <div className={`${styles["sad-face"]}`}>{":("}</div>

      <div className={`${styles["content"]}`}>
        <h1>NOT AVAILABLE</h1>
        <p> You will be able to view draws <b style={{fontFamily:"Hind", fontSize:"15px", color:"red"}}>{props.publishedDate}</b> onwards.</p>
        <a href="/" className={`${styles["home-button"]}`}>
          {" "}
          Home Page
        </a>
      </div>
    </div>
  );
};

export default NotAvailablePage;
