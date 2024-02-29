import React, { useEffect, useState } from "react";
import styles from "./contactus.module.css";
import Footer from "../HomePage/Footer/footer";
import Header from "../HeaderPage/HeaderPage";
import Member from "./Member/memberComponent";
import { message } from "antd";
import Axios from "axios";
import { Form } from "react-bootstrap";
function ContactUs() {
  const [feedback, setFeedback] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    sentDate: new Date(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validated, setValidated] = useState(false); //form validation
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading("Submitting form...");
    }
  }, [isSubmitting]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted: ", feedback);

    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (!Object.values(feedback).includes("")) {
      setIsSubmitting(true);

      try {
        const res = await Axios.post(
          process.env.REACT_APP_API_URL + "/feedbacks/add",
          { feedbackData: feedback },
          {
            headers: {},
          }
        );

   
          window.location.reload(true);
     
      } catch (error) {
        console.log("Error: ", error);
        message.error(error.response.data.message);
      }
    }
  }

  const [captainMaleDetails, setCaptainMaleDetails] = useState([
    {
      name: "Yasira Punsith",
      tag: "Captain",
      phone: "+94 71 369 8543",
      email: "yasirapunsith@gmail.com",
      facebook: "https://www.facebook.com/profile.php?id=100006817725111&mibextid=ZbWKwL",
      linkedin: "www.linkedin.com/in/yasira-punsith-839121266",
      image: "captain-male.jpg",
    },
    {
      name: "Hevindu Tilakasena",
      tag: "Vice Captain",
      phone: "+94 76 381 3084",
      email: "hevinduharshana@gmail.com",
      facebook: "https://www.facebook.com/dkhevindu.htilakasena?mibextid=JRoKGi",
      linkedin: "https://www.linkedin.com/in/hevindu-tilakasena-8379b8202",
      image: "viceCaptain-male.jpg",
    },
  ]);

  const [captainFeMaleDetails, setCaptainFemaleDetails] = useState([
    {
      name: "Sahani Dissanayake",
      tag: "Captain",
      phone: "+94 76 885 4813",
      email: "shdissanayake23@gmail.com",
      facebook: "#",
      linkedin: "https://www.linkedin.com/in/sahani-dissanayake-202449267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "captain-female.jpg",
    },
    {
      name: "Hiruni Thathsarani",
      tag: "Vice Captain",
      phone: "+94 70 386 7270",
      email: "#",
      facebook: "#",
      linkedin: "#",
      image: "viceCaptain-female.jpg",
    },
  ]);

  return (
    <div>
      <div className={`${styles["headerDiv"]}`}>
        <Header />

        <div className={`${styles["UMiSF-container"]}`}>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className={`${styles["container"]}`}>
        <div className={`${styles["captain-contaier"]}`}>
          {captainMaleDetails.map((captain, index) => (
            <div className={`${styles["member"]}`}>
              <Member details={captain} />
            </div>
          ))}
        </div>
        <div className={`${styles["captain-contaier"]}`}>
          {captainFeMaleDetails.map((captain, index) => (
            <div className={`${styles["member"]}`}>
              <Member details={captain} />
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles["contct-us-form"]}`}>
        <Form className="needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className={`${styles["label"]}`} htmlfor="Firstname">
                First name
              </label>
              <input
                type="text"
                className={`${styles["input"]} form-control`}
                style={{ fontFamily: "Hind" }}
                id="Firstname"
                placeholder="First name"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, firstName: e.target.value };
                  });
                }}
                value={feedback.firstName}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles["label"]}`} htmlfor="Lastname">
                Last name
              </label>
              <input
                type="text"
                className={`${styles["input"]} form-control`}
                style={{ fontFamily: "Hind" }}
                id="Lastname"
                placeholder="Last name"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, lastName: e.target.value };
                  });
                }}
                value={feedback.lastName}
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label className={`${styles["label"]}`} htmlfor="Email">
                Email
              </label>
              <input
                type="email"
                className={`${styles["input"]} form-control`}
                style={{ fontFamily: "Hind" }}
                id="Email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setFeedback((prevValue) => {
                    return { ...prevValue, email: e.target.value };
                  });
                }}
                value={feedback.email}
              />
            </div>
          </div>
          <div className="form-row">
            <label className={`${styles["label"]}`} for="message">
              Message
            </label>
            <textarea
              className={`${styles["input"]} form-control`}
              style={{ fontFamily: "Hind" }}
              id="message"
              placeholder="Type your message here.."
              rows="3"
              required
              onChange={(e) => {
                setFeedback((prevValue) => {
                  return { ...prevValue, message: e.target.value };
                });
              }}
              value={feedback.message}
            ></textarea>
          </div>

          <button className={`${styles["send-button"]} btn btn-primary`} type="submit">
            Send
          </button>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
