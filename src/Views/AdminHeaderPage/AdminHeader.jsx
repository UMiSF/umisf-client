import React from "react";
import styles from "./adminHeader.module.css";

const AdminHeader = () => {
  return (
    <div>
      <div className={`${styles["header-container"]}`}>
        <div className={`${styles["header-logo"]}`}>
          <img
            src={require("../../assests/images/umisf_logo.png")}
            alt={"logo"}
          ></img>
        </div>
        <div className={`${styles["header-admin-profile"]}`}>
          <div className={`${styles["header-admin"]}`}>ADMIN</div>
          <div className={`${styles["header-dropdown"]}`}>
            <img
              className={`${styles["header-drop-down-logo"]}`}
              src={require("../../assests/images/admin.png")}
              alt={"logo"}
            ></img>
            <button className={`${styles["header-drop-down-icon"]}`}>
              <img
                src={require("../../assests/images/drop_down.png")}
                alt={"logo"}
              ></img>
            </button>
            <div className={`${styles["header-drop-down-content"]}`}>
              <a href="#">Settings</a>
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
