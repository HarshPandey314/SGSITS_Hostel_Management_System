import React, { useState } from "react";
import AdminMenu from "./AdminMenu";
import "../styles/AdminHomePage.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AdminHomePage = (props) => {
  const navigate = useNavigate();
  const { type, setType, hostel, setHostel, Id, setId } = props;

  const changeHostel = (event) => {
    setHostel((prev) => event.target.textContent);
    navigate("/adminComplaint");
  };

  return (
    <div className="admin--container">
      <AdminMenu type={type} setType={setType} Id={Id} setId={setId} />
      <div className="admin--rightSection">
        <div className="admin--rightSection--heading">Welcome Admin</div>
        <div className="admin--addStudent--div">
          <Link
            to="/addStudent"
            className="admin--addStudent"
            onClick={() => setId(1)}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="add--icon"
            ></FontAwesomeIcon>{" "}
            Add Student
          </Link>
        </div>
        <div className="admin--cards--div">
          <div className="card--box">
            <div className="hostel--card" onClick={changeHostel}>
              M.Visvesvaraya.Boys.Hostel
            </div>
            <div className="hostel--card" onClick={changeHostel}>
              C.V.Raman.Boys.Hostel
            </div>
          </div>
          <div className="card--box">
            <div className="hostel--card" onClick={changeHostel}>
              J.C.Bose.Boys.Hostel
            </div>
            <div className="hostel--card" onClick={changeHostel}>
              H.Bhabha.Boys.Hostel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
