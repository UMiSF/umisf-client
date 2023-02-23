import React from "react";
import styles from "./adminNavbar.module.css";

const AdminNavbar = (props) => {
  return (
    <div className={`${styles["navbar-container"]}`}>
      <ul className={`${styles["navbar-ul"]}`}>
        <div className={`${styles["navbar-sections"]}`}>
        <li className={`${styles["navbar-item"]}`}>
          <a href="/admin/home" className={`${styles["navbar-item-link"]}`}>
            <img src={require("../../assests/images/home.png")} alt="" /> Home
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a
            href="/admin/yearly_configurations"
            className={`${styles["navbar-item-link"]}`}
          >
            <img
              src={require("../../assests/images/yearly_configurations.png")}
              alt=""
            />{" "}
            Yearly Configurations
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a
            href="/admin/user_accounts"
            className={`${styles["navbar-item-link"]}`}
          >
            <img
              src={require("../../assests/images/user_accounts.png")}
              alt=""
            />{" "}
            User Accounts
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a
            href="/admin/tournament"
            className={`${styles["navbar-item-link"]}`}
          >
            <img src={require("../../assests/images/tournament.png")} alt="" />{" "}
            Tournament
          </a>
        </li>
        </div>
        <div className={`${styles["navbar-sections"]}`}>
        <li className={`${styles["navbar-item"]}`}>
          <a href="/admin/players" className={`${styles["navbar-item-link"]}`}>
            <img src={require("../../assests/images/players.png")} alt="" />{" "}
            Players
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a href="/admin/draws" className={`${styles["navbar-item-link"]}`}>
            <img src={require("../../assests/images/draws.png")} alt="" /> Draws
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a href="/admin/results" className={`${styles["navbar-item-link"]}`}>
            <img src={require("../../assests/images/results.png")} alt="" />{" "}
            Results
          </a>
        </li>
        <li className={`${styles["navbar-item"]}`}>
          <a href="/admin/gallery" className={`${styles["navbar-item-link"]}`}>
            <img src={require("../../assests/images/gallery.png")} alt="" />{" "}
            Gallery
          </a>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default AdminNavbar;
