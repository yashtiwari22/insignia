import React from "react";
import "./About.css";
import security from "../../image/security.svg";
function About() {
  return (
    <div className="container-medium">
      <div className="about2">
        <div className="left3">
          <img src={security} alt="image" style={{ width: "300px" }} />
        </div>
        <div className="right3">
          <h1 className="top2">We are a high-level data storage bank</h1>
          <p className="bottom2">
            The place to store various data that you can access at any time
            through the internet and where you can carry it. <br />
            This very flexible storage area has a high level of security. To
            enter into your own data you must enter the password that you
            created when you registered in this Data Warehouse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
