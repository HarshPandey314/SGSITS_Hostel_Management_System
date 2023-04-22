import React from "react";
import "../styles/ComplaintElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const ComplaintElement = (props) => {
  const { index, room, hostelbuilding, subject, complaint, status } = props;
  function handleStatus() {
    return status == 1 ? "Pending" : "Resolved";
  }
  let parity = 1;
  if (index % 2 == 1) {
    parity = 0;
  }
  return (
    <div className="card--container">
      <div className={`card--status--title--box bgColor${parity}`}>
        <div className="card--title--items card--title--sn" id="status--bullet">
          <FontAwesomeIcon icon={faCircle} className={`bullet${status}`} />
        </div>
        <div className="card--title--items card--title--room">{room}</div>
        <div className="card--title--items card--title--hbuilding">
          {hostelbuilding}
        </div>
        <div className="card--title--items card--title--subject">{subject}</div>
        <div className="card--title--items card--title--complaint">
          {complaint}
        </div>
        <div
          className={`card--title--items card--title--status bullet${status}`}
        >
          {handleStatus()}
        </div>
      </div>
    </div>
  );
};

export default ComplaintElement;
