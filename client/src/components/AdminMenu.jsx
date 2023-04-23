import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faSignal,
  faBook,
  faUser,
  faBoltLightning,
  faBolt,
  faUtensils,
  faDoorClosed,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/Images/website-logo-circle.png";
import MoreOptions from "./MoreOptions";
import dp from "../assets/Images/change-photo.jpg";
import "../styles/AdminMenu.css";

export default function AdminMenu(props) {
  // const { item } = props;

  // useEffect(() => {
  //     // console.log(item);
  //     let menuItem = document.querySelector(`#${item}`);
  //     menuItem.style.backgroundColor = "wheat";
  //     menuItem.style.color = "black";
  // }, [props])

  const [adminDetails] = [
    {
      id: "0801IT201040",
      firstname: "Garvit",
      lastname: "Prasad",
      status: 1,
      gsuitid: "gs2013061@sgsitsindore.in",
      password: "123456",
      room: "S-95",
    },
  ];

  const enrollment = adminDetails.id;
  const fullName = adminDetails.firstname + " " + adminDetails.lastname;
  const { type, setType, Id, setId } = props;

  const changeType = (event) => {
    setType((prev) => event.target.textContent);
    setId(event.target.id);
  };
  //   console.log(type);

  return (
    <div className="adminMenu--container">
      <div className="adminMenu--heading">
        <div className="adminMenu--heading--title">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 1 ? "bgColor" : ""}`}
          onClick={changeType}
          id={1}
        >
          <FontAwesomeIcon icon={faHouse} className="adminMenu--items--icons" />
          Home
        </Link>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 2 ? "bgColor" : ""}`}
          onClick={changeType}
          id={2}
        >
          <FontAwesomeIcon icon={faBolt} className="adminMenu--items--icons" />
          Electricity
        </Link>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 3 ? "bgColor" : ""}`}
          onClick={changeType}
          id={3}
        >
          <FontAwesomeIcon
            icon={faUtensils}
            className="adminMenu--items--icons"
          />
          Food Quality
        </Link>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 4 ? "bgColor" : ""}`}
          onClick={changeType}
          id={4}
        >
          <FontAwesomeIcon
            icon={faDoorClosed}
            className="adminMenu--items--icons"
          />
          Carpentry Work
        </Link>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 5 ? "bgColor" : ""}`}
          onClick={changeType}
          id={5}
        >
          <FontAwesomeIcon
            icon={faHashtag}
            className="adminMenu--items--icons"
          />
          Others
        </Link>
      </div>
      <div className="adminMenu--items--box">
        <Link
          to="/adminHomePage"
          className={`adminMenu--items ${Id == 6 ? "bgColor" : ""}`}
          onClick={changeType}
          id={6}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="adminMenu--items--icons"
          />
          LogOut
        </Link>
      </div>
      <div className="adminMenu--bottom">
        <img src={dp} alt="" />
        <div className="adminMenu--detail--box">
          <div className="adminMenu--detail--fullName">{fullName}</div>
          <div className="adminMenu--detail--enrollment">{enrollment}</div>
        </div>
      </div>
    </div>
  );
}
