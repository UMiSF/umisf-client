import React from "react";
import Header from "../HeaderPage/HeaderPage";
import styles from "./drawsPage.module.css";

const DrawsPage = () => {
  const entries = [
    {
      name: "Age Group",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "University Individual",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "University Staff",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "University Team",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "Novices",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "Club Team",
      entriess: 0,
      pdf: "#",
    },
    {
      name: "Invitational School",
      entriess: 0,
      pdf: "#",
    },
  ];

  const draws = [
    {
      name: "Age Group",
      pdf: "https://docs.google.com/spreadsheets/d/1McZ_9bKe7DqFSqr4J1jrPRyPaBbo8DTP/edit?usp=sharing&ouid=108516483365954862566&rtpof=true&sd=true",
    },
    {
      name: "University Team",
      pdf: "https://docs.google.com/spreadsheets/d/17kvE89K3FS6NTxEf2qb_tUpXoS8ac8sIrmulSxPqsAU/edit?usp=sharing",
    },
    {
      name: "University Individual",
      pdf: "https://docs.google.com/spreadsheets/d/11wLn0E6_45mJ3gZP82KIS8ivyyDZt9y9/edit?usp=sharing&ouid=108516483365954862566&rtpof=true&sd=true",
    },
    {
      name: "University Staff",
      pdf: "https://docs.google.com/spreadsheets/d/1r6T6vozhdqDMiDk7HjqMXUeDtvAxaGxa/edit?usp=sharing&ouid=108516483365954862566&rtpof=true&sd=true",
    },
    {
      name: "Club Team",
      pdf: "#",
    },
    {
      name: "Novices",
      pdf: "https://docs.google.com/spreadsheets/d/1Xmy84F2Uk1Gk7F2LU1B45e_pY0CEEyF1/edit?usp=sharing&ouid=108516483365954862566&rtpof=true&sd=true",
    },
    {
      name: "Invitational School",
      pdf: "#",
    },
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
          {"Kindly refer to the draws "}
{/*           <a href="#" target="_blank">
            Tournament Schedule
          </a> */}
          {" for your perusal."}
          <p>
            Location : New Gymnasium University of Moratuwa - Katubedda &
            New Aspire Badminton & Activity Center - Ratmalana
          </p>
        </div>
        <div className={`${styles["entries-container"]}`}>
          <div className={`${styles["title"]}`}>Entries</div>
          <div className={`${styles["tiles"]} row`}>
            {entries.map((entry, index) => (
              <div className={`${styles["tile"]} col-lg-3 col-md-4 col-sm-12`}>
                <div className={`${styles["tile-data"]}`}>
                  {/* <p>{`Group name: ${entry.name}`}</p> */}
                  <p>{`${entry.name}`}</p>
                </div>
                <div className={`${styles["tile-pdf"]}`}>
                  <a
                    href={entry.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >{`${entry.name} entries`}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles["draws-container"]}`}>
          <div className={`${styles["title"]}`}>Draws</div>
          <div className={`${styles["tiles"]} row`}>
            {draws.map((draw, index) => (
              <div className={`${styles["tile"]} col-lg-3 col-md-4 col-sm-12`}>
                <div className={`${styles["tile-data"]}`}>
                  {/* <p>{`Group name: ${draw.name}`}</p> */}
                  <p>{`${draw.name}`}</p>
                </div>
                <div className={`${styles["tile-pdf"]}`}>
                  <a href={draw.pdf} target="_blank" rel="noreferrer">{`${draw.name} draws`}</a>
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
