import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminUniversitiesViewYearPage.module.css";

const AdminUniversitiesViewYearPage = () => {
  let { year } = useParams();

  const [universities, setUniversities] = useState([
    {
      name: "University of Colombo",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "University of Sri Jayawardanapura",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "University of Sabaragamuwa",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "University of Jaffna",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
  ]);

  const [universityToBeUnregistered, setUniversityToBeUnregistered] =
    useState([]);

  const loadPlayers = (university) => {
    if (document.querySelector("#" + university).style.display === "none") {
      document.querySelector("#" + university).style.display = "block";
      document.querySelector("#arrow" + university).style.transform =
        "rotate(90deg)";
    } else {
      document.querySelector("#" + university).style.display = "none";
      document.querySelector("#arrow" + university).style.transform =
        "rotate(-360deg)";
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const unregisterUniversity = (e) => {
    e.preventDefault();
    console.log(universityToBeUnregistered)
    setShow(false);
  };

  useEffect(() => {
    universities.map(
      (university) =>
        (document.querySelector(
          "#" + university.name.split(" ").join("")
        ).style.display = "none")
    );
  }, []);

  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="universities" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/universities">Universities</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        {year}
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href={"/admin/universities/"+year+"/register"}>
          <img src={require("../../assests/images/edit.png")} alt="" /> Register
        </a>

        <button onClick={handleShow}>
          <img src={require("../../assests/images/delete.png")} alt="" />{" "}
          Unregister
        </button>
      </div>

      <div className={`${styles["users-container"]}`}>
        {universities.map((university, index) => (
          <div className={`${styles["user"]}`}>
            <button
              className={`${styles["user-type-container"]}`}
              onClick={() => loadPlayers(university.name.split(" ").join(""))}
            >
              <img
                src={require("../../assests/images/forward_arrow.png")}
                alt=""
                style={{ width: "15px" }}
                className={`${styles["user-type-arrow"]}`}
                id={"arrow" + university.name}
              />
              <img
                src={require("../../assests/images/players.png")}
                alt=""
                className={`${styles["user-type-img"]}`}
              />
              {university.name}
            </button>
            <div
              id={university.name.split(" ").join("")}
              className={`${styles["users-name-container"]}`}
            >
              <div className={`${styles["add-players"]}`}>
                <a href={"/admin/universities/year/register"}>
                  <img src={require("../../assests/images/edit.png")} alt="" />{" "}
                  Add new player
                </a>
              </div>
              {university.players.map((player, index) => (
                <a
                  href={"universities/player" + index}
                  className={`${styles["users-name"]}`}
                >
                  {player}
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

      {/* modal for deleting */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Title style={{ fontFamily: "Hind", fontSize: "18px" }}>
            Unregister a University
          </Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{ fontFamily: "Hind", fontSize: "18px" }}>
                  Select the university that you want to unregister.
                </h5>
                <select
                  style={{ fontFamily: "Hind", fontSize: "18px" }}
                  className="form-select form-select-sm"
                  onChange={(e) =>
                    setUniversityToBeUnregistered(e.target.value)
                  }
                >
                  {universities.map((university) => (
                    <option
                      style={{ fontFamily: "Hind", fontSize: "18px" }}
                      value={university.name}
                    >
                      {university.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              onClick={handleClose}
              className="btn btn-secondary"
              style={{ fontFamily: "Hind", fontSize: "18px" }}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-light"
              onClick={unregisterUniversity}
              style={{
                fontFamily: "Hind",
                fontSize: "18px",
                background: "red",
                color: "white",
              }}
            >
              Unregister
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AdminUniversitiesViewYearPage;
