import React from "react";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminPlayersPage.module.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Select, Space, Button, message, Row, Col } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { setEngine } from "crypto";
import Axios, * as others from "axios";
import { Link } from "react-router-dom";

const AdminPlayersPage = () => {
  // new adding page

  const [playerDetails, setPlayerDetails] = useState([]);

  const [filteredDetails, setFilteredDetails] = useState(playerDetails);
  const [email, setEmail] = useState();
  const handleEmailInput = (event) => {
    console.log("email", event.target.value);
    setEmail(event.target.value);
  };
  const [filteredDetailsByEmail, setFilteredDetailsByEmail] =
    useState(playerDetails);
  const [filter, setFilter] = useState({
    matchType: "",
    ageGroup: "",

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
  // const [institute,setInstitute] = ['ananda','nalanda','vishaka','st josephs'];
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading("Loading data...");
    }
  }, [isSubmitting]);

  const searchPlayers = async (e) => {
    e.preventDefault();
    console.log("Filter: ", filter);
    if (Object.values(filter).includes("")) {
      message.error("Not all the filters are set !!");
    } else {
      setIsSubmitting(true);
      console.log("Valid filter");
      let playerFilter = {
        gender: filter.gender,
        ageGroup: filter.ageGroup,
        matchType: filter.matchType,
      };

      //  if (filter.matchType === 'Single' || filter.matchType === 'Double') {
      //     filter.ageGroup !== 'All' && (playerFilter = { ...playerFilter, ageGroup: filter.ageGroup,gender:filter.gender });
      //   }
      //   if (filter.matchType === 'Company') {
      //     filter.ageGroup !== 'All' && (playerFilter = { ...playerFilter, matchType: filter.ageGroup });
      //   }
      console.log("playerfilter", playerFilter);
      try {
        console.log("in try block");
        const result = await Axios.get(
          process.env.REACT_APP_API_URL +
            "/player/getFilteredDataByGenderMatchTypeAge",

          { params: playerFilter },
          {
            headers: {},
          }
        );
        console.log("Result", result);
        setIsSubmitting(false);
        if (result?.data?.data?.length !== 0) {
          setFilteredDetails(result?.data?.players);
          console.log("filter details", filteredDetails);
        } else {
          console.log("Empty");
          setFilteredDetails([]);
        }
      } catch (error) {
        console.log(error);
        message.error(error.response?.data?.message);
      }
    }
  };
  const searchPlayersByEmail = async (e) => {
    e.preventDefault();
    console.log("email: ", email);
    if (email == "") {
      message.error("Email not given");
    } else {
      setIsSubmitting(true);
      console.log("Valid filter");
      let playerFilter = {
        email: email,
      };

      console.log("playerfilter", playerFilter);
      try {
        console.log("in try block");
        const result = await Axios.get(
          process.env.REACT_APP_API_URL + "/player/getPlayerByEmail",

          { params: playerFilter },
          {
            headers: {},
          }
        );
        console.log("Result", result);
        setIsSubmitting(false);
        if (result?.data?.data?.length !== 0) {
          setFilteredDetailsByEmail(result?.data?.players);
          console.log("filter details", filteredDetailsByEmail);
        } else {
          console.log("Empty");
          setFilteredDetailsByEmail([]);
        }
      } catch (error) {
        console.log(error);
        message.error(error.response?.data?.message);
      }
    }
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

      <div className={`${styles["tool-bar"]}`}>
        <h5>Search players</h5>
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
            onChange={handleGender}
            options={gender.map((gender) => ({
              label: gender,
              value: gender,
            }))}
            placeholder="Gender"
          />
          <Button onClick={searchPlayers}> Search</Button>
        </Space>

        <br />
        <hr />

        <Space wrap>
          <input
            type="text"
            className={`${styles["form-input"]}`}
            value={email}
            placeholder="Enter email.."
            onChange={handleEmailInput}
            required
          />

          <Button onClick={searchPlayersByEmail}>
            {" "}
            Search Players By Email
          </Button>
        </Space>
      </div>

      <div className={`${styles["player-container"]}`}>
        {(filteredDetails?.length === 0) &
        (filteredDetailsByEmail?.length === 0) ? (
          <div
            style={{
              fontFamily: "Hind",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            {" "}
            No players have been loaded.
          </div>
        ) : (
          <div className={`${styles["players-grid-container"]}`}>
            {filteredDetails?.length !== 0 &&
              Object.entries(filteredDetails).map(([key, value]) => (
                <div>
                  {/* {value.map((player, index) => ( */}
                  <div className={`${styles["player-each"]}`}>
                    <button className={`${styles["player-btn"]}`}>
                      <Link
                        to={value.firstName + " " + value.lastName}
                        className={`${styles["player-name"]}`}
                        state={{ playerDetails: value }}
                        key={key}
                      >
                        {value.firstName + " " + value.lastName}
                      </Link>
                    </button>
                  </div>
                  {/* ))} */}
                </div>
              ))}

            {filteredDetailsByEmail?.length !== 0 &&
              Object.entries(filteredDetailsByEmail).map(([key, value]) => (
                <div>
                  {/* {value.map((player, index) => ( */}
                  <div className={`${styles["player-each"]}`}>
                    <button className={`${styles["player-btn"]}`}>
                      <Link
                        to={value.firstName + " " + value.lastName}
                        className={`${styles["player-name"]}`}
                        state={{ playerDetails: value }}
                        key={key}
                      >
                        {value.firstName + " " + value.lastName}
                      </Link>
                    </button>
                  </div>
                  {/* ))} */}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminPlayersPage;
