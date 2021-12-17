import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Testimonials.css";
import Item2 from "./Item2";
import photo1 from "../../image/photo1.svg";
import photo2 from "../../image/photo2.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const breakPoints = [{ width: 1, itemsToShow: 1 }];
function Testimonials() {
  const [items, setItems] = useState([
    {
      img: photo1,
      name: "John Fang",
      field: "Web Designer",
      content:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    },
    {
      img: photo2,
      name: "Jenny Doe",
      field: "UX Designer",
      content:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    },
  ]);

  return (
    <div className="container-medium">
      <div className="carousel2-wrapper">
        <h1 className="heading">Testimonials</h1>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item2 key={item}>
              <div className="person">
                <img src={item.img} className="person-img" />
                <div className="person-desc">
                  <div className="desc">
                    <h2 className="name">{item.name}</h2>
                    <h3 className="field">{item.field}</h3>
                  </div>
                  <p className="content">{item.content}</p>
                </div>
              </div>
            </Item2>
          ))}
        </Carousel>
      </div>
      <div className="subscribe">
        <div className="sub">
          <h1 className="sub-name">Subscribe !</h1>
          <p className="sub-des">
            Join our newsletter to never miss any latest news.
          </p>
        </div>
        <div className="email">
          <div className="input">
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <h3>Join Us</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
