import React from "react";
import  "./DonateCard.css";
import Button from "../../UI/Button/Button";
const DonateCard = (props) => {
    console.log(props.price);
  return (
    <div className="card">
      <div className="img">
        <img src={props.src} alt="child" />
      </div>
      <div className="price">${props.price}</div>
      <div className="lower">
        <p>
          {props.sno}Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis, eos.
        </p>
        <Button>donate</Button>
      </div>
    </div>
  );
};

export default DonateCard;
