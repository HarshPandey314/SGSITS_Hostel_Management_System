import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faSignal,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/Images/HostelOffice.jpg";
import MoreOptions from "./MoreOptions";
import dp from "../assets/Images/change-photo.jpg";
import "../styles/Menu.css";

export default function Menu(props) {
  const { item } = props;
  useEffect(() => {
    fetchData();
    let menuItem = document.querySelector(`#${item}`);
    menuItem.style.backgroundColor = "wheat";
    menuItem.style.color = "black";
  }, []);
  const [userDetails, setUserDetails] = useState({});
  // async function fetchData() {
  //   const response = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       enrollmentNo: JSON.parse(localStorage.getItem("dataKey")),
  //     }),
  //   });
  //   const data = await response.json();
  //   setUserDetails(data[0]);
  //   // console.log(data);
  // }
  function fetchData() {
    setUserDetails(JSON.parse(localStorage.getItem("dataKey")));
  }

  const enrollment = userDetails.id;
  const fullName = userDetails.firstname + " " + userDetails.lastname;

  return (
    <div className="menu--container">
      <div className="menu--heading">
        <div className="heading--title">
          <img src={logo} alt="" className="Logo-Image" />
        </div>
      </div>
      <div className="menu--items--box">
        <Link to="/homePage" className="menu--items" id="Home">
          <FontAwesomeIcon icon={faHouse} className="items--icons" />
          Home
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/profile" className="menu--items" id="Profile">
          <FontAwesomeIcon icon={faUser} className="items--icons" />
          Profile
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/addComplaint" className="menu--items" id="AddComplaint">
          <FontAwesomeIcon icon={faBook} className="items--icons" />
          Add Complaint
        </Link>
      </div>
      <div className="menu--items--box">
        <Link to="/status" className="menu--items" id="Status">
          <FontAwesomeIcon icon={faSignal} className="items--icons" />
          Status
        </Link>
      </div>
      <div className="menu--items--box">
        <MoreOptions />
      </div>
      <div className="menu--items--box">
        <Link to="/login" className="menu--items">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="items--icons"
            id="LogOut"
          />
          Log Out
        </Link>
      </div>
      <div className="menu--bottom">
        <img src={dp} alt="" />
        <div className="menu--detail--box">
          <div className="detail--fullName">{fullName}</div>
          <div className="detail--enrollment">{enrollment}</div>
        </div>
      </div>
    </div>
  );
}
