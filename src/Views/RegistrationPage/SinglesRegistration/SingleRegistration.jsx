import React, { useState, useEffect } from "react";
import Styles from "./SingleRegistration.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import info from "../../../assests/images/info.gif";
import { Form } from "react-bootstrap";
import { MDBContainer, MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import TableRow from "../Common/AddTablePerf/TableRow";
import { api } from "../../../common/api";
import { CheckCircleTwoTone, ExclamationCircleTwoTone, PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import { Modal } from "antd";
import { message } from "antd";
import ImageUploader from "../Common/imageUploader/ImageUploader";
import { preflightBackendHealth, showBackendDownModal } from "../../../common/backendAvailability";
const SingleRegistration = () => {
  useEffect(() => {
    const playerId = localStorage.getItem("playerId");
    if (!playerId) {
      message.warning(
        "Please register as a player first. Use your Player ID for single/double registrations."
      );
    }
  }, []);

  const [validated, setValidated] = useState(false); //form validation
  const [single, setSingle] = useState({
    player: "",
    ageGroup: "",
    pastPerformance: [],
    paymentMethod: "",
    paymentSlip: "",
  });

  const [slipFileList, setSlipFileList] = useState([]);
  const [, setSlipName] = useState(null);

  const [isBankTransfer, setIsBankTransfer] = useState(false);
  const [pastPerformanceArray, setPastPerformanceArray] = useState([
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
    { name: "", level: "", place: "" },
  ]);
  const { confirm } = Modal;
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      // show loading message
      message.loading("Submitting form...");
    }
  }, [isSubmitting]);

  const showConfirm = (title, success, content) => {
    confirm({
      title: title,
      icon: success ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <ExclamationCircleTwoTone twoToneColor="#eb2f96" />,
      content: content, //TODO: content for success should be displayed properly (create a proper description using the object sent in content) -> VINUL
      onOk() {
        console.log("OK");
        if (success) {
          setIsSubmitting(true);
          api.post(
            "/single/add",
            { singleData: [single] },
            {
              headers: {},
            }
          )
            .then((res) => {
              console.log(res.data);
              message.success(res.data.message);
              console.log("Here");
              setTimeout(() => {
                window.location.reload(true);
              }, 2000);
            })
            .catch((error) => {
              console.log("Error: ", error);
              if (!error?.response) {
                showBackendDownModal();
                return;
              }
              message.error(error.response.data.message);
            });
          setIsSubmitting(false);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "player") {
      setSingle((prevValue) => {
        return { ...prevValue, player: value };
      });
    } else if (name == "ageGroup") {
      setSingle((prevValue) => {
        return { ...prevValue, ageGroup: value };
      });
    } else if (name == "paymentMethod") {
      setSingle((prevValue) => {
        return { ...prevValue, paymentMethod: value };
      });
      console.log("isBankTransfer: ", value == "On-Site");
      value == "Bank Transfer" ? setIsBankTransfer(true) : setIsBankTransfer(false);
    } else if (name == "paymentSlip") {
      setSingle((prevValue) => {
        return { ...prevValue, paymentSlip: value };
      });
    } else if (name.includes("name") || name.includes("level") || name.includes("place")) {
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

  const RemoveanotherRow = () => {
    if (pastPerformanceArray.length > 3) {
      const tmpArray = pastPerformanceArray.slice(0, pastPerformanceArray.length - 1);
      setPastPerformanceArray(tmpArray);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", single);

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
    single.pastPerformance = pastPerformanceArray;

    const ready =
      single.player &&
      single.ageGroup &&
      single.paymentMethod &&
      (single.paymentMethod !== "Bank Transfer" || Boolean(single.paymentSlip));

    if (single.paymentMethod === "Bank Transfer" && !single.paymentSlip) {
      message.error("Please upload your payment slip PDF.");
      e.stopPropagation();
      return;
    }

    if (ready) {
      api
        .get("/player/getByObjectId", { params: { ids: single.player } })
        .then(async (res) => {
          console.log("Result from get player by id", res.data);
          showConfirm("Confirm your data !", true, res.data.toString());
        })
        .catch((error) => {
          const apiMessage =
            error?.response?.data?.message || error?.message || "Error loading player";
          console.log("Error: ", apiMessage);
          if (!error?.response) {
            showBackendDownModal();
            return;
          }
          showConfirm("Error Loading Player !", false, apiMessage);
        });
    }
  }
  return (
    <div className={`${Styles["body"]}`}>
      <HeaderPage />
      <div className={`${Styles["title"]}`}>Event Registration - Singles</div>
      <div className={`${Styles["info-container"]}`}>
        <img src={info} alt="info-icon" className={`${Styles["info-logo"]}`} />
        <div className={`${Styles["info"]}`}>
          Please note that first you have to register as a player through player registration portal before applying for single/double events. The Player ID given upon successful
          registration should be used as Player ID here .
        </div>
      </div>
      <div className={`${Styles["register-form"]}`}>
        {/* <img src={bg} className={`${Styles["bg"]}`}/> */}
        <MDBContainer className="flex">
          <Form noValidate validated={validated} onSubmit={handleSubmit} className={`${Styles["register-form-content"]}`}>
            <div className="d-flex flex-row mb-1 ">
              <MDBCol>
                <MDBInput wrapperClass="mb-1" label="Player ID" labelClass="text-white" name="player" type="text" value={single.player} onChange={handleChange} required contrast />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  wrapperClass="mb-1"
                  label="Age Group"
                  labelClass="text-white"
                  name="ageGroup"
                  type="text"
                  value={single.ageGroup}
                  onChange={handleChange}
                  required
                  contrast
                />
              </MDBCol>
            </div>
            <div className="mb-1">
              <div className="d-flex flex-row mb-1"> Past Performance</div>
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
                return <TableRow perf={perf} index={index} handleChange={handleChange} />;
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
                  value={single.paymentMethod}
                  onChange={handleChange}
                  required
                  contrast
                />
              </MDBCol>
              {isBankTransfer && (
                <MDBCol>
                  <div style={{ marginTop: "8px" }}>
                    <div style={{ color: "white", fontFamily: "Hind", marginBottom: "6px" }}>
                      Payment Slip (PDF)
                    </div>
                    <ImageUploader
                      isfile={true}
                      allowedTypes={["application/pdf"]}
                      accept=".pdf"
                      setImage={(dataUrl) =>
                        setSingle((prev) => ({ ...prev, paymentSlip: dataUrl || "" }))
                      }
                      fileList={slipFileList}
                      setFileList={setSlipFileList}
                      setImageName={setSlipName}
                    />
                  </div>
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
