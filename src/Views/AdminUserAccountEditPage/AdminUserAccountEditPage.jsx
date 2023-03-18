import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Form, Input } from "reactstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./adminUserAccountEditPage.module.css";

const AdminUserAccountEditPage = () => {
  let { user } = useParams();

  const [userDetails, setUserdetails] = useState({
    name: "Poorna Cooray",
    email: "poorna.cooray@h2o.ai",
    password: "poorna",
    role: "Admin,Umpire",
    contactNumber: "0764197848",
  });

  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();
    setShow(false);
  };

  const editUser = (e) => {
    e.preventDefault();
    console.log(userDetails)
  }

  return (
    <div className={`${styles["account-container"]}`}>
      <ProfileHeader user_type={"admin"} />
      <AdminNavbar page="user_accounts" />
      <div className={`${styles["main-title"]}`}>
        <a href="/admin/user-accounts">User Accounts</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        <a href={"/admin/user-accounts/" + user} style={{ fontSize: "18px" }}>
          {userDetails.name}
        </a>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <button onClick={handleShow}>
          <img src={require("../../assests/images/delete.png")} alt="" /> Delete
          Account
        </button>
      </div>
      <div className={`${styles["profile-container"]}`}>
        <img src={require("../../assests/images/user.jpeg")} alt="" srcSet="" />
        <div className={`${styles["profile-type"]}`}></div>
        <hr />
        <Form onSubmit={editUser}>
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Name</div>
            <div className={`${styles["profile-field-value"]}`}>
              <input
                type="text"
                className={`${styles["form-input"]}`}
                value={userDetails.name}
                placeholder="Enter your name.."
                onChange={(e) =>
                  setUserdetails({ ...userDetails, name: e.target.value })
                }
              />
            </div>
          </div>
          <hr />

          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Email</div>
            <div className={`${styles["profile-field-value"]}`}>
            <input
                type="email"
                className={`${styles["form-input"]}`}
                value={userDetails.email}
                placeholder="Enter your email.."
                onChange={(e) =>
                  setUserdetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>
          </div>
          <hr />
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>User Roles</div>
            <div className={`${styles["profile-field-value"]}`}>
              <input
                type="text"
                className={`${styles["form-input"]}`}
                value={userDetails.role.split(",").join(" , ")}
                placeholder="Enter your roles.."
                onChange={(e) =>
                  setUserdetails({ ...userDetails, roles: e.target.value })
                }
              />
            </div>
          </div>
          <hr />

          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Password</div>
            <div className={`${styles["profile-field-value"]}`}>
            <input
                type="password"
                className={`${styles["form-input"]}`}
                value={userDetails.password}
                placeholder="Enter your password.."
                onChange={(e) =>
                  setUserdetails({ ...userDetails, roles: e.target.value })
                }
              />
            </div>
          </div>
          <hr />
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>
              Contact Number
            </div>
            <div className={`${styles["profile-field-value"]}`}>
            <input
                type="text"
                className={`${styles["form-input"]}`}
                value={userDetails.contactNumber}
                placeholder="Enter your contact number.."
                onChange={(e) =>
                  setUserdetails({ ...userDetails, contactNumber: e.target.value })
                }
              />
            </div>
          </div>
          <hr />
          <button className={`${styles["form-submit-button"]}`}>Update</button>
        </Form>
      </div>
      {/* modal for adding img */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Title style={{ fontFamily: "Hind", fontSize: "18px" }}>
            Delete User Account
          </Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{ fontFamily: "Hind", fontSize: "18px" }}>
                  Are you sure you want to delete this user account?{" "}
                </h5>
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
              onClick={deleteUser}
              style={{
                fontFamily: "Hind",
                fontSize: "18px",
                background: "red",
                color: "white",
              }}
            >
              Delete
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AdminUserAccountEditPage;
