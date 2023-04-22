import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import ComplaintElement from "./ComplaintElement";
import "../styles/Status.css";

const Status = () => {
  const [complaintArray, setComplaintArray] = useState([{}]);
  useEffect(() => {
    fetchComplaintDetails();
  }, []);
  async function fetchComplaintDetails() {
    const response = await fetch("http://localhost:3000/api/getcomplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enrollment: JSON.parse(localStorage.getItem("dataKey2")),
      }),
    });
    const data = await response.json();
    data.reverse();
    setComplaintArray(data);
  }
  return (
    <div className="status--container">
      <Menu item="Status" className="status--menu" />
      <div className="status--rightSection">
        <div className="status--rightSection--heading">Complaint History</div>
        <div className="status--rightSection--content">
          <div className="status--complaint--box">
            <div className="status--title--box">
              <div className="title--items" id="title--sn">
                S. No.
              </div>
              <div className="title--items" id="title--room">
                Room
              </div>
              <div className="title--items" id="title--hbuilding">
                Hostel Building
              </div>
              <div className="title--items" id="title--subject">
                Subject of Complaint
              </div>
              <div className="title--items" id="title--complaint">
                Complaint
              </div>
              <div className="title--items" id="title--status">
                Status
              </div>
            </div>
            <div className="complaint--elements">
              {complaintArray.map((card, index) => (
                <ComplaintElement
                  key={index}
                  room={card.room}
                  complaint={card.complaint}
                  hostelbuilding={card.hostelbuilding}
                  subject={card.subject}
                  status={card.status}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
