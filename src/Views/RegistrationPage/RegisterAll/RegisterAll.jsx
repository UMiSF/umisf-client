import React, { useState, useEffect } from "react";
import Styles from "./RegisterAll.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePerf/TableRow";
import Axios from "axios";
import { CheckCircleTwoTone, ExclamationCircleTwoTone, PlusCircleTwoTone, MinusCircleTwoTone, CheckOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import { Modal, message, Switch, Select, Space } from "antd";
import Dropdown from "../../../common/Dropdown/Dropdown";
const RegisterAll = () => {
  const [validated, setValidated] = useState(false); //form validation
  const [single, setSingle] = useState({
    player: "",
    ageGroup: "Select Age Group",
    pastPerformance: [],
    paymentMethod: "",
    paymentSlip: "",
  });

  const [double, setDouble] = useState({
    player: "",
    playerPartner: "",
    ageGroup: "Select Age Group",
    pastPerformance: [],
    paymentMethod: "",
    paymentSlip: "",
  });
  const items = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];
  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [singlePastPerformanceArray, setSinglePastPerformanceArray] = useState([
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
  ]);

  const [doublePastPerformanceArray, setDoublePastPerformanceArray] = useState([
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
  ]);

  //   const [mixPastPerformanceArray, setMixPastPerformanceArray] = useState([
  //     { name: "", level: "", place: "" },
  //     { name: "", level: "", place: "" },
  //     { name: "", level: "", place: "" },
  //   ]);

  const { confirm } = Modal;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlayingSingle, setIsplayingSingle] = useState(true);
  const [isPlayingDouble, setIsplayingDouble] = useState(true);
  const ageOptions = ['Under 9', 'Under 11', 'Under 13', 'Under 15', 'Staff']
  const [ageGrpup, setAgeGroup] = useState("Select Age Group");
  const paymentOptions = ['On-site', 'Bank Transfer']
  const [payment, setPayment] = useState("Select Payment Method");
  //const [isPlayingMix, setIsplayingMix] = useState(true);
  let doneSingle = { success: false, message: "", valid: false, data: "" };
  let doneDouble = { success: false, message: "", valid: false, validP: false, data: "", dataP: "" };
  
  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading("Submitting form...");
    }
  }, [isSubmitting]);

  const showConfirm = (title, success, content) => {
    let singleRes = null;
    let doubleRes = null;
    confirm({
      title: title,
      icon: success ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <ExclamationCircleTwoTone twoToneColor="#eb2f96" />,
      content: content, //TODO: content for success should be displayed properly (create a proper description using the object sent in content) -> VINUL
      async onOk() {
        console.log("OK");
        if (success) {
          setIsSubmitting(true);
          try {
            singleRes =
              isPlayingSingle &&
              (await Axios.post(
                process.env.REACT_APP_API_URL + "/single/add",
                { singleData: [single] },
                {
                  headers: {},
                }
              ));
            console.log(singleRes.data);
            doneSingle = { ...doneSingle, success: true, message: singleRes.data.message };
          } catch (error) {
            console.log("Error: ", error);
            doneSingle = { ...doneSingle, message: error.response.data.message };
            //message.error(error.response.data.message);
          }

          try {
            doubleRes =
              isPlayingSingle &&
              (await Axios.post(
                process.env.REACT_APP_API_URL + "/double/add",
                { data: [double] },
                {
                  headers: {},
                }
              ));
            console.log(doubleRes.data);
            doneDouble = { ...doneDouble, success: true, message: doubleRes.data.message };
          } catch (error) {
            console.log("Error: ", error);
            doneDouble = { ...doneDouble, message: error.response.data.message };
            //message.error(error.response.data.message);
          }

          //   .then((res) => {
          //     console.log(res.data);
          //     message.success(res.data.message);
          //     console.log("Here");
          //     setTimeout(() => {
          //       window.location.reload(true);
          //     }, 2000);
          //   })
          //   .catch((error) => {

          //   });
          setIsSubmitting(false);
          let msg = "";

          if (isPlayingSingle) {
            msg += doneSingle.message;
          }
          if (isPlayingDouble && isPlayingSingle) msg += " & ";

          if (isPlayingDouble) {
            msg += doneDouble.message;
          }

          if (!doneDouble.success || !doneSingle.success) {
            message.error(msg);
          } else {
            message.success(msg);
          }
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const changePlayer = (e) => {
    const value = e.target.value;

    setSingle((prevValue) => {
      return { ...prevValue, player: value };
    });

    setDouble((prevValue) => {
      return { ...prevValue, player: value };
    });
  };

  const changeAgeGroup = (value) => {
  
    setSingle((prevValue) => {
      return { ...prevValue, ageGroup: value };
    });

    setDouble((prevValue) => {
      return { ...prevValue, ageGroup: value };
    });
  };

  const changePaymentMethod = (value) => {

    setSingle((prevValue) => {
      return { ...prevValue, paymentMethod: value };
    });

    setDouble((prevValue) => {
      return { ...prevValue, paymentMethod: value };
    });
    console.log("isBankTransfer: ", value == "On-Site");
    value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
  };

  const changePaymentSlip = (e) => {
    const value = e.target.value;

    setSingle((prevValue) => {
      return { ...prevValue, paymentSlip: value };
    });

    setDouble((prevValue) => {
      return { ...prevValue, paymentSlip: value };
    });
  };

  const changeSinglePastPerformanceArray = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const field = name.split("-")[0];
    const position = parseInt(name.split("-")[1]);
    console.log("Table Values: ", field, position, value);
    const newArray = [...singlePastPerformanceArray];
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
    setSinglePastPerformanceArray(newArray);
  };

  const changeDoublePastPerformanceArray = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const field = name.split("-")[0];
    const position = parseInt(name.split("-")[1]);
    console.log("Table Values: ", field, position, value);
    const newArray = [...doublePastPerformanceArray];
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
    setDoublePastPerformanceArray(newArray);
  };

  const AddAnotherRowS = () => {
    setSinglePastPerformanceArray((prevValue) => {
      return [...singlePastPerformanceArray, { name: "", level: "", place: "" }];
    });
  };

  const RemoveanotherRowS = () => {
    if (singlePastPerformanceArray.length > 3) {
      const tmpArray = singlePastPerformanceArray.slice(0, singlePastPerformanceArray.length - 1);
      setSinglePastPerformanceArray(tmpArray);
    }
  };

  const AddAnotherRowD = () => {
    setDoublePastPerformanceArray((prevValue) => {
      return [...doublePastPerformanceArray, { name: "", level: "", place: "" }];
    });
  };

  const RemoveanotherRowD = () => {
    if (doublePastPerformanceArray.length > 3) {
      const tmpArray = doublePastPerformanceArray.slice(0, doublePastPerformanceArray.length - 1);
      setDoublePastPerformanceArray(tmpArray);
    }
  };

  const arrangePerformanceArray = (arr) => {
    const newArr = [];
    for (const value of arr) {
      if (Object.values(value).includes("")) {
        const { name, level, place } = value;
        if (name == "" && level == "" && place == "") {
          //nothing
          console.log("nothing");
        } else {
          return ["~error~"];
        }
      } else {
        newArr.push(value);
      }
    }
    return newArr;
  };

  //   const AddAnotherRowM = () => {
  //     setMixPastPerformanceArray((prevValue) => {
  //       return [...mixPastPerformanceArray, { name: "", level: "", place: "" }];
  //     });
  //   };

  //   const RemoveanotherRowM = () => {
  //     if (mixPastPerformanceArray.length > 3) {
  //       const tmpArray = mixPastPerformanceArray.slice(0, mixPastPerformanceArray.length - 1);
  //       setMixPastPerformanceArray(tmpArray);
  //     }
  //   };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    const form = e.currentTarget;
    const singlePerf = arrangePerformanceArray(singlePastPerformanceArray);
    const doublePerf = arrangePerformanceArray(doublePastPerformanceArray);

    //form validation
    if (form.checkValidity() === false || (isPlayingDouble && double.player === double.playerPartner)) {
      e.stopPropagation();
      isPlayingDouble && double.player === double.playerPartner && message.error("Player and the Partner have the same ID !! ");
    }
    if (singlePerf.includes("~error~") || doublePerf.includes("~error~")) {
      e.stopPropagation();
    }
    setValidated(true);

    single.pastPerformance = singlePerf;
    double.pastPerformance = doublePerf;

    if ((isPlayingSingle && Object.values(single).includes("") && single.paymentMethod == "On-site" && single.paymentSlip == "") || !Object.values(single).includes("")) {
      try {
        const res = await Axios.get(
          process.env.REACT_APP_API_URL + "/player/getByObjectId",
          { params: { ids: single.player } },
          {
            headers: {},
          }
        );

        console.log("Result from get player by id", res.data.data);
        // showConfirm("Confirm your data !", true, res.data.toString());
        doneSingle = { ...doneSingle, valid: true, data: res.data.data[0] };
        !isPlayingDouble && check();
        console.log("SUPUN");
      } catch (error) {
        console.log("Error: ", error.response.data.message);
        //showConfirm("Error Loading Player !", false, error.response.data.message);
        doneSingle = { ...doneSingle, data: error.response.data.message };
        !isPlayingDouble && check();
      }
    }

    if ((isPlayingDouble && Object.values(double).includes("") && double.paymentMethod == "On-site" && double.paymentSlip == "") || !Object.values(double).includes("")) {
      Axios.get(
        process.env.REACT_APP_API_URL + "/player/getByObjectId",
        { params: { ids: double.player + "," + double.playerPartner } },
        {
          headers: {},
        }
      )
        .then(async (res) => {
          console.log("Result from get player by id", res.data);
          // showConfirm("Confirm your data !", true, res.data.toString());
          if (res.data.data.length == 2) {
            doneDouble = {
              ...doneDouble,
              valid: true,
              validP: true,
              data: res.data.data[0]._id === double.player ? res.data.data[0] : res.data.data[1],
              dataP: res.data.data[1]._id === double.player ? res.data.data[0] : res.data.data[1],
            };
            console.log("Below");
            check();
          } else if (res.data.data.length == 1) {
            console.log("Here");
            doneDouble = createDoneDouble(double.player, res.data.data[0], doneDouble);

            check();
          } else {
            console.log(res.data);
            alert("Something went wrong !!");
          }
        })
        .catch((error) => {
          console.log("Here");
          console.log("Error: ", error.response.data.message);
          //showConfirm("Error Loading Player !", false, error.response.data.message);
          doneDouble = { ...doneDouble, valid: false, validP: false, data: error.response.data.message, dataP: error.response.data.message };
          check();
        });
    }
  }

  const createDoneDouble = (player, data, doneDouble) => {
    if (Object.values(data).includes(player)) {
      return { ...doneDouble, valid: true, validP: false, data: data, dataP: "Invalid ID included for Partner" };
    }
    return { ...doneDouble, valid: false, validP: true, data: "Invalid ID included", dataP: data };
  };

  const check = () => {
    let message = "";
    if (isPlayingSingle && isPlayingDouble) {
      doneDouble.valid && doneDouble.validP
        ? (message =
            "Player: " +
            doneDouble.data.firstName +
            " " +
            doneDouble.data.lastName +
            " " +
            ", Partner: " +
            doneDouble.dataP.firstName +
            " " +
            doneDouble.dataP.lastName +
            " , Gender: " +
            doneDouble.data.gender)
        : doneDouble.valid && !doneDouble.validP
        ? (message = doneDouble.dataP)
        : (message = doneDouble.data);
    } else if (isPlayingSingle && !isPlayingDouble) {
      // console.log("doneSingle", doneSingle.data);
      doneSingle.valid
        ? (message = "Player: " + doneSingle.data.firstName + " " + doneSingle.data.lastName + " , " + "Gender: " + doneSingle.data.gender)
        : (message = doneSingle.data);
    } else if (!isPlayingSingle && isPlayingDouble) {
      doneDouble.valid && doneDouble.validP
        ? (message =
            "Player: " +
            doneDouble.data.firstName +
            " " +
            doneDouble.data.lastName +
            " " +
            ", Partner: " +
            doneDouble.dataP.firstName +
            " " +
            doneDouble.dataP.lastName +
            " , Gender: " +
            doneDouble.data.gender)
        : doneDouble.valid && !doneDouble.validP
        ? (message = doneDouble.dataP)
        : (message = doneDouble.data);
    }
    console.log("Message : ", message);
    console.log(doneSingle.valid, doneDouble.valid, doneDouble.validP);
    if ((isPlayingDouble && (doneDouble.valid == false || doneDouble.validP == false)) || (isPlayingSingle && doneSingle.valid == false)) {
      showConfirm("Error Loading Player !", false, message);
    } else {
      showConfirm("Confirm your data !", true, message);
    }
  };

  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Event Registration</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that first you have to register as a player through player registration portal before applying for single/double events. The Player ID given upon successful
          registration should be used as Player ID here .
        </div>
      </div>
      <div className={`${Styles["register-form"]}`}>
        {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
        <MDBContainer>
          <MDBRow>
            <MDBCol start size="3">
              <small>Single</small>{" "}
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
                onClick={() => {
                  setIsplayingSingle(!isPlayingSingle);
                }}
              />
            </MDBCol>
            <MDBCol end size="3">
              <small>Double</small>{" "}
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
                onClick={() => {
                  setIsplayingDouble(!isPlayingDouble);
                }}
              />
            </MDBCol>
            {/* <MDBCol end size="4">
              <small>Mix Double</small> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked  onClick={()=>{setIsplayingMix(!isPlayingMix)}}/>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="flex">
          <Form noValidate validated={validated} onSubmit={handleSubmit} className={`${Styles["register-form-content"]}`}>
            <div hidden={!isPlayingSingle}>
              <div className="d-flex flex-row mb-1 ">
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Player ID"
                    labelClass="text-white"
                    name="player"
                    type="text"
                    value={single.player}
                    onChange={changePlayer}
                    required
                    contrast
                  />
                </MDBCol>
                <MDBCol>
                  {/* <MDBInput
                    wrapperClass="mb-1"
                    label="Age Group"
                    labelClass="text-white"
                    name="ageGroup"
                    type="text"
                    value={single.ageGroup}
                    onChange={changeAgeGroup}
                    required
                    contrast
                  /> */}
                  <Dropdown options = {ageOptions} handleClick={(option)=>{setAgeGroup(option); changeAgeGroup(option)}} value={ageGrpup}/>

                </MDBCol>
              </div>
              <div className="mb-1">
                <div className="d-flex flex-row mb-1"> Singles : Past Performance</div>
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
                {singlePastPerformanceArray?.map((perf, index) => {
                  return <TableRow perf={perf} index={index} handleChange={changeSinglePastPerformanceArray} />;
                })}
                <PlusCircleTwoTone onClick={AddAnotherRowS} />
                <MinusCircleTwoTone onClick={RemoveanotherRowS} />
              </div>
            </div>
            <div hidden={!isPlayingDouble}>
              <div className="d-flex flex-row mb-1 ">
                {!isPlayingSingle && (
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-1"
                      label="Player ID"
                      labelClass="text-white"
                      name="player"
                      type="text"
                      value={double.player}
                      onChange={changePlayer}
                      required
                      contrast
                      display="none"
                    />{" "}
                  </MDBCol>
                )}

                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Partner ID"
                    labelClass="text-white"
                    name="d-partner"
                    type="text"
                    value={double.playerPartner}
                    onChange={(e) => {
                      const value = e.target.value;
                      setDouble((prevValue) => {
                        return { ...prevValue, playerPartner: value };
                      });
                    }}
                    required
                    contrast
                  />
                </MDBCol>
              </div>
              <div className="d-flex flex-row mb-1 ">
                {!isPlayingSingle && (
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-1"
                      label="Age Group"
                      labelClass="text-white"
                      name="ageGroup"
                      type="text"
                      value={double.ageGroup}
                      onChange={changeAgeGroup}
                      required
                      contrast
                    />
                  </MDBCol>
                )}
              </div>

              <div className="mb-1">
                <div className="d-flex flex-row mb-1"> Doubles : Past Performance</div>
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
                {doublePastPerformanceArray?.map((perf, index) => {
                  return <TableRow perf={perf} index={index} handleChange={changeDoublePastPerformanceArray} />; //TODO:
                })}
                <PlusCircleTwoTone onClick={AddAnotherRowD} />
                <MinusCircleTwoTone onClick={RemoveanotherRowD} />
              </div>
            </div>
            {/* <div hidden={!isPlayingMix}>
              <div className="d-flex flex-row mb-1 ">
              {(!isPlayingSingle && !isPlayingDouble)&& <MDBCol>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Player ID"
                    labelClass="text-white"
                    name="player"
                    type="text"
                    value={single.player}
                    onChange={handleChange}
                    required
                    contrast
                    display='none'
                  /> </MDBCol>}
                
                <MDBCol>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Partner ID"
                    labelClass="text-white"
                    name="m-partner"
                    type="text"
                    value={single.player} //TODO:
                    onChange={handleChange}
                    required
                    contrast
                    
                  />
                </MDBCol>
              </div>
              <div className="mb-1">
                <div className="d-flex flex-row mb-1"> Mix Doubles : Past Performance</div>
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
                {mixPastPerformanceArray?.map((perf, index) => {
                  return <TableRow perf={perf} index={index} handleChange={handleChange} />;
                })}
                <PlusCircleTwoTone onClick={AddAnotherRowM} />
                <MinusCircleTwoTone onClick={RemoveanotherRowM} />
              </div>


            </div> */}
            {(isPlayingDouble || isPlayingSingle) && (
              <div className="d-flex flex-row mb-4 ">
                <MDBCol>
                <Dropdown options = {paymentOptions} handleClick={(option)=>{setPayment(option); changePaymentMethod(option)}} value={payment}/>
                </MDBCol>
                {isBankTransfer && (
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Payment Slip"
                      labelClass="text-white"
                      name="paymentSlip"
                      type="text"
                      value={isPlayingSingle ? single.paymentSlip : double.paymentSlip}
                      onChange={changePaymentSlip}
                      contrast
                    />
                  </MDBCol>
                )}
              </div>
            )}

            <MDBBtn className={`${Styles["btn"]}`} type="submit" hidden={!isPlayingDouble && !isPlayingSingle}>
              Register
            </MDBBtn>
          </Form>
        </MDBContainer>
      </div>
    </div>
  );
};

export default RegisterAll;
