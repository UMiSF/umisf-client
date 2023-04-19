import React, { useState, useEffect } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Button, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const HeaderPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElmobile, setAnchorElmobile] = useState(null);
  const open = Boolean(anchorEl);
  const openmobile = Boolean(anchorElmobile);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickMobile = (event) => {
    setAnchorElmobile(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseMobile = () => {
    setAnchorElmobile(null);
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
                {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1yWmGIIIdsH4youcA55p1TC0g2slLXg82/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1ikoKcUUOXPqfEC7xqsKi3HNP1ZRchY8E/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1-xE8PS5dzhggxwio9Svl1JWyJB3FmAvk/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1cgcBiWDr9u6SuuOtzb0DslS9UlNb24fb/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1l25KUoUstYLZZ1Kpe6aUN9edPoPaLYh3/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Corporate Team
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
            {/* <a href="/developers" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Developers</li>
            </a> */}
            <a href="/contact-us" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Contact Us</li>
            </a>
            {/* <a href="/login" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Login</li>
            </a> */}
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
      </div>
      <div id="navSideBar" className={`${styles["navSideBar"]}`}>
        <ul>
          <a href="/" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Home</li>
          </a>
          <a href="/about" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>About</li>
          </a>
          <React.Fragment>
              <IconButton
                onClick={handleClickMobile}
                size="small"
                aria-controls={openmobile ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openmobile ? "true" : undefined}
                className={`${styles["register-dropdown"]}`}
              >
                <li className={`${styles["register"]}`}>Register</li>
              </IconButton>

              <Menu
                anchorEl={anchorElmobile}
                id="account-menu"
                open={openmobile}
                onClose={handleCloseMobile}
                onClick={handleCloseMobile}
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
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

                <MenuItem onClick={handleCloseMobile}>
                  <a
                    href="https://drive.google.com/file/d/1yWmGIIIdsH4youcA55p1TC0g2slLXg82/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item-mobile"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseMobile}>
                  <a
                    href="https://drive.google.com/file/d/1ikoKcUUOXPqfEC7xqsKi3HNP1ZRchY8E/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item-mobile"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseMobile}>
                  <a
                    href="https://drive.google.com/file/d/1-xE8PS5dzhggxwio9Svl1JWyJB3FmAvk/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item-mobile"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseMobile}>
                  <a
                    href="https://drive.google.com/file/d/1cgcBiWDr9u6SuuOtzb0DslS9UlNb24fb/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item-mobile"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseMobile}>
                  <a
                    href="https://drive.google.com/file/d/1l25KUoUstYLZZ1Kpe6aUN9edPoPaLYh3/view?usp=share_link"
                    target="_blank"
                    className={`${styles["drop-down-item-mobile"]}`}
                  >
                    Corporate Team
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>
          <a href="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws</li>
          </a>
          <a href="/photos" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Gallery</li>
          </a>
          {/* <a href="/developers" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Developers</li>
          </a> */}
          <a href="/contact-us" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Contact Us</li>
          </a>
          {/* <a href="/login" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Login</li>
          </a> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
