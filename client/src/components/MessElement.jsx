import React from "react";
import "../styles/MessElement.css";

const MessElement = (props) => {
  const { index, day, breakFast, Lunch, Dinner } = props;
  let parity = 1;
  if (index % 2 == 1) {
    parity = 0;
  }

  return (
    <div className="messCard--container">
      <div
        className={`messCard--status--title--box messCard--bgColor${parity}`}
      >
        <div className="messMenu--title--items title--day">{day}</div>
        <div className="messMenu--title--items title--breakFast">
          {breakFast}
        </div>
        <div className="messMenu--title--items title--Lunch">{Lunch}</div>
        <div className="messMenu--title--items title--Dinner">{Dinner}</div>
      </div>
    </div>
  );
};

export default MessElement;
