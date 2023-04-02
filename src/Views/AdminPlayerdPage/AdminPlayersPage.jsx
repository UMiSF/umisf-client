import React from "react";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminPlayersPage.module.css";
import { useState } from "react";
const AdminPlayersPage = () => {
  const [playerCatogory, setplayerCatogory] = useState({
    "under-19-men": [
      "Harshani Bandara",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
    ],
    "under-19-women": [
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
      "player-1",
    ],
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDrawModal, setShowDrawModal] = useState(false);
  const [folderToBeDeleted, setFolderToBeDeleted] = useState("");

  const handleShow = (index, key) => {
    setShowDeleteModal(true);
    console.log(index, key);
    setFolderToBeDeleted(index);
  };

  const handleShowDraws = (index, key) => {
    setShowDrawModal(true);
    console.log(index, key);
  };
  return (
    <div className={`${styles["players-full-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="players" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/players">Players</a>
      </div>

      <div className={`${styles["players-container"]}`}>
        {Object.entries(playerCatogory).map(([key, value]) => (
          <div>
            <div className={`${styles["folder"]}`}>
              <img src={require("../../assests/images/players.png")} alt="" />{" "}
              Under 19
            </div>

            <div className={`${styles["players-grid-container"]}`}>
              {value.map((player, index) => (
                <div className={`${styles["player-each"]}`}>
                  <button
                    className={`${styles["player-btn"]}`}
                    onClick={() => handleShowDraws(index, key)}
                  >
                    <a href={`players/${player}`} className={`${styles["player-name"]}`}>{player}</a>
                  </button>
                  <button
                    className={`${styles["player-btn"]}`}
                    onClick={() => handleShow(index, key)}
                  >
                    <img
                      src={require("../../assests/images/delete.png")}
                      alt=""
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminPlayersPage;
