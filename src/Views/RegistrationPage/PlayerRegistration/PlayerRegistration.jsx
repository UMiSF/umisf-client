import React, { useState } from "react";
import Styles from "./PlayerRegistration.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import uploader from "../../../assests/images/upload-img.jpeg";
import { Form } from "react-bootstrap";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCol,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import TextField from "@mui/material/TextField";

const PlayerRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [player, setPlayer] = useState({
    match_event: "School",
    first_name: "",
    last_name: "",
    dob: "",
    school: "",
    gender: "",
    contact_number: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "gender") {
      setPlayer((prevValue) => {
        return { ...prevValue, gender: value };
      });
    } else if (name == "first_name") {
      setPlayer((prevValue) => {
        return { ...prevValue, first_name: value };
      });
    } else if (name == "last_name") {
      setPlayer((prevValue) => {
        return { ...prevValue, last_name: value };
      });
    } else if (name == "school") {
      setPlayer((prevValue) => {
        return { ...prevValue, school: value };
      });
    } else if (name == "contact_number") {
      setPlayer((prevValue) => {
        return { ...prevValue, contact_number: value };
      });
    } else if (name == "dob") {
      setPlayer((prevValue) => {
        return { ...prevValue, dob: value };
      });
    } else if (name == "email") {
      setPlayer((prevValue) => {
        return { ...prevValue, email: value };
      });
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted: ", player);
    const form = e.currentTarget
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Player Registration</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that first you have to register as a player through this
          portal before applying for single/double events. The Player ID given
          upon successful registration should be used for all the future events
          including upcoming years.
        </div>
      </div>
      <div className={`${Styles["register-form"]}`}>
        {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
        <MDBContainer className="flex">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className={`${Styles["register-form-content"]}`}
          >
            <div className="d-flex flex-row mb-4 ">
              <MDBCol className="d-flex align-items-center justify-content-center">
                <img
                  src={uploader}
                  alt="upload-image"
                  className={`${Styles["uploader"]}`}
                />
              </MDBCol>
              <MDBCol>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Gender"
                      labelClass="text-white"
                      name="gender"
                      type="text"
                      style={{ fontFamily: 'Hind", sans-serif' }}
                      value={player.gender}
                      onChange={handleChange}
                      required
                      contrast
                      className="bg-primary bg-opacity-25"
                    />
              </MDBCol>
            </div>
            <div className="d-flex flex-row mb-4 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="First Name"
                  labelClass="text-white"
                  name="first_name"
                  type="text"
                  value={player.first_name}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="School"
                  labelClass="text-white"
                  name="school"
                  type="text"
                  value={player.school}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="d-flex flex-row mb-4 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last Name"
                  labelClass="text-white"
                  name="last_name"
                  type="text"
                  value={player.last_name}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Contact Number"
                  labelClass="text-white"
                  name="contact_number"
                  type="text"
                  value={player.contact_number}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="d-flex flex-row mb-4">
              <MDBCol>
                <div className={`${Styles["picker-bg"]}`} />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Date of Birth"
                  labelClass="text-white"
                  name="dob"
                  type="date"
                  value={player.dob}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                ></MDBInput>
              </MDBCol>

              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  labelClass="text-white"
                  name="email"
                  type="email"
                  value={player.email}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <MDBBtn className={`${Styles["btn"]}`} type="submit">
              Register
            </MDBBtn>
          </Form>
        </MDBContainer>
      </div>
    </div>
  );
};

export default PlayerRegistration;
