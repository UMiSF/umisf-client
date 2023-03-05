import {
  Card,
  Box,
  Grid,
  CardContent,
  Button,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import React from "react";
import Draw from "./Draw";
import Styles from "./DrawsPage.module.css";

const DrawsPage = () => {
  const [open, setOpen] = React.useState(false);
  const [successful, setSuccessful] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessful(false);
    setOpen(false);
  };

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
          winner: "Team C",
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

  return (
    <div className={Styles["page"]}>
      <Grid container>
        <Grid item container m={2} justifyContent="center">
          <div className={Styles["header"]}>Competition Draws</div>
        </Grid>
        <Grid item container justifyContent="center">
          <div className={Styles["header-line-container"]}>
            <div className={Styles["header-line"]}>School</div>
            <div className={Styles["header-line"]}> {"|"}</div>
            <div className={Styles["header-line"]}> Single</div>
            <div className={Styles["header-line"]}> {"|"}</div>
            <div className={Styles["header-line"]}> Under 19 </div>
          </div>
        </Grid>
        <Grid item container justifyContent="center">
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Draw rounds={rounds} />
          </Box>
        </Grid>
        <Grid item container marginRight={10} justifyContent="right">
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            onClick={handleClick}
          >
            Download PDF
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {successful ? (
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                <Typography sx={{ fontSize: "1vw" }}>
                  Download successful!
                </Typography>
              </Alert>
            ) : (
              <Alert
                severity="error"
                onClose={handleClose}
                sx={{ width: "100%" }}
              >
                <Typography sx={{ fontSize: "1vw" }}>
                  Download failed!
                </Typography>
              </Alert>
            )}
          </Snackbar>
        </Grid>
      </Grid>
    </div>
  );
};

export default DrawsPage;
