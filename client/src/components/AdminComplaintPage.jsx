import React, { useEffect, useState } from "react";
import ComplaintElement from "./ComplaintElement";
import AdminMenu from "./AdminMenu";
import "../styles/AdminComplaintPage.css";

const AdminComplaintPage = (props) => {
  const { type, setType, hostel, setHostel, Id, setId } = props;

  const [complaintArray, setComplaintArray] = useState([{}]);
  

  useEffect(() => {
    getComplaintByType();
  }, []);

  async function getComplaintByType(event) {
    console.log(hostel);
    console.log(type);
    const response = await fetch(
      "http://localhost:3000/api/getComplaintByType",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          hostel,
        }),
      }
    );
    const data = await response.json();
    setComplaintArray(data);
  }

  async function changeStatus(index) {
    console.log(index);
    const response = await fetch("http://localhost:3000/api/updateComplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(complaintArray[index - 1]),
    });
    const data = await response.json();
    setComplaintArray(data);
    // console.log(data);
  }

  const complaintCards = complaintArray.map((card, index) => {
    // console.log(card.room)
    return (
      <ComplaintElement
        key={index}
        room={card.room}
        complaint={card.complaint}
        hostelbuilding={card.hostelbuilding}
        subject={card.subject}
        status={card.status}
        index={index + 1}
        changeStatus={changeStatus}
        clName={"status--btn"}
        page={"admin"}
      />
    );
  });

  // console.log(complaintCards);

  return (
    <div className="adminC--container">
      <AdminMenu type={type} setType={setType} Id={Id} setId={setId} />
      <div className="adminC--rightSection">
        <div className="adminC--rightSection--heading">Complaint History</div>
        <div className="adminC--rightSection--content">
          <div className="adminC--complaint--box">
            <div className="adminC--title--box">
              <div className="adminC--title--items" id="adminC--title--sn">
                S. No.
              </div>
              <div className="adminC--title--items" id="adminC--title--room">
                Room
              </div>
              <div
                className="adminC--title--items"
                id="adminC--title--hbuilding"
              >
                Hostel Building
              </div>
              <div className="adminC--title--items" id="adminC--title--subject">
                Subject of Complaint
              </div>
              <div
                className="adminC--title--items"
                id="adminC--title--complaint"
              >
                Complaint
              </div>
              <div className="adminC--title--items" id="adminC--title--status">
                Status
              </div>
            </div>
            <div className="adminC--complaint--elements">{complaintCards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComplaintPage;
