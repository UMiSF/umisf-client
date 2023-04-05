import React, { useState,useEffect } from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePlayer/TableRow";
import Styles from "./CompanyRegistration.module.css";
import Axios from "axios";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";


import { message } from "antd";
const CompanyRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [company, setCompany] = useState({
    name: "",
    email: "",
    contactNumber: "",
    paymentMethod: "",
    paymentSlip: "",
    matchType:"Catogary A",
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
    } else if (
      name.includes("name") ||
      name.includes("id") ||
      name.includes("photo")
    ) {
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
  const updatePlayerCommonData = ()=>{
    const tempArray = []
    for (const player of playersArray){
      let tempObj = {email:company.email, institute:company.name, contactNumber:company.contactNumber,  ... player}
      tempArray.push(tempObj)
    }
    return tempArray
  }
  const AddAnotherRow = () => {
    setCount(count + 1);
    setPlayersArray((prevValue) => {
      return [...playersArray, { name: "", id: "", photo: "" }];
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
      <div className={`${Styles["title"]}`}>Event Registration - Company</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that we only allow companies which have been invited for
          the event this year . Your invitations have already been sent to the
          relevant email addresses .
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
            <div className="d-flex flex-row mb-1 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Company"
                  labelClass="text-white"
                  name="name"
                  type="text"
                  value={company.name}
                  onChange={handleChange}
                  required
                  contrast
                  className={`bg-primary bg-opacity-25`}
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Contact Number"
                  labelClass="text-white"
                  name="contactNumber"
                  type="text"
                  value={company.contactNumber}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="d-flex flex-row mb-1 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Email"
                  labelClass="text-white"
                  name="email"
                  type="email"
                  value={company.email}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <div className={`${Styles["info-container-form"]}`}>
                  <img
                    src={info}
                    alt="info-icon"
                    className={`${Styles["info-logo"]}`}
                  />
                  <div className={`${Styles["info"]}`}>
                    Please provide the email to which we have sent the
                    invitation
                  </div>
                </div>
              </MDBCol>
            </div>
            <div className="mb-1">
              <div className="d-flex flex-row mb-1">
                <MDBCol>
                  <div>Player Name</div>
                </MDBCol>
                <MDBCol>
                  <div>Company/National ID</div>
                </MDBCol>
                <MDBCol>
                  <div>Photo</div>
                </MDBCol>
              </div>
              {playersArray?.map((player, index) => {
                return (
                  <TableRow
                    player={player}
                    index={index}
                    handleChange={handleChange}
                  />
                );
              })}
              <PlusCircleTwoTone onClick={AddAnotherRow} />
              <MinusCircleTwoTone onClick={RemoveanotherRow} />
            </div>

            <div className="d-flex flex-row mb-4 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Payment Method"
                  labelClass="text-white"
                  name="paymentMethod"
                  type="text"
                  value={company.payment_method}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              {isBankTransfer && (
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Payment Slip"
                    labelClass="text-white"
                    name="paymentSlip"
                    type="text"
                    value={company.payment_slip}
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

export default CompanyRegistration;
