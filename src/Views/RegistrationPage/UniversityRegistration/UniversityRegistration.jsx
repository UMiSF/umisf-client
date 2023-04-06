import React, { useState } from "react";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePlayer/TableRow";
import plus from "../../../assests/images/plus.png";
import Styles from "./UniversityRegistration.module.css";
const UniversityRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [university, setUniversity] = useState({
    university: "",
    gender: "",
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

  const handleChange = (e) => {
    console.log("Past performance array: ", playersArray);
    const name = e.target.name;
    const value = e.target.value;
    if (name == "university") {
      setUniversity((prevValue) => {
        return { ...prevValue, university: value };
      });
    } else if (name == "gender") {
      setUniversity((prevValue) => {
        return { ...prevValue, gender: value };
      });
    } else if (name == "email") {
      setUniversity((prevValue) => {
        return { ...prevValue, email: value };
      });
    } else if (name == "contact_number") {
      setUniversity((prevValue) => {
        return { ...prevValue, contact_number: value };
      });
    } else if (name == "payment_method") {
      setUniversity((prevValue) => {
        return { ...prevValue, payment_method: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer"
        ? setIsBankTransfer(true)
        : setIsBankTransfer(false);
    } else if (name == "payment_slip") {
      setUniversity((prevValue) => {
        return { ...prevValue, payment_slip: value };
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

  const AddAnotherRow = () => {

        setCount(count + 1);
        setPlayersArray((prevValue) => {
            return [...playersArray, { name: "", id: "", photo: "" }];
          })
          count == 7 && setExceeded(true)
    

  };
  function handleSubmit(e) {
    //TODO: add player array
    e.preventDefault();
    console.log("Form submitted", university);
    const form = e.currentTarget;
    //form validation
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  }
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>
        Event Registration - University
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
                  label="University"
                  labelClass="text-white"
                  name="university"
                  type="text"
                  value={university.university}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Gender"
                  labelClass="text-white"
                  name="gender"
                  type="text"
                  value={university.gender}
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
                  value={university.email}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Contact Number"
                  labelClass="text-white"
                  name="contact_number"
                  type="text"
                  value={university.contact_number}
                  onChange={handleChange}
                  required
                  contrast
                  className="bg-primary bg-opacity-25"
                />
              </MDBCol>
            </div>
            <div className="mb-1">
              <div className="d-flex flex-row mb-1">
                <MDBCol>
                  <div>Player Name</div>
                </MDBCol>
                <MDBCol>
                  <div>University ID</div>
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
              <img
                src={plus}
                alt="plus"
                className={`${Styles["plus"]}`}
                onClick={AddAnotherRow}
                hidden={exceeded}
              />
            </div>

            <div className="d-flex flex-row mb-4 ">
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Payment Method"
                  labelClass="text-white"
                  name="payment_method"
                  type="text"
                  value={university.payment_method}
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
                    name="payment_slip"
                    type="text"
                    value={university.payment_slip}
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
