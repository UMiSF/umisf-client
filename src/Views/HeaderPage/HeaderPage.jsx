import React, { useState, useEffect } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Button, Dropdown, message, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

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
    <div className={`${styles["nav-container"]}`}>
      <div className={`${styles["nav-bars"]}`}>
        <div className={`${styles["navBarList"]}`}>
          <a href="/">
            <img src={require("../../assests/images/umisf_logo.png")} alt={"logo"}></img>
          </a>
          <ul>
            <a href="/" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Home</li>
            </a>
            <a href="/about" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>About</li>
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
                <MenuItem onClick={handleClose}>
                  <a href="/register/player" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <a href="/register/single-double" className={`${styles["drop-down-item"]}`}>
                    Single & Double
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="/register/university" className={`${styles["drop-down-item"]}`}>
                    University
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="/register/company" className={`${styles["drop-down-item"]}`}>
                    Corporate
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>
            <a href="/draws" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Draws</li>
            </a>
            <a href="/photos" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Gallery</li>
            </a>
            <a href="/developers" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Developers</li>
            </a>
            <a href="/contact-us" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>

      {/* minimized side nav bar */}
      <div className={`${styles["mini-nav"]}`}>
      <i
        id="toggle-btn"
        className={`${styles["toggle-button"]} bx bx-menu`}
        onClick={loadSideBar}
      ></i>
      {/* <img
        id="side-img"
        className={`${styles["side-img"]}`}
        src={require("../../assests/images/umisf_logo.png")}
        alt={"logo"}
      ></img> */}
      </div>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <a href="/" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </a>
          <a href="/about" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </a>
          <div class="dropdown">
            <button
            className={`${styles["register-dropdown"]}`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Register
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a class="dropdown-item active" href="/register/player">
                  Player
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/register/single-double">
                  Single & Double
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/register/university">
                  University
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/register/company">
                  Corporate
                </a>
              </li>
            </ul>
          </div>
          <a href="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws</li>
          </a>
          <a href="/photos" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Gallery</li>
          </a>
          <a href="/developers" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Developers</li>
          </a>
          <a href="/contact-us" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
