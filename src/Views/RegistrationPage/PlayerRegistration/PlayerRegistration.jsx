import React, { useState, useEffect } from "react";
import Styles from "./PlayerRegistration.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import ImageUploader from "../Common/imageUploader/ImageUploader";
import Axios from "axios";
import { message } from 'antd';

const PlayerRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    institute: "",
    gender: "",
    contactNumber: "",
    email: "",
    photo: "samplePhoto.jpeg",
    performanceThreshold: 100,
  });
  const [fileList, setFileList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading('Submitting form...');
    }
  }, [isSubmitting]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "gender") {
      setPlayer((prevValue) => {
        return { ...prevValue, gender: value };
      });
    } else if (name == "firstName") {
      setPlayer((prevValue) => {
        return { ...prevValue, firstName: value };
      });
    } else if (name == "lastName") {
      setPlayer((prevValue) => {
        return { ...prevValue, lastName: value };
      });
    } else if (name == "institute") {
      setPlayer((prevValue) => {
        return { ...prevValue, institute: value };
      });
    } else if (name == "contactNumber") {
      setPlayer((prevValue) => {
        return { ...prevValue, contactNumber: value };
      });
    } else if (name == "dob") {
      setPlayer((prevValue) => {
        return { ...prevValue, dob: value };
      });
    } else if (name == "email") {
      setPlayer((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name == "photo") {
      setPlayer((prevValue) => {
        return { ...prevValue, photo: value };
      });
    }
  };
  function handleSubmit (e) {
    e.preventDefault();
    console.log("Form submitted: ", player);
    setIsSubmitting(true);
    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    if (!Object.values(player).includes("")) {

      const formData = new FormData();

      //append data to formData

      formData.append("playerData", [player]);

        Axios.post(process.env.REACT_APP_API_URL + "/player/add",{playerData:[player]} , {
          headers:{},
        })
        .then((res, error) => {
          console.log(res.data);
          message.success( res.message)
        })
        .catch (error =>{
          console.log("Error: ", error)
          message.error( error.response.data.message)
        })
        setIsSubmitting(false);
      
    }
  }
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Player Registration</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that first you have to register as a player through this portal before applying for single/double events. The Player ID given upon successful registration
          should be used for all the future events including upcoming years.
        </div>
      </div>
      <div className={`${Styles["register-form"]}`}>
        {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
        <MDBContainer className="flex">
          <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data" className={`${Styles["register-form-content"]}`}>
            <div className="d-flex flex-row mb-4 ">
              <MDBCol className="d-flex align-items-center justify-content-center">{/* <ImageUploader fileList={fileList} setFileList={setFileList} /> */}</MDBCol>
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
                  name="firstName"
                  type="text"
                  value={player.firstName}
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
                  name="institute"
                  type="text"
                  value={player.institute}
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
                  name="lastName"
                  type="text"
                  value={player.lastName}
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
                  name="contactNumber"
                  type="text"
                  value={player.contactNumber}
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
