import React, { useState } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  const [anchor, setAnchor] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);
  const openRegister = Boolean(anchor);
  const openRegisterMobile = Boolean(anchorMobile);
  const handleClickRegister = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClickRegisterMobile = (event) => {
    setAnchorMobile(event.currentTarget);
  };
  const handleCloseRegister = () => {
    setAnchor(null);
  };
  const handleCloseRegisterMobile = () => {
    setAnchorMobile(null);
  };

  const ageGroupChampionshipFormUrl = "https://forms.gle/rqwRDvPasvF7YE9D6";
  const universityIndividualFormUrl = "https://forms.gle/MEvpUiKo9JFJv8dJ7";
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  return (
    <div className={`${styles["nav-container"]}`}>
      <div className={`${styles["nav-bars"]}`}>
        <div className={`${styles["navBarList"]}`}>
          <Link to="/">
            <img
              src={require("../../assests/images/umisf_logo.png")}
              alt={"logo"}
            ></img>
          </Link>
          <ul>
            <Link to="/" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Home</li>
            </Link>
            <Link to="/about" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>About</li>
            </Link>
            <React.Fragment>
              <IconButton
                onClick={handleClickRegister}
                size="small"
                aria-controls={openRegister ? "register-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openRegister ? "true" : undefined}
                className={`${styles["navBarItemLink"]}`}
              >
                <li className={`${styles["register"]}`}>Register</li>
              </IconButton>

              <Menu
                anchorEl={anchor}
                id="register-menu"
                open={openRegister}
                onClose={handleCloseRegister}
                onClick={handleCloseRegister}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		              >
                    <MenuItem onClick={handleCloseRegister}>
                      <Link
                        to="/register/university"
                        className={`${styles["drop-down-item"]}`}
                      >
                        University Team Registration
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseRegister}>
                      <a
                        href={ageGroupChampionshipFormUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles["drop-down-item"]}`}
                      >
                        Age Group Championship - UMiSF 2026
                      </a>
                    </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href={universityIndividualFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>

            <Link to="/draws" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
            </Link>
            <Link to="/Timeline" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Events</li>
            </Link>
            {/* <a href="/developers" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Developers</li>
            </a> */}
            <Link to="/contact-us" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Contact Us</li>
            </Link>
            {/* <a href="/login" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Login</li>
            </a> */}
          </ul>
        </div>
      </div>

      {/* minimized side nav bar */}
      <div className={`${styles["mini-nav"]}`} onClick={loadSideBar}>
        <i
          id="toggle-btn"
          className={`${styles["toggle-button"]} bx bx-menu`}
        ></i>
        <span className={`${styles["toggle-text"]}`}> Menu</span>
      </div>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <Link to="/" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </Link>
          <Link to="/about" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </Link>
          <React.Fragment>
            <IconButton
              onClick={handleClickRegisterMobile}
              size="small"
              aria-controls={openRegisterMobile ? "register-menu-mobile" : undefined}
              aria-haspopup="true"
              aria-expanded={openRegisterMobile ? "true" : undefined}
              className={`${styles["register-dropdown"]}`}
            >
              <li className={`${styles["register"]}`}>Register</li>
            </IconButton>

            <Menu
              anchorEl={anchorMobile}
              id="register-menu-mobile"
              open={openRegisterMobile}
              onClose={handleCloseRegisterMobile}
              onClick={handleCloseRegisterMobile}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
		              >
                    <MenuItem onClick={handleCloseRegisterMobile}>
                      <Link
                        to="/register/university"
                        className={`${styles["drop-down-item-mobile"]}`}
                      >
                        University Team Registration
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseRegisterMobile}>
                      <a
                        href={ageGroupChampionshipFormUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles["drop-down-item-mobile"]}`}
                      >
                        Age Group Championship - UMiSF 2026
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseRegisterMobile}>
                      <a
                        href={universityIndividualFormUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles["drop-down-item-mobile"]}`}
                      >
                        University Individual
                      </a>
                    </MenuItem>
{/*               <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1rib_sQQbHAtGlFZDYSSX5xznibua_u7l/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Invitational School
                  </a>
                </MenuItem> */}
            </Menu>
          </React.Fragment>
          <Link to="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
          </Link>


          {/* <a href="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
          </a> */}
          <Link to="/Timeline" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Events</li>
          </Link>
          {/* <a href="/developers" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Developers</li>
          </a> */}
          <Link to="/contact-us" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
          </Link>
          {/* <a href="/login" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Login</li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
