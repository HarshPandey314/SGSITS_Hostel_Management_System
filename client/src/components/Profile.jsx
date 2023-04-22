import React, { useState, useEffect } from "react";
import {
  faComment,
  faDoorClosed,
  faBook,
  faPhone,
  faUser,
  faList,
  faListOl,
  faBuilding,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu.jsx";
import dp from "../assets/Images/HostelImg.jpg";
import "../styles/Profile.css";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(dp);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
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
  //   console.log(data);
  // }
  function fetchData() {
    setUserDetails(JSON.parse(localStorage.getItem("dataKey")));
  }

  const enrollment = userDetails.id;
  const fullName = userDetails.firstname + " " + userDetails.lastname;
  const email = userDetails.gsuitid;
  const password = userDetails.password;
  const room = userDetails.room;

  const handleChangePicture = (event) => {
    const { files } = event.target;
    setProfilePicture(URL.createObjectURL(files[0]));
  };

  return (
    <div className="profile--container">
      <Menu item="Profile" className="profile--menu" />
      <div className="profile--rightSection">
        <div className="profile--rightSection--heading">Profile</div>
        <div className="profile--rightSection--content">
          <div className="profile--form--div">
            <form action="" className="profile--form">
              <div className="profile--form--box">
                <div className="profile--picture--div">
                  <label htmlFor="file-upload">
                    <img
                      src={profilePicture}
                      alt="Not Found"
                      id="profile--photo"
                    />
                  </label>
                  <input
                    type="file"
                    onChange={handleChangePicture}
                    id="file-upload"
                    capture
                  />
                </div>
              </div>
              <div className="profile--form--box">
                <div className="profile--box--item">
                  <label htmlFor="">Full Name</label>
                  <div className="profile--item--input filled">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="profile--input--icon"
                    />
                    <input
                      type="text"
                      name="fullName"
                      placeholder={fullName}
                      disabled
                    />
                  </div>
                </div>

                <div className="profile--box--item">
                  <label htmlFor="">Enrollment</label>
                  <div className="profile--item--input filled">
                    <FontAwesomeIcon
                      icon={faListOl}
                      className="profile--input--icon"
                    />
                    <input
                      type="text"
                      name="enrollment"
                      placeholder={enrollment}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="profile--form--box">
                <div className="profile--box--item">
                  <label htmlFor="">Email</label>
                  <div className="profile--item--input filled">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="profile--input--icon"
                    />
                    <input
                      type="text"
                      name="contact"
                      placeholder={email}
                      disabled
                    />
                  </div>
                </div>
                <div className="profile--box--item">
                  <label htmlFor="">Password</label>
                  <div className="profile--item--input filled">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="profile--input--icon"
                    />
                    <input
                      type="password"
                      name="contact"
                      placeholder={"............."}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="profile--form--box">
                <div className="profile--box--item">
                  <label htmlFor="">Room</label>
                  <div className="profile--item--input filled">
                    <FontAwesomeIcon
                      icon={faDoorClosed}
                      className="profile--input--icon"
                    />
                    <input
                      type="text"
                      name="room"
                      placeholder={room}
                      disabled
                    />
                  </div>
                </div>
                <div className="profile--box--item">
                  <label htmlFor="">Hostel Building</label>
                  <div className="profile--item--input--select">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      size="lg"
                      className="profile--input--icon"
                    />
                    <select
                      name="hostelBuilding"
                      className="profile--select--menu"
                      required
                    >
                      <option
                        value="selectHostel"
                        className="profile--select--options"
                      >
                        --Select Hostel--
                      </option>
                      <option
                        value="mvBoysHostel"
                        className="profile--select--options"
                      >
                        M Visvesvaraya Boys Hostel
                      </option>
                      <option
                        value="cvBoysHostel"
                        className="profile--select--options"
                      >
                        C V Raman Boys Hostel
                      </option>
                      <option
                        value="hBhabhaBoysHostel"
                        className="profile--select--options"
                      >
                        H Bhabha Boys Hostel
                      </option>
                      <option
                        value="JCBoseBoysHostel"
                        className="profile--select--options"
                      >
                        J C Bose Boys Hostel
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="profile--form--box">
                <div className="profile--box--item">
                  <label htmlFor="">Contact</label>
                  <div className="profile--item--input">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="profile--input--icon"
                    />
                    <input
                      type="number"
                      name="room"
                      placeholder="Add Contact No."
                      required
                    />
                  </div>
                </div>
                <div className="profile--box--item">
                  <label htmlFor="">Alternate Contact</label>
                  <div className="profile--item--input">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="profile--input--icon"
                    />
                    <input
                      type="number"
                      name="room"
                      placeholder="Add Contact No."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="profile--submit--btn">
                <input
                  type="submit"
                  value="Save Details"
                  className="profile--btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
