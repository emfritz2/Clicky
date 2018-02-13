import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props =>
<div
    className="card click-item"
    style={{
      backgroundImage: `url("https://naldzgraphics.net/wp-content/uploads/2012/02/30-little-pattern.jpg")`
    }}
  >

  <div
    className="card click-item"
    style={{
      backgroundImage: `url("http://blogule.com/wp-content/uploads/2017/04/black-and-white-pattern-clipartfox-black-and-white-pattern-1.jpeg")`
    }}
  >
    <div
    className="card click-item"
    style={{
      backgroundImage: `url("https://i.pinimg.com/736x/87/71/2d/87712ddd3c1107e2df5d41e88eb1df90--monochrome-pattern-stripe-pattern.jpg")`
    }}
  >
  </div>
  </div>
</div>

export default Card;
