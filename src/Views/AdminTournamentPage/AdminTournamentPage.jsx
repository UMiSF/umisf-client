import React, { useState } from "react";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminTournamentPage.module.css";

const AdminTournamentPage = () => {
  const showMessage = () => {
    setIsClicked(!isClicked);
    if (document.querySelector("#message").style.display === "none") {
      document.querySelector("#message").style.display = "flex";
    } else {
      document.querySelector("#message").style.display = "none";
    }
  };

  const [isInitiatedTournament,setIsInitiatedTournament] = useState(false)

  const rotateLeftStyle = { transform: "rotate(-360deg)" };
  const rotateRighttStyle = { transform: "rotate(90deg)" };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`${styles["tournament-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="tournament" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/tournament">Tournament</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href="/admin/tournament/create-tournament" className={isInitiatedTournament ? "btn disabled border-0" : ""} aria-disabled="true">
          <img src={require("../../assests/images/add.png")} alt="" /> Create
          Tournament
        </a>

        <a href="" style={{ color: "red" }} className={isInitiatedTournament ? "" : "btn disabled border-0"}>
          <img src={require("../../assests/images/close.png")} alt="" /> Close
          Tournament
        </a>
      </div>
      <div className={`${styles["sub-titles"]}`}>
        <a href="#">
          <img
            className={`${styles["sub-title-arrow"]}`}
            src={require("../../assests/images/forward_arrow.png")}
            alt=""
            srcset=""
          />
          Past Tournaments
        </a>
      </div>
      <div className={`${styles["sub-titles"]}`}>
        <a href="#" onClick={showMessage}>
          {isClicked ? (
            <img
              style={rotateLeftStyle}
              className={`${styles["sub-title-arrow-message"]}`}
              src={require("../../assests/images/forward_arrow.png")}
              alt=""
              srcset=""
            />
          ) : (
            <img
              style={rotateRighttStyle}
              className={`${styles["sub-title-arrow-message"]}`}
              src={require("../../assests/images/forward_arrow.png")}
              alt=""
              srcset=""
            />
          )}
          Current Tournament
        </a>
      </div>
      <div id="message" className={`${styles["message"]}`}>
        No tournaments have been initiated yet
      </div>
    </div>
  );
};

export default AdminTournamentPage;
