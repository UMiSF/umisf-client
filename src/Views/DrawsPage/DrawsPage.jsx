import React from "react";
import Header from "../HeaderPage/HeaderPage";
import styles from "./drawsPage.module.css";

const DrawsPage = () => {
  const draws = [
    {
      name: "Age Group",
      label: "Draws & Schedule",
      url: "https://docs.google.com/spreadsheets/d/1ljrlKdtYVsAvAYbcDrgcwb8tRVc_kwdc8IpWT-MOtDI/edit?gid=992639896#gid=992639896",
    },
    {
      name: "University Individual",
      label: "Draws & Schedule",
      url: "https://docs.google.com/spreadsheets/d/1l1gxYxIHH1z6NkmlTQqq8zNo1L7lCwJ_nFf6-oPEDH4/edit?usp=drivesdk",
    },
    // --- Future: uncomment and set url when published ---
    // { name: "University Team", label: "Draws & Schedule", url: "https://docs.google.com/spreadsheets/d/17kvE89K3FS6NTxEf2qb_tUpXoS8ac8sIrmulSxPqsAU/edit?usp=sharing" },
    // { name: "University Staff", label: "Draws & Schedule", url: "https://docs.google.com/spreadsheets/d/1r6T6vozhdqDMiDk7HjqMXUeDtvAxaGxa/edit?usp=sharing" },
    // { name: "Club Team", label: "Draws & Schedule", url: "#" },
    // { name: "Novices", label: "Draws & Schedule", url: "https://docs.google.com/spreadsheets/d/1Xmy84F2Uk1Gk7F2LU1B45e_pY0CEEyF1/edit?usp=sharing" },
    // { name: "Invitational School", label: "Draws & Schedule", url: "#" },
  ];

  return (
    <>
      <div className={`${styles["headerDiv"]}`}>
        <Header />

        <div className={`${styles["UMiSF-container"]}`}>
          <h1>Draws and Entries</h1>
        </div>
      </div>
      <div className={`${styles["draws-entries--container"]}`}>
        <div className={`${styles["tournament-schedule"]}`}>
          <img src={require("../../assests/images/point.png")} alt="" />
          {"Kindly refer to the draws and "}
          <a href="https://drive.google.com/file/d/1IQSIb67q2-XdCo49q5DbZ-LzddAUvK63/view?usp=drive_link" target="_blank" rel="noreferrer">
            Guidelines (PDF)
          </a>
          {" for your perusal."}
          <p>
            Location : MBA Badminton Courts, Colombo
          </p>
        </div>
        <div className={`${styles["draws-container"]}`}>
          <div className={`${styles["title"]}`}>Draws & Schedule</div>
          <p className={styles["draws-note"]}>
            Age Group and University Individual draws and schedules are available below.
          </p>
          <div className={`${styles["tiles"]} row`}>
            {draws.map((draw, index) => (
              <div key={index} className={`${styles["tile"]} col-lg-3 col-md-4 col-sm-12`}>
                <div className={`${styles["tile-data"]}`}>
                  <p>{draw.name}</p>
                </div>
                <div className={`${styles["tile-pdf"]}`}>
                  <a href={draw.url} target="_blank" rel="noreferrer">
                    View {draw.label || `${draw.name} draws`}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {draws.length == 0 ? (
        <NotAvailablePage publishedDate={publishedDate} />
      ) : (
        <div className={`${styles["content-container"]}`}>
          <Grid container>
            <Grid item container m={2} justifyContent="center">
              <Card variant="elevation" elevation={3} sx={{ overflow: "auto", display: "flex" }}>
                <Draw rounds={rounds} />
              </Card>
            </Grid>
            <Footer />
          </Grid>
        </div>
      )} */}
    </>
  );
};

export default DrawsPage;
