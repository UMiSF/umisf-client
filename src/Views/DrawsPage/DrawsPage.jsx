import { Card, Grid } from "@mui/material";
import React, { useState } from "react";
import Draw from "./Draw";
import Header from "../HeaderPage/HeaderPage";
import Footer from "../HomePage/Footer/footer";
import styles from "./drawsPage.module.css";
import NotAvailablePage from "../../common/DrawsNotAvailablePage/NotAvailablePage";

const DrawsPage = () => {
  const [publishedDate, setPublishedDate] = useState("17th of May 2023");
  const rounds = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
          score: [
            [12, 23, 23],
            [23, 5, 21],
          ],
          winner: "Team A",
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
          score: [
            [15, 23, 13],
            [23, 5, 23],
          ],
          winner: "Team D",
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team E" }, { name: "Team F" }],
          score: [
            ["", "", ""],
            ["", "", ""],
          ],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [{ name: "Team G" }, { name: "Team H" }],
          score: [
            ["", "", ""],
            ["", "", ""],
          ],
        },
      ],
    },
    {
      title: "Round two",
      seeds: [
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team D" }],
          score: [
            ["", "", ""],
            ["", "", ""],
          ],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [{ name: "TBD" }, { name: "TBD" }],
          score: [
            ["", "", ""],
            ["", "", ""],
          ],
        },
      ],
    },
    {
      title: "Round three",
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: "TBD" }, { name: "TBD" }],
          score: [
            ["", "", ""],
            ["", "", ""],
          ],
        },
      ],
    },
  ];

  const entries = [
    {
      name: "Age Group",
      entriess: 32,
      pdf: "https://docs.google.com/spreadsheets/d/14ru7ELe31xdZ7sx92n8bOaJ92DW_wcuW9ef2TeGcO0Q/edit?usp=sharing",
    },
    {
      name: "University Individual",
      entriess: 32,
      pdf: "https://docs.google.com/spreadsheets/d/1ajskluZjY3TTH-KYxI5pSDSWIncoZEizvzby0MbkYk0/edit?usp=sharing",
    },
    {
      name: "University Staff",
      entriess: 11,
      pdf: "#",
    },
    {
      name: "Team Events",
      entriess: 400,
      pdf: "#",
    },
    {
      name: "Novices",
      entriess: 64,
      pdf: "https://docs.google.com/spreadsheets/d/1ARfU-V5DV52QVro1kfBpxWC04kdtWAtzyOEUGRKY6g4/edit?usp=sharing",
    },
  ];

  const draws = [
    {
      name: "Age Group",
      pdf: "https://docs.google.com/spreadsheets/d/1TN2peek-HyHEJ7xzB4KBz4IVq-znbxk-72z3M-3G6cE/edit?usp=sharing",
    },
    // {
    //   name: "University Team",
    //   pdf: "slip.pdf",
    // },
    {
      name: "University Individual",
      pdf: "#",
    },
    {
      name: "University Staff",
      pdf: "#",
    },
    {
      name: "Corporate Team",
      pdf: "#",
    },
    {
      name: "Novices",
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
          <img src={require("../../assests/images/point.png")} />
          {"Kindly refer to the enclosed "}
          <a href="#" target="_blank">
            Tournament Schedule
          </a>
          {" for your perusal."}
          <p>Location : ONLY at University Gymnasium</p>
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
                  <a href={draw.pdf} target="_blank">{`${draw.name} draws`}</a>
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
