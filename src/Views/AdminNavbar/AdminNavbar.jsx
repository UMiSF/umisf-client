import React, { useEffect } from "react";
import styles from "./adminNavbar.module.css";

const AdminNavbar = (props) => {
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  useEffect(()=>{
    let id = "#" + props.page;
    document.querySelector(id).style.background = "white"
  },[])

  return (
    <div className={`${styles["navbar-container"]}`}>
      <ul className={`${styles["navbar-ul"]}`}>
        <div className={`${styles["navbar-sections"]}`}>
          <li className={`${styles["navbar-item"]}`}>
            <a href="/admin" className={`${styles["navbar-item-link"]}`} id='home'>
              <img src={require("../../assests/images/home.png")} alt="" /> Home
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/yearly_configurations"
              className={`${styles["navbar-item-link"]}`}
              id='yearly_configurations'
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
              href="/admin/user-accounts"
              className={`${styles["navbar-item-link"]}`}
              id='user_accounts'
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
              href="/admin/user-accounts"
              className={`${styles["navbar-item-link"]}`}
              id='payments'
            >
              <img
                src={require("../../assests/images/payments.png")}
                alt=""
              />{" "}
              Payments
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/tournament"
              className={`${styles["navbar-item-link"]}`}
              id='tournament'
            >
              <img
                src={require("../../assests/images/tournament.png")}
                alt=""
              />{" "}
              Tournament
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/players"
              className={`${styles["navbar-item-link"]}`}
              id='players'
            >
              <img src={require("../../assests/images/players.png")} alt="" />{" "}
              Players
            </a>
          </li>
        </div>
        <div className={`${styles["navbar-sections"]}`}>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/players"
              className={`${styles["navbar-item-link"]}`}
              id='players'
            >
              <img src={require("../../assests/images/university.png")} alt="" />{" "}
              Universities
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/players"
              className={`${styles["navbar-item-link"]}`}
              id='players'
            >
              <img src={require("../../assests/images/company.png")} alt="" />{" "}
              Companies
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a href="/admin/draws" className={`${styles["navbar-item-link"]}`} id='draws'>
              <img src={require("../../assests/images/draws.png")} alt="" />{" "}
              Draws
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/results"
              className={`${styles["navbar-item-link"]}`}
              id='results'
            >
              <img src={require("../../assests/images/results.png")} alt="" />{" "}
              Results
            </a>
          </li>
          <li className={`${styles["navbar-item"]}`}>
            <a
              href="/admin/gallery"
              className={`${styles["navbar-item-link"]}`}
              id='gallery'
            >
              <img src={require("../../assests/images/gallery.png")} alt="" />{" "}
              Gallery
            </a>
          </li>
        </div>
      </ul>

      {/* minimized side nav bar */}
      <i
        id="toggle-btn"
        className={`${styles["toggle-button"]} bx bx-menu`}
        onClick={loadSideBar}
      ></i>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/admin" className={`${styles["navbar-item-link"]}`} id='home'>
              <img src={require("../../assests/images/home.png")} alt="" /> Home
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/yearly_configurations"
              className={`${styles["navbar-item-link"]}`}
              id='yearly_configurations'
            >
              <img
                src={require("../../assests/images/yearly_configurations.png")}
                alt=""
              />{" "}
              Yearly Configurations
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/user_accounts"
              className={`${styles["navbar-item-link"]}`}
              id='user_accounts'
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
              href="/admin/user-accounts"
              className={`${styles["navbar-item-link"]}`}
              id='payments'
            >
              <img
                src={require("../../assests/images/payments.png")}
                alt=""
              />{" "}
              Payments
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/tournament"
              className={`${styles["navbar-item-link"]}`}
              id='tournament'
            >
              <img
                src={require("../../assests/images/tournament.png")}
                alt=""
              />{" "}
              Tournament
            </a>
          </li>

          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/players"
              className={`${styles["navbar-item-link"]}`}
              id='players'
            >
              <img src={require("../../assests/images/players.png")} alt="" />{" "}
              Players
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/admin/draws" className={`${styles["navbar-item-link"]}`} id='draws'>
              <img src={require("../../assests/images/draws.png")} alt="" />{" "}
              Draws
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/results"
              className={`${styles["navbar-item-link"]}`}
              id='results'
            >
              <img src={require("../../assests/images/results.png")} alt="" />{" "}
              Results
            </a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a
              href="/admin/gallery"
              className={`${styles["navbar-item-link"]}`}
              id='gallery'
            >
              <img src={require("../../assests/images/gallery.png")} alt="" />{" "}
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
