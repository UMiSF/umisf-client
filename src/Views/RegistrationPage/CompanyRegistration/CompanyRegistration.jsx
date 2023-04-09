import React, { useRef, useState,useEffect } from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { Button, Divider, Space, Tour } from "antd";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePlayer/TableRow";
import Styles from "./CompanyRegistration.module.css";
import RegistrationsNotOpen from "../../../common/registrationsNotOpen/RegistrationsNotOpen";
import Axios from "axios";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import Dropdown from "../../../common/Dropdown/Dropdown";

import { message } from "antd";
const CompanyRegistration = () => {
  const [isRegistrationsOpen, setIsRegistrationsOpen] = useState(true);
  const [validated, setValidated] = useState(false); //form validation
  const [company, setCompany] = useState({
    name: "",
    email: "",
    contactNumber: "",
    paymentMethod: "",
    paymentSlip: "",
    matchType:"Men",
  });
  const isValidPlayerArray = (players) => {
    if (players.length < 5) {
      return false;
    }
    for (const player of players) {
      if (Object.values(player).includes("")) return false;
    }
    return true;
  };
  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [playersArray, setPlayersArray] = useState([
    { firstName: "", lastName: "", photo: "" },
    { firstName: "", lastName: "", photo: "" },
    { firstName: "", lastName: "", photo: "" },
  ]);
  const [count, setCount] = useState(3);
  const [exceeded, setExceeded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPlayerArrayValid = isValidPlayerArray(playersArray);
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
      setCompany((prevValue) => {
        return { ...prevValue, name: value };
      });
    } else if (name == "email") {
      setCompany((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name == "contactNumber") {
      setCompany((prevValue) => {
        return { ...prevValue, contactNumber: value };
      });
    } else if (name == "paymentMethod") {
      setCompany((prevValue) => {
        return { ...prevValue, paymentMethod: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer"
        ? setIsBankTransfer(true)
        : setIsBankTransfer(false);
    } else if (name == "paymentSlip") {
      setCompany((prevValue) => {
        return { ...prevValue, paymentSlip: value };
      });
    } else if (name.includes("name") || name.includes("id") || name.includes("photo")) {
      const field = name.split("-")[0];
      const position = parseInt(name.split("-")[1]);
      console.log("Table Values: ", field, position, value);
      const newArray = [...playersArray];
      console.log('name',name);
      switch (field) {
        case "name":
          newArray[position] = {
            firstName: value.split(' ')[0],
            lastName: value.split(' ')[1],
            photo: newArray[position].photo,
          };
          break;
        case "id":
          newArray[position] = {
            firstName: newArray[position].firstName,
            lastName:newArray[position].lastName,
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
  const updatePlayerCommonData = ()=>{
    const tempArray = []
    for (const player of playersArray){
      let tempObj = {email:company.email, institute:company.name, contactNumber:company.contactNumber,  ... player}
      tempArray.push(tempObj)
    }
    return tempArray
  }
  const changePaymentMethod = (value) => {
    setCompany((prevValue) => {
      return { ...prevValue, paymentMethod: value };
    });
    console.log("isBankTransfer: ", value == "On-Site");
    value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
  };
  const AddAnotherRow = () => {
    setCount(count + 1);
    setPlayersArray((prevValue) => {
      return [...playersArray, { name: "", id: "", photo: "" }];
    });
    count == 7 && setExceeded(true);
  };

  const RemoveanotherRow = (e) => {
    e.preventDefault();
    setCount(count - 1);
    if (playersArray.length > 3) {
      const tmpArray = playersArray.slice(0, playersArray.length - 1);
      setPlayersArray(tmpArray);
      count < 9 && exceeded && setExceeded(false);
    }
  };

  function handleSubmit(e) {
    //TODO: add player array
    e.preventDefault();
    console.log("Form submitted", company);
    console.log("players for submitted",playersArray);
    const form = e.currentTarget;
    const isPlayerArrayValid = isValidPlayerArray(playersArray)
    //form validation
    if (form.checkValidity() === false || !isPlayerArrayValid) {
      e.stopPropagation();
      !isPlayerArrayValid && message.error("Please fill players' details correctly !")
    }
    setValidated(true);
    console.log('bolean',company.paymentMethod== "On-site")
    if ((Object.values(company).includes('') && company.paymentMethod == "On-site" && company.paymentSlip == "") || !Object.values(company).includes("")) {
      console.log("Here")
      const players = updatePlayerCommonData()
      console.log(players)
      Axios.post(
        "http://localhost:3001/company/add",
        { companyDetails:company, players:players},
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
      {isRegistrationsOpen ? (
        <>
          <div className={`${Styles["title"]}`}>Event Registration - Corporate</div>
          <div className={`${Styles["info-container"]}`}>
            <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
            <div className={`${Styles["info"]}`}>
              Please note that we only allow companies which have been invited for the event this
              year . Your invitations have already been sent to the relevant email addresses
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
                <div className="row mb-2 ">
                  <MDBCol className="" lg="6" md="6" sm="12">
                    <MDBInput
                      wrapperClass="mb-2"
                      label="Corporate"
                      labelClass="text-white"
                      labelStyle={{ color: "white", fontFamily: "Hind"}}
                      className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                      name="company"
                      type="text"
                      value={company.company}
                      onChange={handleChange}
                      required
                      contrast
                    />
                  </MDBCol>
                  <MDBCol className="" lg="6" md="6" sm="12">
                    <MDBInput
                      wrapperClass="mb-2"
                      label="Contact Number"
                      labelStyle={{ color: "white", fontFamily: "Hind"}}
                      className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                      labelClass="text-white"
                      name="contact_number"
                      type="text"
                      value={company.contact_number}
                      onChange={handleChange}
                      required
                      contrast
                    />
                  </MDBCol>
                </div>
                <div className="row mb-2 ">
                  <MDBCol className="" lg="6" md="6" sm="12">
                    <MDBInput
                      wrapperClass="mb-2"
                      label="Email"
                      labelStyle={{ color: "white", fontFamily: "Hind"}}
                      className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                      labelClass="text-white"
                      name="email"
                      type="email"
                      value={company.email}
                      onChange={handleChange}
                      required
                      contrast
                    />
                  </MDBCol>
                  <MDBCol className="" lg="6" md="6" sm="12">
                    <div className={`${Styles["info-container-form"]}`}>
                      <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
                      <div className={`${Styles["info"]}`}>
                        Please provide the email to which we have sent the invitation
                      </div>
                    </div>
                  </MDBCol>
                </div>
                <div className="mb-2">
                  <div className="mb-2">
                    <div style={{ fontWeight: "bold", fontFamily: "Hind"}}>
                      Team
                    </div>
                  </div>
                  {playersArray?.map((player, index) => {
                    return <TableRow player={player} index={index} handleChange={handleChange} />;
                  })}
                  <div className={`${Styles["plus-minus"]}`}>
                    <button
                      hidden={exceeded}
                      className={`${Styles["plus-btn"]}`}
                      onClick={AddAnotherRow}
                    >
                      <img src={require(`../../../assests/images/plus-row.png`)} />
                    </button>
                    <button className={`${Styles["plus-btn"]}`} onClick={RemoveanotherRow}>
                      <img src={require(`../../../assests/images/minus-row.png`)} />
                    </button>
                  </div>
                </div>

            <div className="row mb-4 mt-2">
              <MDBCol className="mb-1">
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
                <MDBCol className="mb-1" lg="6" md="6" sm="12">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Payment Slip"
                    labelStyle={{ color: "white", fontFamily: "Hind"}}
                    className={`${Styles["mdbinput"]} bg-primary bg-opacity-25`}
                    labelClass="text-white"
                    name="paymentSlip"
                    type="text"
                    value={company.paymentSlip}
                    onChange={handleChange}
                    contrast
                  />
                </MDBCol>
              )}
            </div>

                <button className={`${Styles["btn"]}`} type="submit">
                  Register
                </button>
              </Form>
            </MDBContainer>
          </div>
        </>
      ) : (
        <RegistrationsNotOpen/>
      )}
    </div>
  );
};

export default CompanyRegistration;
