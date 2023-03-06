import React, { useState } from "react";
import Styles from "./SingleRegistration.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePerf/TableRow";
import plus from "../../../assests/images/plus.png";

const SingleRegistration = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [single, setSingle] = useState({
    player_id: "",
    age_group: "",
    past_performance: [],
    payment_method: "",
    payment_slip: "",
  });

  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [pastPerformanceArray, setPastPerformanceArray] = useState([
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
  ]);

  const handleChange = (e) => {
    console.log("Past performance array: ", pastPerformanceArray);
    const name = e.target.name;
    const value = e.target.value;
    if (name == "player_id") {
      setSingle((prevValue) => {
        return { ...prevValue, player_id: value };
      });
    } else if (name == "age_group") {
      setSingle((prevValue) => {
        return { ...prevValue, age_group: value };
      });
    } else if (name == "payment_method") {
      setSingle((prevValue) => {
        return { ...prevValue, payment_method: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer"
        ? setIsBankTransfer(true)
        : setIsBankTransfer(false);
    } else if (name == "payment_slip") {
      setSingle((prevValue) => {
        return { ...prevValue, payment_slip: value };
      });
    } else if (
      name.includes("name") ||
      name.includes("level") ||
      name.includes("place")
    ) {
      const field = name.split("-")[0];
      const position = parseInt(name.split("-")[1]);
      console.log("Table Values: ", field, position, value);
      const newArray = [...pastPerformanceArray];
      switch (field) {
        case "name":
          newArray[position] = {
            name: value,
            level: newArray[position].level,
            place: newArray[position].place,
          };
          break;
        case "level":
          newArray[position] = {
            name: newArray[position].name,
            level: value,
            place: newArray[position].place,
          };
          break;
        case "place":
          newArray[position] = {
            name: newArray[position].name,
            level: newArray[position].level,
            place: value,
          };
          break;
      }
      setPastPerformanceArray(newArray);
    }
  };

  const AddAnotherRow = () => {
    setPastPerformanceArray((prevValue) => {
      return [...pastPerformanceArray, { name: "", level: "", place: "" }];
    });
  };
  function handleSubmit(e) {
    //TODO: add performance array
    e.preventDefault();
    console.log("Form submitted", single);
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
      <div className={`${Styles["title"]}`}>Event Registration - Singles</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that first you have to register as a player through player
          registration portal before applying for single/double events. The
          Player ID given upon successful registration should be used as Player
          ID here .
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
                  label="Player ID"
                  labelClass="text-white"
                  name="player_id"
                  type="text"
                  value={single.player_id}
                  onChange={handleChange}
                  required
                  contrast
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Age Group"
                  labelClass="text-white"
                  name="age_group"
                  type="text"
                  value={single.age_group}
                  onChange={handleChange}
                  required
                  contrast
                />
              </MDBCol>
            </div>
            <div className="mb-1">
              <div className="d-flex flex-row mb-1">
                <MDBCol>
                  <div>Tournament Name</div>
                </MDBCol>
                <MDBCol>
                  <div>Level</div>
                </MDBCol>
                <MDBCol>
                  <div>Winning Place</div>
                </MDBCol>
              </div>
              {pastPerformanceArray?.map((perf, index) => {
                return (
                  <TableRow
                    perf={perf}
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
                  value={single.payment_method}
                  onChange={handleChange}
                  required
                  contrast
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
                    value={single.payment_slip}
                    onChange={handleChange}
                    contrast
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

export default SingleRegistration;
