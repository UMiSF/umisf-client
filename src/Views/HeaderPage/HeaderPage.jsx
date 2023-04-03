import React, { useState, useEffect } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from '@mui/material/colors';
import IconButton from "@mui/material/IconButton";


const HeaderPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const color = indigo[900];
  const loadSideBar = () => {
    let display = document.querySelector("#navSideBar").style.display;
    display === "block"
      ? (document.querySelector("#navSideBar").style.display = "none")
      : (document.querySelector("#navSideBar").style.display = "block");
  };

  return (
    <div>
      <div className={`${styles["navBarList"]}`}>
        <img
          src={require("../../assests/images/umisf_logo.png")}
          alt={"logo"}
        ></img>

        <ul>
          <a href="/" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </a>
          <a href="/about" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </a>
          <a href="/contact-us" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
          </a>
          <a href="/photos" className={`${styles["navBarItemLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Gallery</li>
          </a>

          <React.Fragment>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className={`${styles["navBarItemLink"]}`}
            >
              <li className={`${styles["register"]}`}>Register</li>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
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
              <MenuItem onClick={handleClose} >
                <a
                  href="/register/player"
                  className={`${styles["drop-down-item"]}`}
                >
                  Player
                </a>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <a
                  href="/register/single-double"
                  className={`${styles["drop-down-item"]}`}
                >
                  Single & Double
                </a>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>
                <a
                  href="/register/double"
                  className={`${styles["drop-down-item"]}`}
                >
                  Double
                </a>
              </MenuItem> */}
              <MenuItem onClick={handleClose}>
                <a
                  href="/register/university"
                  className={`${styles["drop-down-item"]}`}
                >
                  University
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="/register/company"
                  className={`${styles["drop-down-item"]}`}
                >
                  Company
                </a>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </ul>
      </div>
      {/* minimized side nav bar */}
      <i
        id="toggle-btn"
        className={`${styles["toggle-button"]} bx bx-menu`}
        onClick={loadSideBar}
      ></i>
      <img
        id="side-img"
        className={`${styles["side-img"]}`}
        src={require("../../assests/images/umisf_logo.png")}
        alt={"logo"}
      ></img>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/">Home</a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/about">About</a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className={`${styles["navBarItem"]}`}>
            <a href="/photos">Gallery</a>
          </li>
          
          <React.Fragment>
            <IconButton

              onClick={handleClick}
              size="small"
           
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              
            >
              <li className={`${styles["register-mobile"]}`}>Register</li>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
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
              <MenuItem onClick={handleClose} >
                <a
                  href="/register/player"
                  className={`${styles["drop-down-item"]}`}
                >
                  Player
                </a>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <a
                  href="/register/single-double"
                  className={`${styles["drop-down-item"]}`}
                >
                  Single & Double
                </a>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>
                <a
                  href="/register/double"
                  className={`${styles["drop-down-item"]}`}
                >
                  Double
                </a>
              </MenuItem> */}
              <MenuItem onClick={handleClose}>
                <a
                  href="/register/university"
                  className={`${styles["drop-down-item"]}`}
                >
                  University
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="/register/company"
                  className={`${styles["drop-down-item"]}`}
                >
                  Company
                </a>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
