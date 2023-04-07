import React from "react";
import styles from './notAvailablePage.module.css'

const NotAvailablePage = () => {
  return (
    <div className={`${styles["not-available-content"]}`}>
      <div className={`${styles["sad-face"]}`}>{":("}</div>

      <div className={`${styles["content"]}`}>
        <h1>NOT AVAILABLE</h1>
        <p> The content of this page is not available at this moment.</p>
        <a href="/" className={`${styles["home-button"]}`}>
          {" "}
          Home Page
        </a>
      </div>
    </div>
  );
};

export default NotAvailablePage;
