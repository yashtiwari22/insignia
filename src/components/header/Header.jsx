import React from "react";
import logo from "../../image/logo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Header.css";
function Header() {
  return (
    <div className="container-medium">
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="logo" />
          <h1>Insignia</h1>
        </div>
        <div className="right">
          <ul className="pages">
            <li className="about">About</li>
            <li style={{ color: "#FFFFFF" }}>Help</li>
            <li style={{ color: "#FFFFFF" }}>Features</li>
            <li style={{ color: "#FFFFFF" }}>Signup</li>
            <li className="requestDemo">
              <h2>Request Demo</h2>
              <ArrowForwardIcon style={{ color: "#9C69E2" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
