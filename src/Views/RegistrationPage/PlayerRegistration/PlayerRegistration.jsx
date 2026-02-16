import React, { useState, useEffect, useMemo } from "react";
import Styles from "./PlayerRegistration.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBCol } from "mdb-react-ui-kit";
import ImageUploader from "../Common/imageUploader/ImageUploader";
import { api } from "../../../common/api";
import { message } from "antd";
import RegistrationsNotOpen from "../../../common/registrationsNotOpen/RegistrationsNotOpen";
import { REGISTRATIONS_OPEN } from "../../../constants/registrations";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import { preflightBackendHealth, showBackendDownModal } from "../../../common/backendAvailability";

const TOURNAMENT_GUIDELINES_URL =
  "https://drive.google.com/file/d/1Zb_YdAWpWUcjpoxAusV156iqoi4stg2m/view?usp=drivesdk";

const PlayerRegistration = () => {
  const navigate = useNavigate()
  const isRegistrationsOpen = REGISTRATIONS_OPEN;

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
    year:"2023"
  });
  const [fileList, setFileList] = useState([]);
  const [image,setImage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [, setPlayerID] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const genderOptions = ["Male", "Female"];
  const [imageName,setImageName] = useState();

  const PLAYER_REGISTER_URL = "/register/player/add";
  const registrationOptions = useMemo(
    () => [
      { label: "Player Registration", value: "/register/player/add" },
      {
        label: "Age Group Championship - UMiSF 2026",
        value: "https://forms.gle/rqwRDvPasvF7YE9D6",
      },
      {
        label: "Novices Men's Double Badminton Championship",
        value: "https://forms.gle/ZdgffEmLopJcu2QcA",
      },
      { label: "University Registration", value: "/register/university" },
      {
        label: "University Individual Registration",
        value: "https://forms.gle/MEvpUiKo9JFJv8dJ7",
      },
    ],
    []
  );

  const handleRegistrationCategoryChange = (path) => {
    if (String(path).startsWith("http")) {
      window.open(path, "_blank", "noreferrer");
      return;
    }
    if (path !== PLAYER_REGISTER_URL) {
      const playerId = localStorage.getItem("playerId");
      if (!playerId) {
        message.warning(
          "Please note that first you have to register as a player through this portal before applying for single/double events. The Player ID given upon successful registration should be used for all the future events including upcoming years."
        );
      }
    }
    navigate(path);
  };

  useEffect(() => {
    // openNotification('topRight')
    if (isSubmitting) {
      // show loading message
      message.loading("Submitting form...");
    }
  }, [isSubmitting, isChecked]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "firstName") {
      setPlayer((prevValue) => {
        return { ...prevValue, firstName: value };
      });
    } else if (name === "lastName") {
      setPlayer((prevValue) => {
        return { ...prevValue, lastName: value };
      });
    } else if (name === "institute") {
      setPlayer((prevValue) => {
        return { ...prevValue, institute: value };
      });
    } else if (name === "contactNumber") {
      setPlayer((prevValue) => {
        return { ...prevValue, contactNumber: value };
      });
    } else if (name === "dob") {
      setPlayer((prevValue) => {
        return { ...prevValue, dob: value };
      });
    } else if (name === "email") {
      setPlayer((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name === "photo") {
      setPlayer((prevValue) => {
        return { ...prevValue, photo: value };
      });
    }
  };

  const changeGender = (value) => {
    setPlayer((prevValue) => {
      return { ...prevValue, gender: value };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted: ", player);

    const form = e.currentTarget;
    const health = await preflightBackendHealth();
    if (health === false) {
      showBackendDownModal();
      return;
    }
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (Object.values(player).includes("")) {
      message.error("Please fill all required fields (including Gender).");
      return;
    }

    {
      setIsSubmitting(true);
      const formData = new FormData();

      //append data to formData
      console.log('player',player);

      formData.append("playerData", [player]);

      api
        .post(
          "/player/add",
        { playerData: [player] },
        {
          headers: {},
        }
      )
        .then(async (res) => {
          console.log(res.data);
          message.success(res.data.message);
          setPlayerID(res.data.data[0]["_id"]);
          localStorage.setItem("playerId", res.data.data[0]["_id"]);

          
          if(image !== null){
            const imageForm = {image: image,  playerId: res.data.data[0]["_id"], imageName: imageName};
            await api.post(
              "/image/add",
            imageForm,
            {
              headers: {},
            })
          }
          
          setIsChecked(true);
          navigate('/register/player/'+res.data.data[0]["_id"])
        })
        .catch((error) => {
          console.log("Error: ", error);
          if (!error?.response) {
            showBackendDownModal();
            return;
          }
          const apiMessage =
            error?.response?.data?.message ||
            error?.message ||
            "Registration failed. Please try again.";
          message.error(apiMessage);
        });
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      {isRegistrationsOpen ? (
        <>
          <div className={`${Styles["title"]}`}>Player Registration</div>

            <>
              <div style={{ margin: "0 10vw 16px 10vw" }}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select registration category"
                  value={PLAYER_REGISTER_URL}
                  options={registrationOptions}
                  onChange={handleRegistrationCategoryChange}
                />
              </div>
              <div className={`${Styles["tournament-guidlines"]}`}>
                <a href={TOURNAMENT_GUIDELINES_URL} target="_blank" rel="noopener noreferrer">
                  Tournament and registration guidelines
                </a>
                <img src={require("../../../assests/images/tap.gif")} alt="" />
              </div>
              <div className={`${Styles["info-container"]}`}>
                <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
                <div className={`${Styles["info"]}`}>
                  Please note that first you have to register as a player through this portal before
                  applying for single/double events. The Player ID given upon successful
                  registration should be used for all the future events including upcoming years.
                </div>
              </div>
              <div className={`${Styles["register-form"]}`}>
                {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
                <MDBContainer className="">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    className={`${Styles["register-form-content"]}`}
                  >
                    <div className="row mb-2">
                      <MDBCol
                        className="align-items-center justify-content-center"
                        lg="6"
                        md="12"
                        sm="12"
                      >
                        <ImageUploader setImage={setImage} fileList={fileList} setFileList={setFileList} setImageName={setImageName} />
                      </MDBCol>
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <div style={{ marginBottom: "20px" }}>
                          <div style={{ color: "white", fontFamily: "Hind", marginBottom: "6px" }}>
                            Gender
                          </div>
                          <Select
                            style={{ width: "100%" }}
                            placeholder="Select Gender"
                            value={player.gender || undefined}
                            options={genderOptions.map((g) => ({ label: g, value: g }))}
                            onChange={changeGender}
                          />
                        </div>
                      </MDBCol>
                    </div>
                    <div className="row mb-2">
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First Name"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          name="firstName"
                          type="text"
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          value={player.firstName}
                          onChange={handleChange}
                          required
                          contrast
                        />
                      </MDBCol>
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Institute"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          labelClass="text-white"
                          name="institute"
                          type="text"
                          value={player.institute}
                          onChange={handleChange}
                          required
                          contrast
                        />
                      </MDBCol>
                    </div>
                    <div className="row mb-2">
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last Name"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          labelClass="text-white"
                          name="lastName"
                          type="text"
                          value={player.lastName}
                          onChange={handleChange}
                          required
                          contrast
                        />
                      </MDBCol>
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Contact Number"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          labelClass="text-white"
                          name="contactNumber"
                          type="text"
                          value={player.contactNumber}
                          onChange={handleChange}
                          required
                          contrast
                        />
                      </MDBCol>
                    </div>
                    <div className="row mb-4">
                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Date of Birth"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          labelClass="text-white"
                          name="dob"
                          type="date"
                          value={player.dob}
                          onChange={handleChange}
                          required
                          contrast
                        ></MDBInput>
                      </MDBCol>

                      <MDBCol className="" lg="6" md="6" sm="12">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Email"
                          labelStyle={{ color: "white", fontFamily: "Hind" }}
                          className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                          labelClass="text-white"
                          name="email"
                          type="email"
                          value={player.email}
                          onChange={handleChange}
                          required
                          contrast
                        />
                      </MDBCol>
                    </div>
                    <button className={`${Styles["btn"]}`} type="submit">
                      Register
                    </button>
                  </Form>
                </MDBContainer>
              </div>
            </>
        </>
      ) : (
        <RegistrationsNotOpen />
      )}
    </div>
  );
};

export default PlayerRegistration;
