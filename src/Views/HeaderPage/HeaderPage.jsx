import React, { useState, useEffect } from "react";
import styles from "./headerPage.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { indigo } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Button, Dropdown } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const HeaderPage = () => {
  const [anchor, setAnchor] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElmobile, setAnchorElmobile] = useState(null);
  const open = Boolean(anchorEl);
  const openRegister = Boolean(anchor);
  const openRegisterMobile = Boolean(anchorMobile);
  const openmobile = Boolean(anchorElmobile);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickRegister = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClickRegisterMobile = (event) => {
    setAnchorMobile(event.currentTarget);
  };
  const handleClickMobile = (event) => {
    setAnchorElmobile(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseRegister = () => {
    setAnchor(null);
  };
  const handleCloseRegisterMobile = () => {
    setAnchorMobile(null);
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
            <img
              src={require("../../assests/images/umisf_logo.png")}
              alt={"logo"}
            ></img>
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
                onClick={handleClickRegister}
                size="small"
                aria-controls={openRegister ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openRegister ? "true" : undefined}
                className={`${styles["navBarItemLink"]}`}
              >
                <li className={`${styles["register"]}`}>Register</li>
              </IconButton>

              <Menu
                anchorEl={anchor}
                id="account-menu"
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
                {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/PfkoFV6MMYJCiHDT8"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/U2jRwsrikJCcSiQk6"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Corporate Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/DgrfRGgzWo4ckcBd9"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Novices
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/1kd9i4M4dEk4GJ3K8"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/GCGVnwN7psXFNYeu6"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://forms.gle/FYbfNWxdFg8oj5UM9"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>

            <React.Fragment>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className={`${styles["navBarItemLink"]}`}
              >
                <li className={`${styles["register"]}`}>Entry Forms</li>
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
                    href="https://drive.google.com/file/d/1ArnLLGwQ3P9kwuXC1heatjdyIksoWGAz/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Age Group
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1Chbl3cAeLobckwgvxZsn6NCFPStbTSxx/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Corporate Team
                  </a>
                </MenuItem>
                <MenuItem onClick={handleCloseRegister}>
                  <a
                    href="https://drive.google.com/file/d/1Bdv39X_VhrOB_WWgX5QQoeaS3aKig1xD/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    Novices
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/15DYc-2P1YfxLgqvAlb24KD7fOwHE2gU3/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Individual
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1J_jp_JV92-RdWx3OIWI2dztU512gZvkw/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Staff
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a
                    href="https://drive.google.com/file/d/1rib_sQQbHAtGlFZDYSSX5xznibua_u7l/view?usp=drive_link"
                    target="_blank"
                    className={`${styles["drop-down-item"]}`}
                  >
                    University Team
                  </a>
                </MenuItem>
              </Menu>
            </React.Fragment>
            {/* <a href="/draws" className={`${styles["navBarItemLink"]}`}>
              <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
            </a> */}
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
      <div className={`${styles["mini-nav"]}`} onClick={loadSideBar}>
        <i
          id="toggle-btn"
          className={`${styles["toggle-button"]} bx bx-menu`}
        ></i>
        <span className={`${styles["toggle-text"]}`}> Menu</span>
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
              onClick={handleClickRegisterMobile}
              size="small"
              aria-controls={openRegisterMobile ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openRegisterMobile ? "true" : undefined}
              className={`${styles["register-dropdown"]}`}
            >
              <li className={`${styles["register"]}`}>Register</li>
            </IconButton>

            <Menu
              anchorEl={anchorMobile}
              id="account-menu"
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
              {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/PfkoFV6MMYJCiHDT8"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Age Group
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/U2jRwsrikJCcSiQk6"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Corporate Team
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegister}>
                <a
                  href="https://forms.gle/DgrfRGgzWo4ckcBd9"
                  target="_blank"
                  className={`${styles["drop-down-item"]}`}
                >
                  Novices
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/1kd9i4M4dEk4GJ3K8"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Individual
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/GCGVnwN7psXFNYeu6"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Staff
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegisterMobile}>
                <a
                  href="https://forms.gle/FYbfNWxdFg8oj5UM9"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Team
                </a>
              </MenuItem>
            </Menu>
          </React.Fragment>

          <React.Fragment>
            <IconButton
              onClick={handleClickMobile}
              size="small"
              aria-controls={openmobile ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openmobile ? "true" : undefined}
              className={`${styles["register-dropdown"]}`}
              style={{ marginTop: "20px" }}
            >
              <li className={`${styles["register"]}`}>Entry Forms</li>
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
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* <MenuItem onClick={handleClose}>
                  <a href="#" className={`${styles["drop-down-item"]}`}>
                    Player
                  </a>
                </MenuItem> */}

              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="https://drive.google.com/file/d/1ArnLLGwQ3P9kwuXC1heatjdyIksoWGAz/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Age Group
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="https://drive.google.com/file/d/1Chbl3cAeLobckwgvxZsn6NCFPStbTSxx/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  Corporate Team
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseRegister}>
                <a
                  href="https://drive.google.com/file/d/1Bdv39X_VhrOB_WWgX5QQoeaS3aKig1xD/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item"]}`}
                >
                  Novices
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="https://drive.google.com/file/d/15DYc-2P1YfxLgqvAlb24KD7fOwHE2gU3/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Individual
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="https://drive.google.com/file/d/1J_jp_JV92-RdWx3OIWI2dztU512gZvkw/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Staff
                </a>
              </MenuItem>
              <MenuItem onClick={handleCloseMobile}>
                <a
                  href="https://drive.google.com/file/d/1rib_sQQbHAtGlFZDYSSX5xznibua_u7l/view?usp=drive_link"
                  target="_blank"
                  className={`${styles["drop-down-item-mobile"]}`}
                >
                  University Team
                </a>
              </MenuItem>
            </Menu>
          </React.Fragment>
          
          {/* <a href="/draws" className={`${styles["minNavLink"]}`}>
            <li className={`${styles["navBarItem"]}`}>Draws and Entries</li>
          </a> */}
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
