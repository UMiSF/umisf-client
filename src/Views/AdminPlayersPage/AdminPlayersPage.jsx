import React from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminPlayersPage.module.css";
import { useState,useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Select, Space, Button, message, Row, Col } from "antd";
import { setEngine } from "crypto";
import { Axios } from "axios";

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
      "playerMMMMMMMMMMM-1",
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
    setplayerCatogory((prevState) => {
      const newPlayers = [...prevState[key]];
      newPlayers.splice(index, 1);
      return { ...prevState, [key]: newPlayers };
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
  // new adding page
  const [filter, setFilter] = useState({
    matchType: "",
    ageGroup: "",
    institute: "",
    gender: "",
  });
  const matchTypes = ["Single", "Double", "University", "Company"];
  const ageGroups = [
    "All",
    "Under 9",
    "Under 11",
    "Under 13",
    "Under 15",
    "Under 17",
    "Under 19",
    "Open",
    "A Division",
    "B Division",
  ];
  const gender = ["All", "Female", "Male"];
  // should get from data base
  const [institute,setInstitute] = ['ananda','nalanda','vishaka','st josephs'];
  const handleMatchType = (value) => {
    setFilter((prev) => {
      return { ...prev, matchType: value };
    });
  };

  const handleAgeGroup = (value) => {
    setFilter((prev) => {
      return { ...prev, ageGroup: value };
    });
  };
  const handleGender = (value) => {
    setFilter((prev) => {
      return { ...prev, gender: value };
    });
  };
  const handleInstitute = (value) => {
    setFilter((prev) => {
      return { ...prev, institute: value };
    });
  };

  useEffect(() => {
    

    Axios.get(
      process.env.REACT_APP_API_URL + "/admin/getInstitute",
      {
        headers: {},
      }
    ).then((res)=>{
      console.log(res)
      setInstitute(res.data.data)
    })
    .catch ((error) =>{
      console.log("Error loading users", error);
      message.error(error.response.data.message);
    })

  }, []);
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
                    <a
                      href={`players/${player}`}
                      className={`${styles["player-name"]}`}
                    >
                      {player}
                    </a>
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

      <div className={`${styles["tool-bar"]}`}>
        <h1>HEHE</h1>
        <Space wrap>
          <Select
            placeholder="Age Group"
            style={{
              width: 200,
            }}
            onChange={handleAgeGroup}
            options={ageGroups.map((age) => ({
              label: age,
              value: age,
            }))}
          />
          <Select
            style={{
              width: 200,
              fontSize: 100,
            }}
            onChange={handleMatchType}
            options={matchTypes.map((match) => ({
              label: match,
              value: match,
            }))}
            placeholder="Match Type"
          />
          <Select
            style={{
              width: 200,
              fontSize: 100,
            }}
            onChange={handleInstitute}
            // options={institute.map((institute) => ({
            //   label: institute,
            //   value: institute,
            // }))}
            placeholder="Institute"
          />
          <Select
            style={{
              width: 200,
              fontSize: 100,
            }}
            onChange={handleGender}
            options={gender.map((gender) => ({
              label: gender,
              value: gender,
            }))}
            placeholder="Match Type"
          />
        </Space>
      </div>
    </div>
  );
};
export default AdminPlayersPage;
