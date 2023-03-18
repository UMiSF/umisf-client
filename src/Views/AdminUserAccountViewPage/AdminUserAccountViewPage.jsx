import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from "./adminUserAccountViewPage.module.css";

const AdminUserAccountViewPage = () => {
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
    setShow(false)
  };

  return (
    <div className={`${styles["account-container"]}`}>

      <ProfileHeader user_type={"admin"} />
      <ProfileNavbar page="user_accounts" />

      <div className={`${styles["main-title"]}`}>
        <a href="/admin/user-accounts">User Accounts</a>
        <img
          src={require("../../assests/images/forward_arrow.png")}
          alt=""
        />{" "}
        {userDetails.name}
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href={"/admin/user-accounts/edit/"+ user}>
          <img src={require("../../assests/images/edit.png")} alt="" /> Edit
          Account
        </a>

        <button onClick={handleShow}>
          <img src={require("../../assests/images/delete.png")} alt="" /> Delete
          Account
        </button>
      </div>
      <div className={`${styles["profile-container"]}`}>
        <img src={require("../../assests/images/user.jpeg")} alt="" srcSet="" />
        <div className={`${styles["profile-type"]}`}></div>
        <hr />
        <div className={`${styles["profile-field-container"]}`}>
          <div className={`${styles["profile-field-name"]}`}>Name</div>
          <div className={`${styles["profile-field-value"]}`}>
            {userDetails.name}
          </div>
        </div>
        <hr />

        <div className={`${styles["profile-field-container"]}`}>
          <div className={`${styles["profile-field-name"]}`}>Email</div>
          <div className={`${styles["profile-field-value"]}`}>
            {userDetails.email}
          </div>
        </div>
        <hr />
        <div className={`${styles["profile-field-container"]}`}>
          <div className={`${styles["profile-field-name"]}`}>User Roles</div>
          <div className={`${styles["profile-field-value"]}`}>
            {userDetails.role.split(",").join(" , ")}
          </div>
        </div>
        <hr />

        <div className={`${styles["profile-field-container"]}`}>
          <div className={`${styles["profile-field-name"]}`}>Password</div>
          <div className={`${styles["profile-field-value"]}`}>
            *************
          </div>
        </div>
        <hr />
        <div className={`${styles["profile-field-container"]}`}>
          <div className={`${styles["profile-field-name"]}`}>
            Contact Number
          </div>
          <div className={`${styles["profile-field-value"]}`}>
            {userDetails.contactNumber}
          </div>
        </div>
        <hr />
      </div>
      {/* modal for adding img */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Title style={{fontFamily:'Hind',fontSize:'18px'}}>Delete User Account</Modal.Title>
        </Modal.Header>
        <form style={{ backgroundColor: "#f5f6fa" }}>
          <Modal.Body>
            <div className="row">
              <div className="col-11">
                <h5 style={{fontFamily:'Hind',fontSize:'18px'}}>Are you sure you want to delete this user account? </h5>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button onClick={handleClose} className="btn btn-secondary" style={{fontFamily:'Hind',fontSize:'18px'}}>
              Close
            </button>
            <button
              type="submit"
              className="btn btn-light"
              onClick={deleteUser}
              style={{fontFamily:'Hind',fontSize:'18px',background:'red',color:'white'}}
            >
              Delete
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AdminUserAccountViewPage;
