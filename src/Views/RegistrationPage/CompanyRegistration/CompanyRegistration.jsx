import React, { useRef, useState } from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { Button, Divider, Space, Tour } from "antd";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePlayer/TableRow";
import plus from "../../../assests/images/plus.png";
import Styles from "./CompanyRegistration.module.css";

const CompanyRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [company, setCompany] = useState({
    company: "",
    email: "",
    contact_number: "",
    players: [],
    payment_method: "",
    payment_slip: "",
  });

  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [playersArray, setPlayersArray] = useState([
    { name: "", id: "", photo: "" },
    { name: "", id: "", photo: "" },
    { name: "", id: "", photo: "" },
  ]);
  const [count, setCount] = useState(3);
  const [exceeded, setExceeded] = useState(false);
  const inputStyle = {
    border: "0",
  };

  const handleChange = (e) => {
    console.log("Past performance array: ", playersArray);
    const name = e.target.name;
    const value = e.target.value;
    if (name == "company") {
      setCompany((prevValue) => {
        return { ...prevValue, company: value };
      });
    } else if (name == "email") {
      setCompany((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name == "contact_number") {
      setCompany((prevValue) => {
        return { ...prevValue, contact_number: value };
      });
    } else if (name == "payment_method") {
      setCompany((prevValue) => {
        return { ...prevValue, payment_method: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
    } else if (name == "payment_slip") {
      setCompany((prevValue) => {
        return { ...prevValue, payment_slip: value };
      });
    } else if (name.includes("name") || name.includes("id") || name.includes("photo")) {
      const field = name.split("-")[0];
      const position = parseInt(name.split("-")[1]);
      console.log("Table Values: ", field, position, value);
      const newArray = [...playersArray];
      switch (field) {
        case "name":
          newArray[position] = {
            name: value,
            id: newArray[position].id,
            photo: newArray[position].photo,
          };
          break;
        case "id":
          newArray[position] = {
            name: newArray[position].name,
            id: value,
            photo: newArray[position].photo,
          };
          break;
        case "photo":
          newArray[position] = {
            name: newArray[position].name,
            id: newArray[position].id,
            photo: value,
          };
          break;
      }
      setPlayersArray(newArray);
    }
  };

  const AddAnotherRow = (e) => {
    e.preventDefault();
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
    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  }

  // guide for tournament details
  const ref = useRef(null);
  const [open, setOpen] = useState(true);
  const steps = [
    {
      title: "Tournament Details and Registration Guidlines",
      description: "Please refer the details and guidlines before the registration process.",
      target: () => ref.current,
    },
  ];
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Event Registration - Company</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that we only allow companies which have been invited for the event this year .
          Your invitations have already been sent to the relevant email addresses .Please find the{" "}
          <Space>
            <button ref={ref}>Tournament Details and Registration Guidlines</button>
          </Space>{" "}
          here.
          <Tour placement="right" open={open} onClose={() => setOpen(false)} steps={steps} />
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
                  label="Company"
                  labelClass="text-white"
                  labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
                  style={{
                    fontFamily: "Hind",
                    fontSize: "18px",
                    padding: "15px",
                    minHeight: "40px",
                  }}
                  name="company"
                  type="text"
                  value={company.company}
                  onChange={handleChange}
                  required
                  contrast
                  className={`bg-primary bg-opacity-25`}
                />
              </MDBCol>
              <MDBCol className="" lg="6" md="6" sm="12">
                <MDBInput
                  wrapperClass="mb-2"
                  label="Contact Number"
                  labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
                  style={{
                    fontFamily: "Hind",
                    fontSize: "18px",
                    padding: "15px",
                    minHeight: "40px",
                  }}
                  v
                  labelClass="text-white"
                  name="contact_number"
                  type="text"
                  value={company.contact_number}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="row mb-2 ">
              <MDBCol className="" lg="6" md="6" sm="12">
                <MDBInput
                  wrapperClass="mb-2"
                  label="Email"
                  labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
                  style={{
                    fontFamily: "Hind",
                    fontSize: "18px",
                    padding: "15px",
                    minHeight: "40px",
                  }}
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
                <div style={{ fontWeight: "bold", fontFamily: "Hind", fontSize: "25px" }}>Team</div>
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

            <div className="row mb-2">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-2"
                  label="Payment Method"
                  labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
                  style={{
                    fontFamily: "Hind",
                    fontSize: "18px",
                    padding: "15px",
                    minHeight: "40px",
                  }}
                  labelClass="text-white"
                  name="payment_method"
                  type="text"
                  value={company.payment_method}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              {isBankTransfer && (
                <MDBCol className="" lg="6" md="6" sm="12">
                  <MDBInput
                    wrapperClass="mb-2"
                    label="Payment Slip"
                    labelStyle={{ color: "white", fontFamily: "Hind", fontSize: "23px" }}
                    style={{
                      fontFamily: "Hind",
                      fontSize: "18px",
                      padding: "15px",
                      minHeight: "40px",
                    }}
                    labelClass="text-white"
                    name="payment_slip"
                    type="text"
                    value={company.payment_slip}
                    onChange={handleChange}
                    contrast
                    className="bg-primary bg-opacity-25"
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
    </div>
  );
};

export default CompanyRegistration;
