import React, { useState } from "react";
import "../styles//ComplaintElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const ComplaintElement = (props) => {
  const {
    index,
    room,
    hostelbuilding,
    subject,
    complaint,
    status,
    changeStatus,
    clName,
    page
  } = props;

  const [showBox, setShowBox] = useState(false);

  
  let currentState;
  if (status == 0) currentState = "Resolved";
  else if (status == 1) currentState = "Pending";
  else currentState = "Ongoing";

  const displayDropDown = () => {
    console.log("sfsd");
    return "Hello World";
    return (
       <div className="dropDown--box">
       {status !=1 && <div className="dropDown--box--items color1">Pending</div>}
       {status !=2 && <div className="dropDown--box--items color2">Ongoing</div>}
       {status !=0 && <div className="dropDown--box--items color0">Resolved</div>}
     </div>
     )
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
        <div className={`card--title--items card--title--status  ${clName}`}>
          <div className={`card--status--display ${clName + status}`} onClick={() => setShowBox(prev => !prev)}>
            {currentState}
          </div>
          { showBox && page === "admin" && <div className="dropDown--box">
       {status !=1 && <div className="dropDown--box--items color1" onClick={()=>changeStatus(index,1)} >Pending</div>}
       {status !=2 && <div className="dropDown--box--items color2" onClick={()=>changeStatus(index,2)} >Ongoing</div>}
       {status !=0 && <div className="dropDown--box--items color0" onClick={()=>changeStatus(index,0)} >Resolved</div>}
     </div>}
        
        </div>
      </div>
    </div>
  );
};

export default ComplaintElement;
