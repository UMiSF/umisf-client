import React from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminPlayersPage.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
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
  const [showPlayersModal, setShowPlayersModal] = useState(false);
  const [folderToBeDeleted, setFolderToBeDeleted] = useState("");
  const handleDelete = (index, key) => {
    setplayerCatogory(prevState => {
      const newPlayers = [...prevState[key]];
      newPlayers.splice(index, 1);
      return {...prevState, [key]: newPlayers};
    });
  };
  const handleShow = (index, key) => {
    setShowDeleteModal(true);
    console.log(index, key);
    setFolderToBeDeleted(index);
  };

  const handleShowPlayers = (index, key) => {
    setShowPlayersModal(true);
    console.log(index, key);
  };
  const handleClose = (e) => {
    e.preventDefault();
   
  };
  return (
    <div className={`${styles["players-full-container"]}`}>
      <ProfileHeader user_type={"admin"} />
      <AdminNavbar page="players" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/players">Players</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href="/admin/players/add-new-player">
          <img src={require("../../assests/images/add.png")} alt="" /> Add
          Account
        </a>
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
                    onClick={() => handleShowPlayers(index, key)}
                  >
                    <a href={`players/${player}`} className={`${styles["player-name"]}`}>{player}</a>
                  </button>
                  <button
                    className={`${styles["player-btn"]}`}
                    onClick={() => handleDelete(index, key)}
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
