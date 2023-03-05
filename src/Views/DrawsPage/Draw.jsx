import { Button, Grid, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { createTheme } from "@mui/material/styles";
import { color, display } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // extra small screen sizes
      sm: 600, // small screen sizes
      md: 960, // medium screen sizes
      lg: 1280, // large screen sizes
      xl: 1920, // extra large screen sizes
    },
  },
});

export default function Draw(props) {
  const { rounds } = props;
  const [titleIndex, setTitleIndex] = useState(0);

  const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not

    // mobileBreakpoint is required to be passed down to a seed
    return (
      //TODO - check seed and seedItem
      <Seed
        mobileBreakpoint={breakpoint}
        style={{ fontSize: 12, width: "100%" }}
      >
        <SeedItem style={{ backgroundColor: "#040924", width: "100%" }}>
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                width: "100%",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100vw",
              },
            }}
          >
            <SeedTeam
              style={{
                width: "100%",
                backgroundColor:
                  seed.winner === seed.teams[0]?.name ? "#495283" : "#1a1d2e",
              }}
            >
              {seed.winner ? (
                <Grid container>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "4.5vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "40vw",
                      },
                      borderRightStyle: "solid",
                      borderColor: "#adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.teams[0]?.name || "NO TEAM "}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                      borderRightStyle: "solid",
                      borderColor: " #adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[0][0]}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                      borderRightStyle: "solid",
                      borderColor: " #adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[0][1]}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[0][2]}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid item container sx={{ width: "100%" }}>
                  <Typography sx={{ fontSize: "11px" }}>
                    {seed.teams[0]?.name || "NO TEAM "}
                  </Typography>
                </Grid>
              )}
            </SeedTeam>

            <SeedTeam
              style={{
                width: "100%",
                backgroundColor:
                  seed.winner === seed.teams[1]?.name ? "#495283" : "#1a1d2e",
              }}
            >
              {seed.winner ? (
                <Grid container>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "4.5vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "40vw",
                      },
                      borderRightStyle: "solid",
                      borderColor: " #adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.teams[1]?.name || "NO TEAM "}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                      borderRightStyle: "solid",
                      borderColor: " #adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[1][0]}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                      borderRightStyle: "solid",
                      borderColor: " #adb3d1",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[1][1]}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        width: "2vw",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "10vw",
                      },
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "11px" }}>
                      {seed.score[1][2]}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid item container sx={{ width: "100%" }}>
                  <Typography sx={{ fontSize: "11px" }}>
                    {seed.teams[1]?.name || "NO TEAM "}
                  </Typography>
                </Grid>
              )}
            </SeedTeam>
          </Box>
        </SeedItem>
      </Seed>
    );
  };

  const titles = rounds.map((round) => round.title);

  function handleTitleChange(index) {
    setTitleIndex(index);
  }
  return (
    <Box sx={{ width: "80%" }}>
      <Grid
        sx={{ display: { md: "none", xs: "" } }}
        item
        container
        justifyContent="center"
        mt={2}
      >
        {titles.map((title, index) => (
          <Button
            sx={{ backgroundColor: "#1a1d2e" }}
            variant={index === titleIndex ? "contained" : "outlined"}
            key={index}
            onClick={(e) => handleTitleChange(index)}
          >
            {title}
          </Button>
        ))}
      </Grid>
      <Grid container xs={12} mt={3} sx={{ marginX: "4" }}>
        <Bracket
          rounds={rounds}
          renderSeedComponent={CustomSeed}
          swipeableProps={{
            enableMouseEvents: true,
            animateHeight: true,
            index: titleIndex,
            onChangeIndex: setTitleIndex,
          }}
          roundTitleComponent={(title, roundIndex) => {
            return (
              <Typography variant="body" color="white" align="left" bgcolor="back">
                {title}
              </Typography>
            );
          }}
          mobileBreakpoint={900}
        />
      </Grid>
    </Box>
  );
}
