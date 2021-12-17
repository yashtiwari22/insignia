import React from "react";
import "./HeroSection.css";
import cloud from "../../image/cloud.svg";

function HeroSection() {
  return (
    <div className="container-medium">
      <div className="heroSection">
        <div className="left2">
          <h1 className="top">Save your data storage here.</h1>
          <p className="between">
            Insignia is a data storage area that has been tested for security,
            so you can store your data here safely but not be afraid of being
            stolen by others.
          </p>
          <h3 className="bottom">Learn more</h3>
        </div>
        <div className="right2">
          <img
            src={cloud}
            alt="image"
            style={{ width: "500px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
