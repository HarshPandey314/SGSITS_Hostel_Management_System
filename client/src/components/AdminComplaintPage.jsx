import React from "react";
import ComplaintElement from "./ComplaintElement";
import AdminMenu from "./AdminMenu";
import "../styles/AdminComplaintPage.css";

const AdminComplaintPage = (props) => {
  const { type, setType, hostel, setHostel, Id, setId } = props;

  const complaintArray = [
    {
      complaint:
        "Room Bohot Garam h Cooler free mein lagwao sngjd sdgnj dsjgkn sdgjnsdng sdgnjdfsn gsfsgnjsfnd gsk",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "others",
      status: "1",
    },
    {
      complaint: "Fan is not working",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "HBhabhaBoysHostel",
      room: "S-95",
      subject: "electricity",
      status: "0",
    },
    {
      complaint: "Bekar khaana",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "foodQuality",
      status: "0",
    },
    {
      complaint: "Window Broken",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "CarpentryWork",
      status: "1",
    },
    {
      complaint: "Room Bohot Garam h ",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "others",
      status: "1",
    },
    {
      complaint: "Fan is not working",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "HBhabhaBoysHostel",
      room: "S-95",
      subject: "electricity",
      status: "0",
    },
    {
      complaint: "Bekar khaana",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "foodQuality",
      status: "0",
    },
    {
      complaint: "Window Broken",
      contact: "7828933347",
      enrollment: "0801IT201040",
      fullname: "Garvit Prasad",
      hostelbuilding: "JCBoseBoysHostel",
      room: "S-95",
      subject: "CarpentryWork",
      status: "0",
    },
  ];

  const changeStatus = (index) => {
    // console.log(index);
  };

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
