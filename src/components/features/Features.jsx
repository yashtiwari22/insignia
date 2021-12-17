import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Features.css";
import Item from "./Item";
import clipboard from "../../image/clipboard.svg";
import printer from "../../image/printer.svg";
import securitycheck from "../../image/securitycheck.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
];
function Features() {
  const [items, setItems] = useState([
    {
      img: clipboard,
      title: "Search Data",
      content:
        "Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
    },
    {
      img: printer,
      title: "Print Out",
      content:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    },
    {
      img: securitycheck,
      title: "Security Code",
      content:
        "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    },
  ]);

  return (
    <div className="container-medium">
      <div className="carousel-wrapper">
        <div className="heading">Features</div>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>
              <div className="feature">
                <img src={item.img} className="feature-img" />
                <div className="feature-desc">
                  <h2 className="title">{item.title}</h2>
                  <p className="content">{item.content}</p>
                  <div className="learnmore">
                    <h2>Learn More</h2>
                    <ArrowForwardIcon style={{ color: "#9C69E2" }} />
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Features;
