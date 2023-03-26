import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input } from "reactstrap";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import styles from "./adminUserAccountAddPage.module.css";
import ImageUploader from "../RegistrationPage/Common/imageUploader/ImageUploader";

const AdminUserAccountAddPage = () => {
  let { user } = useParams();

  const [userDetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    contactNumber: "",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmedNewPassword: "",
  });

  const userRoles = ["Admin", "Umpire", "Table Organizer", "Organizer"];
  const [selectedUserRoles, setSelectedUserRoles] = useState([]);

  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

  const [profileImage, setProfileImage] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  const selectRole = (e, userRole) => {
    e.preventDefault();
    if (selectedUserRoles.includes(userRole)) {
      setSelectedUserRoles(
        selectedUserRoles.filter((role) => {
          return role != userRole;
        })
      );
    } else {
      setSelectedUserRoles(selectedUserRoles.concat([userRole]));
    }
  };

  return (
    <div className={`${styles["account-container"]}`}>
      <ProfileHeader user_type={"admin"} />
      <AdminNavbar page="user_accounts" />

      <div className={`${styles["main-title"]}`}>
        <a href="/admin/user-accounts">User Accounts</a>
      </div>
      <div className={`${styles["tool-bar"]}`}>Add new user account</div>
      <div className={`${styles["profile-container"]}`}>
        <Form onSubmit={addUser}>
          <div className={`${styles["profile-image"]}`}>
            {" "}
            <ImageUploader fileList={profileImage} setFileList={setProfileImage} />
          </div>
          <hr />
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Name</div>
            <div className={`${styles["profile-field-value"]}`}>
              <input
                type="text"
                className={`${styles["form-input"]}`}
                value={userDetails.name}
                placeholder="Enter your name.."
                onChange={(e) => setUserdetails({ ...userDetails, name: e.target.value })}
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
                onChange={(e) => setUserdetails({ ...userDetails, email: e.target.value })}
              />
            </div>
          </div>
          <hr />
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>User Roles</div>
            <div className={`${styles["profile-field-value"]}`}>
              <div
                className={`${styles["multiple-dropdown"]}`}
                onClick={(e) => setIsDropdownExpanded(!isDropdownExpanded)}
              >
                {selectedUserRoles.length === 0
                  ? "Select the user roles.."
                  : selectedUserRoles.join(",")}
                <img src={require("../../assests/images/down_arrow.png")} alt="" />
              </div>

              {isDropdownExpanded && (
                <div className={`${styles["drop-down-items"]}`}>
                  {userRoles.map((role, index) => (
                    <div
                      className={`${styles["drop-down-item"]}`}
                      style={{
                        background: selectedUserRoles.includes(role) ? "#ececf2" : "transparent",
                      }}
                      key={index}
                      onClick={(e) => selectRole(e, role)}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <hr />

          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Password</div>
            <div className={`${styles["profile-field-value"]}`}>
              Enter your old password:
              <input
                type="password"
                className={`${styles["form-input"]}`}
                style={{ marginBottom: "10px" }}
                value={passwords.oldPassword}
                onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
              />
              Enter your new password:
              <input
                type="password"
                style={{ marginBottom: "10px" }}
                className={`${styles["form-input"]}`}
                value={passwords.newPassword}
                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
              />
              Confirm your new password:
              <input
                type="password"
                className={`${styles["form-input"]}`}
                value={passwords.confirmedNewPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, confirmedNewPassword: e.target.value })
                }
              />
            </div>
          </div>
          <hr />
          <div className={`${styles["profile-field-container"]}`}>
            <div className={`${styles["profile-field-name"]}`}>Contact Number</div>
            <div className={`${styles["profile-field-value"]}`}>
              <input
                type="text"
                className={`${styles["form-input"]}`}
                value={userDetails.contactNumber}
                placeholder="Enter your contact number.."
                onChange={(e) => setUserdetails({ ...userDetails, contactNumber: e.target.value })}
              />
            </div>
          </div>
          <hr />
          <button className={`${styles["form-submit-button"]}`}>Add User</button>
        </Form>
      </div>
    </div>
  );
};

export default AdminUserAccountAddPage;
