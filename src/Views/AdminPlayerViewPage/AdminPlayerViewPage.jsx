import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../AdminHeaderPage/AdminHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminPlayerViewPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const AdminPlayerViewPage = () => {
  let { name } = useParams();
  const [detailsOfplayer, setDetailsOfPlayer] = useState({
    firstName: "harshani bandara",
    lastName: "Bandara",
    DOB: "2000/01/10",
    UID: "19088H",
    pastPerformance: ["ffff", "fffffffffffff", "ffffffffff"],
    performaceThreshold: "performance threshould",
    gender: "female",
    singelRegistered: "yes",
    doubleRegistered: "yes",
    contactNumber: "0773605046",
    email: "harrshani@gmail.com",
    postalAddress: "ma, udugoda",
    
  });

  const [show, setShow] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [newValue, setNewValue] = useState("");
  const showEditModal = (key, value) => {
    console.log(key, value, "testing");
  };
  const handleEdit = (key, value) => {
    console.log("handle edit", key, value);
    setEditingKey(key);
    setNewValue(detailsOfplayer[key]);
    setShow(true);
  };
  const handleClose = (e) => {
    // e.preventDefault();
    setShow(false);
  };
  const handleShow = (key) => {
    setShow(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsOfPlayer({
      ...detailsOfplayer,
      [editingKey]: newValue,
    });
    handleClose();
  };
  return (
    <div className={`${styles["player-view-container"]}`}>
      <AdminHeader />
      <AdminNavbar page="players" />
      <div className={`${styles["main-title"]}`}>
        <a href="/players/{name}">Player</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        {name}
      </div>

      <div className={`${styles["players-details-container"]}`}>
        <div className={`${styles["photo-container"]}`}>
          <img
            src={require("../../assests/images/Captain_female.JPG")}
            alt=""
          />
        </div>
        {Object.entries(detailsOfplayer).map(([key, value]) => (
          <div className={`${styles["details-row"]}`}>
            <Row>
              <Col>{key}</Col>
              <Col>{value}</Col>
              <Col>
                <Button
                  onClick={() => handleEdit(key, value)}
                  style={{
                    fontFamily: "Hind",
                    fontSize: "18px",
                    background: "#1edfe9f",
                    color: "white",
                    alignSelf: "left",
                    marginLeft: "0",
                  }}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </div>
        ))}
      </div>

      {/* modal for edit details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Title style={{ fontFamily: "Hind", fontSize: "18px" }}>
            Edit {editingKey}
          </Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Body>
            <div className="row">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3" value={newValue}>
                  {editingKey}
                </InputGroup.Text>
                <Form.Control
                  value={newValue}
                  aria-label="Default"
                  onChange={(e) => setNewValue(e.target.value)}
                />
              </InputGroup>
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
              onClick={handleSubmit}
              style={{
                fontFamily: "Hind",
                fontSize: "18px",
                background: "red",
                color: "white",
              }}
            >
              Edit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AdminPlayerViewPage;
