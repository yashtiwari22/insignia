import React from "react";
import "./Download.css";
import phone from "../../image/phone.svg";
function Download() {
  return (
    <div className="container-medium">
      <div className="download">
        <div className="left4">
          <h1 className="top3">Download Our App</h1>
          <p className="bottom3">
            The place to store various data that you can access at any time
            through the internet and where you can carry it. <br />
            This very flexible storage area has a high level of security. To
            enter into your own data you must enter the password that you
            created when you registered in this Data Warehouse.
          </p>
          <h3 className="download-button">Download</h3>
        </div>
        <div className="right4">
          <img src={phone} alt="image" className="phone" />
        </div>
      </div>
    </div>
  );
}

export default Download;
