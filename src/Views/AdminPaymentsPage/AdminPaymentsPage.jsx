import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import styles from "./adminPaymentsPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminPaymentsPage = () => {
  const [paymentDetails, setPaymentDetails] = useState([
    {
      id: 1,
      paymentMethod: "On-site",
      paymentApprover: "Poorna Cooray",
      paymentConfirmed: "Not Confirmed",
    },
    {
      id: 2,
      paymentMethod: "Bank Transfer",
      paymentSlip: "slip.pdf",
      paymentApprover: "Poorna Cooray",
      paymentConfirmed: "Confirmed",
    },
    {
      id: 3,
      paymentMethod: "On-site",
      paymentApprover: "Poorna Cooray",
      paymentConfirmed: "Declined",
    },
    {
      id: 4,
      paymentMethod: "On-site",
      paymentApprover: "Poorna Cooray",
      paymentConfirmed: "Confirmed",
    },
    {
      id: 5,
      paymentMethod: "Bank Transfer",
      paymentSlip: "slip.pdf",
      paymentApprover: "Poorna Cooray",
      paymentConfirmed: "Not Confirmed",
    },
  ]);

  const paymentsTypes = ["Single", "Double", "Company", "University"];

  const filters = ["All", "Confirmed", "Declined", "Not Confirmed"];

  const [selectedPaymentType, setSelectedPaymentType] = useState("Single");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [filteredDetails, setFilteredDetails] = useState(paymentDetails);

  const selectPaymentType = (type) => {
    setSelectedPaymentType(type);

    //load recoeds from database
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);

    if (filter == "All") {
      setFilteredDetails(paymentDetails);
    } else {
      setFilteredDetails(paymentDetails.filter((record) => record["paymentConfirmed"] == filter));
    }
  };

  return (
    <div className={`${styles["tournament-container"]}`}>
      <ProfileHeader user_type={"admin"} />
      <ProfileNavbar page="payments" />

      <div className={`${styles["main-title"]}`}>
        <a href="/admin/payments">Payments</a>
        <img src={require("../../assests/images/forward_arrow.png")} alt="" /> {selectedPaymentType}
        <img src={require("../../assests/images/forward_arrow.png")} alt="" /> {selectedFilter}
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
          {paymentsTypes.map((type, index) => (
            <Button
              onClick={() => selectPaymentType(type)}
              sx={{ fontSize: 15, fontFamily: "Hind" }}
              key={index}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
          {filters.map((filter, index) => (
            <Button
              onClick={() => selectFilter(filter)}
              sx={{ fontSize: 13, fontFamily: "Hind" }}
              key={index}
            >
              {filter}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className={`${styles["tool-bar"]}`}>
        <a href={"/admin/payments/add-new-payment"}>
          <img src={require("../../assests/images/add.png")} alt="" /> Add new payment
        </a>
      </div>
      <div className={`${styles["folder-container"]}`}>
        {filteredDetails.length === 0 ? (
          <div style={{ fontFamily: "Hind", fontSize: "18px", textAlign: "center" }}>
            {" "}
            No payments have been recorded yet under this tab.
          </div>
        ) : (
          <div>
            <div className={`${styles["table-headers"]}`}>
              <div className={`${styles["table-header"]}`} style={{ width: "7%" }}>
                ID
              </div>
              <div className={`${styles["table-header"]}`}>Payment Method</div>
              <div className={`${styles["table-header"]}`}>Payment Slip</div>
              <div className={`${styles["table-header"]}`}>Payment Approver</div>
              <div className={`${styles["table-header"]}`}>Confirmation Status</div>
              <div className={`${styles["table-header"]}`} style={{ width: "7%" }}>
                {}
              </div>
            </div>
            <div>
              {filteredDetails.map((payment, index) => (
                <Link to="/admin/payments/edit-payment" state={payment}>
                  <div className={`${styles["table-body"]}`}>
                    <div className={`${styles["table-row"]}`} style={{ width: "7%" }}>
                      {payment.id}
                    </div>
                    <div className={`${styles["table-row"]}`}>{payment.paymentMethod}</div>
                    <div className={`${styles["table-row"]}`}>
                      {payment.paymentSlip ? (
                        <img
                          src={require("../../assests/images/pdf.png")}
                          alt=""
                          style={{ width: "15px", marginRight: "10px" }}
                        />
                      ) : (
                        " - "
                      )}
                      {payment.paymentSlip}
                    </div>
                    <div className={`${styles["table-row"]}`}>{payment.paymentApprover}</div>
                    <div className={`${styles["table-row"]}`} style={{ alignItems: "center" }}>
                      {payment.paymentConfirmed === "Confirmed" && (
                        <img
                          src={require(`../../assests/images/correct.png`)}
                          alt=""
                          style={{ width: "25px", marginLeft: "10%" }}
                        />
                      )}

                      {payment.paymentConfirmed === "Declined" && (
                        <img
                          src={require(`../../assests/images/wrong.png`)}
                          alt=""
                          style={{ width: "25px" ,marginLeft: "10%" }}
                        />
                      )}
                      {payment.paymentConfirmed === "Not Confirmed" ? payment.paymentConfirmed : ""}
                    </div>
                    <div className={`${styles["table-header"]}`} style={{ width: "7%" }}>
                      {" "}
                      <img
                        src={require("../../assests/images/double_arrows.png")}
                        alt=""
                        style={{ width: "15px" }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPaymentsPage;
