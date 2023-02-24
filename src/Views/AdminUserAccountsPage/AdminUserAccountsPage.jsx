import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminUserAccountsPage.module.css";

const AdminUserAccountsPage = () => {
  const [users, setUsers] = useState([
    { type: "admins", names: ["Poorna Cooray", "Poorna Cooray"] },
    { type: "organizers", names: ["Poorna Cooray", "Poorna Cooray"] },
    { type: "umpires", names: ["Poorna Cooray", "Poorna Cooray"] },
    { type: "table_organizers", names: ["Poorna Cooray", "Poorna Cooray"] },
  ]);

  const loadUserNames = (userType) => {
    if (document.querySelector("#" + userType).style.display === "none") {
      document.querySelector("#" + userType).style.display = "block";
      document.querySelector("#arrow" + userType).style.transform =
        "rotate(90deg)";
    } else {
      document.querySelector("#" + userType).style.display = "none";
      document.querySelector("#arrow" + userType).style.transform =
        "rotate(-360deg)";
    }
  };

  useEffect(() => {
    users.map(
      (user) => (document.querySelector("#" + user.type).style.display = "none")
    );
  }, []);

  return (
    <div className={`${styles["accounts-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="user_accounts" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/gallery">User Accounts</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <button>
          <img src={require("../../assests/images/add.png")} alt="" /> Add
          Account
        </button>
      </div>
      <div className={`${styles["users-container"]}`}>
        {users.map((userType, index) => (
          <div className={`${styles["user"]}`}>
            <button
              className={`${styles["user-type-container"]}`}
              onClick={() => loadUserNames(userType.type)}
            >
              <img
                src={require("../../assests/images/forward_arrow.png")}
                alt=""
                style={{ width: "15px" }}
                className={`${styles["user-type-arrow"]}`}
                id={"arrow" + userType.type}
              />
              <img
                src={require("../../assests/images/" + userType.type + ".png")}
                alt=""
                className={`${styles["user-type-img"]}`}
              />
              {userType.type.split("_").join(" ")}
            </button>
            <div
              id={userType.type}
              className={`${styles["users-name-container"]}`}
            >
              {userType.names.map((user, index) => (
                <a href="#" className={`${styles["users-name"]}`}>
                  {user}
                  <img
                    src={require("../../assests/images/double_arrows.png")}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserAccountsPage;
