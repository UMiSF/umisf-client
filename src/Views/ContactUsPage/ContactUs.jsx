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
        await Axios.post(
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

  const [captainMaleDetails] = useState([
    {
      name: "Chatura Dissanayake",
      tag: "Captain",
      phone: "+94 70 310 6793",
      email: "",
      facebook: "",
      linkedin: "#",
      image: "captain-male2026.jpg",
    },
    {
      name: "Hirun Wijesinghe",
      tag: "Vice Captain",
      phone: "+94 77 446 9602",
      email: "Hirurash02@gmail.com",
      facebook: "https://www.facebook.com/share/1fohxb5Rpo/?mibextid=wwXIfr",
      linkedin: "",
      image: "viceCaptain-male2026.jpg",
    },
  ]);

  const [captainFeMaleDetails] = useState([
    {
      name: "Thulani Jayathilake",
      tag: "Captain",
      phone: "+94 70 310 6793",
      email: "shdissanayake23@gmail.com",
      facebook: "https://www.facebook.com/share/17xtrCytKk/",
      linkedin: "https://www.linkedin.com/in/thulani-jayathilake-7913a629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "captain-female.jpg",
    },
    {
      name: "Kaveesha Liyanage",
      tag: "Vice Captain",
      phone: "+94 76 060 8150",
      email: "kavindipatabendige2002@gmail.com",
      facebook: "",
      linkedin: "",
      image: "viceCaptain-female2026.jpg",
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
