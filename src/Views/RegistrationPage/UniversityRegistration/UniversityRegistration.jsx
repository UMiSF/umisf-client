import React, { useState, useEffect } from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
// import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePlayer/TableRow";
import Styles from "./UniversityRegistration.module.css";
import Axios from "axios";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import Dropdown from "../../../common/Dropdown/Dropdown";

import { message } from "antd";
const UniversityRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [university, setUniversity] = useState({
    name: "",
    matchType: "",
    email: "",
    contactNumber: "",
    paymentMethod: "",
    paymentSlip: "",
  });

  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [playersArray, setPlayersArray] = useState([
    { firstName: "", lastName: "", photo: "" },
    { firstName: "", lastName: "", photo: "" },
    { firstName: "", lastName: "", photo: "" },
  ]);
  const [count, setCount] = useState(3);
  const [exceeded, setExceeded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const genderOptions = ["Male", "Female"];
  const [gender, setGender] = useState("");
  const paymentOptions = ["On-site", "Bank Transfer"];
  const [payment, setPayment] = useState("");

  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading("Submitting form...");
    }
  }, [isSubmitting]);

  const handleChange = (e) => {
    console.log("Past performance array: ", playersArray);
    const name = e.target.name;
    const value = e.target.value;
    if (name == "name") {
      setUniversity((prevValue) => {
        return { ...prevValue, name: value };
      });
    } else if (name == "email") {
      setUniversity((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name == "contactNumber") {
      setUniversity((prevValue) => {
        return { ...prevValue, contactNumber: value };
      });
    } else if (name == "paymentMethod") {
      setUniversity((prevValue) => {
        return { ...prevValue, paymentMethod: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
    } else if (name == "paymentSlip") {
      setUniversity((prevValue) => {
        return { ...prevValue, paymentSlip: value };
      });
    } else if (name.includes("name") || name.includes("id") || name.includes("photo")) {
      const field = name.split("-")[0];
      const position = parseInt(name.split("-")[1]);
      console.log("Table Values: ", field, position, value);
      const newArray = [...playersArray];
      switch (field) {
        case "name":
          newArray[position] = {
            firstName: value,
            lastName: newArray[position].lastName,
            photo: newArray[position].photo,
          };
          break;
        case "id":
          newArray[position] = {
            firstName: newArray[position].firstName,
            lastName: value,
            photo: newArray[position].photo,
          };
          break;
        case "photo":
          newArray[position] = {
            firstName: newArray[position].firstName,
            lastName: newArray[position].lastName,
            photo: value,
          };
          break;
      }
      setPlayersArray(newArray);
    }
  };

  const changeGender = (value) => {
    setUniversity((prevValue) => {
      return { ...prevValue, matchType: value };
    });
  };

  const changePaymentMethod = (value) => {
    setUniversity((prevValue) => {
      return { ...prevValue, paymentMethod: value };
    });
    console.log("isBankTransfer: ", value == "On-Site");
    value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
  };

  const updatePlayerCommonData = () => {
    const tempArray = [];
    for (const player of playersArray) {
      let tempObj = { email: university.email, institute: university.name, contactNumber: university.contactNumber, gender: university.matchType, ...player };
      tempArray.push(tempObj);
    }
    return tempArray;
  };

  const AddAnotherRow = () => {
    setCount(count + 1);
    setPlayersArray((prevValue) => {
      return [
        ...playersArray,
        { Firstname: "", lastName: "", photo: "", email: university.email, contactNumber: university.contactNumber, institute: university.name, gender: university.matchType },
      ];
    });
    count == 7 && setExceeded(true);
  };

  const RemoveanotherRow = () => {
    if (playersArray.length > 3) {
      const tmpArray = playersArray.slice(0, playersArray.length - 1);
      setPlayersArray(tmpArray);
    }
  };

  const isValidPlayerArray = (players) => {
    if (players.length < 5) {
      return false;
    }
    for (const player of players) {
      if (Object.values(player).includes("")) return false;
    }
    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", university);
    const form = e.currentTarget;
    const isPlayerArrayValid = isValidPlayerArray(playersArray);
    //form validation
    if (form.checkValidity() === false || !isPlayerArrayValid) {
      e.stopPropagation();
      !isPlayerArrayValid && message.error("Please fill players' details correctly !");
    }
    setValidated(true);
    if (
      ((Object.values(university).includes("") && university.paymentMethod == "On-site" && university.paymentSlip == "") || !Object.values(university).includes("")) &&
      isPlayerArrayValid
    ) {
      console.log("Here");
      const players = updatePlayerCommonData();
      console.log(players);
      Axios.post(
        process.env.REACT_APP_API_URL + "/university/add",
        { universityDetails: university, players: players },
        {
          headers: {},
        }
      )
        .then((res) => {
          console.log(res.data);
          message.success(res.data.message);
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        })
        .catch((error) => {
          console.log("Error: ", error);
          message.error(error.response.data.message);
        });
      setIsSubmitting(false);
    }
  }
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Event Registration - University</div>

      <div className={`${Styles["register-form"]}`}>
        {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
        <MDBContainer className="">
          <Form noValidate validated={validated} onSubmit={handleSubmit} className={`${Styles["register-form-content"]}`}>
            <div className="row mb-4">
              <MDBCol className="" lg="6" md="12" sm="12">
                <MDBInput
                  wrapperClass="mb-1"
                  label="University"
                  labelClass="text-white"
                  name="name"
                  type="text"
                  value={university.name}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol className="" lg="6" md="12" sm="12">
                <Dropdown
                  options={genderOptions}
                  handleClick={(option) => {
                    setGender(option);
                    changeGender(option);
                  }}
                  value={gender}
                  lable={"Gender"}
                />
              </MDBCol>
            </div>
            <div className="row mb-4">
              <MDBCol className="" lg="6" md="12" sm="12">
                <MDBInput
                  wrapperClass="mb-1"
                  label="Email"
                  labelClass="text-white"
                  name="email"
                  type="email"
                  value={university.email}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol className="" lg="6" md="12" sm="12">
                <MDBInput
                  wrapperClass="mb-1"
                  label="Contact Number"
                  labelClass="text-white"
                  name="contactNumber"
                  type="text"
                  value={university.contactNumber}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="mb-1">
              {playersArray?.map((player, index) => {
                return <TableRow player={player} index={index} handleChange={handleChange} />;
              })}
              <PlusCircleTwoTone onClick={AddAnotherRow} />
              <MinusCircleTwoTone onClick={RemoveanotherRow} />
            </div>

            <div className="row mb-4">
              <MDBCol className="" lg="6" md="12" sm="12">
                <Dropdown
                  options={paymentOptions}
                  handleClick={(option) => {
                    setPayment(option);
                    changePaymentMethod(option);
                  }}
                  value={payment}
                  lable={"Payment"}
                />
              </MDBCol>
              {isBankTransfer && (
                <MDBCol className="" lg="6" md="12" sm="12">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Payment Slip"
                    labelClass="text-white"
                    name="paymentSlip"
                    type="text"
                    value={university.paymentSlip}
                    onChange={handleChange}
                    contrast
                    className="bg-primary bg-opacity-25"
                  />
                </MDBCol>
              )}
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
export default UniversityRegistration;
