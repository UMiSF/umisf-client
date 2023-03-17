import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminCompaniesViewYearPage.module.css";

const AdminCompaniesViewYearPage = () => {
  let { year } = useParams();

  const [companies, setCompanies] = useState([
    {
      name: "H2O.ai",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "WealthOS",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "Insighture",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
    {
      name: "WSO2",
      players: ["Poorna Cooray", "Poorna Cooray"],
    },
  ]);

  const [companyToBeUnregistered, setCompanyToBeUnregistered] = useState([]);

  const loadPlayers = (company) => {
    company = company.includes(".")
      ? company.split(".").join("")
      : company.split(" ").join("");
    if (document.querySelector("#" + company).style.display === "none") {
      document.querySelector("#" + company).style.display = "block";
      document.querySelector("#arrow" + company).style.transform =
        "rotate(90deg)";
    } else {
      document.querySelector("#" + company).style.display = "none";
      document.querySelector("#arrow" + company).style.transform =
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

  const unregisterCompany = (e) => {
    e.preventDefault();
    console.log(companyToBeUnregistered);
    setShow(false);
  };

  useEffect(() => {
    companies.map(
      (company) =>
        (document.querySelector(
          company.name.includes(".")
          ? "#" +  company.name.split(".").join("")
          : "#" +  company.name.split(" ").join("")
        ).style.display = "none")
    );
  }, []);

  return (
    <div className={`${styles["gallery-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="companies" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/companies">Companies</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        {year}
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href={"/admin/companies/" + year + "/register"}>
          <img src={require("../../assests/images/edit.png")} alt="" /> Register
        </a>

        <button onClick={handleShow}>
          <img src={require("../../assests/images/delete.png")} alt="" />{" "}
          Unregister
        </button>
      </div>

      <div className={`${styles["users-container"]}`}>
        {companies.map((company, index) => (
          <div className={`${styles["user"]}`}>
            <button
              className={`${styles["user-type-container"]}`}
              onClick={() => loadPlayers(company.name)}
            >
              <img
                src={require("../../assests/images/forward_arrow.png")}
                alt=""
                style={{ width: "15px" }}
                className={`${styles["user-type-arrow"]}`}
                id={
                   company.name.includes(".")
                    ? "arrow" + company.name.split(".").join("")
                    : "arrow" + company.name.split(" ").join("")
                }
              />
              <img
                src={require("../../assests/images/players.png")}
                alt=""
                className={`${styles["user-type-img"]}`}
              />
              {company.name}
            </button>
            <div
              id={
                company.name.includes(".")
                  ? company.name.split(".").join("")
                  : company.name.split(" ").join("")
              }
              className={`${styles["users-name-container"]}`}
            >
              <div className={`${styles["add-players"]}`}>
                <a
                  href={`/admin/companies/${year}/${company.name}/register-player`}
                >
                  <img src={require("../../assests/images/edit.png")} alt="" />{" "}
                  Add new player
                </a>
              </div>
              {company.players.map((player, index) => (
                <a
                  href={`/admin/companies/${year}/${company.name}/view-player/${index}`}
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
            Unregister a Company
          </Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{ fontFamily: "Hind", fontSize: "18px" }}>
                  Select the company that you want to unregister.
                </h5>
                <select
                  style={{ fontFamily: "Hind", fontSize: "18px" }}
                  className="form-select form-select-sm"
                  onChange={(e) => setCompanyToBeUnregistered(e.target.value)}
                >
                  {companies.map((company) => (
                    <option
                      style={{ fontFamily: "Hind", fontSize: "18px" }}
                      value={company.name}
                    >
                      {company.name}
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
              onClick={unregisterCompany}
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

export default AdminCompaniesViewYearPage;
