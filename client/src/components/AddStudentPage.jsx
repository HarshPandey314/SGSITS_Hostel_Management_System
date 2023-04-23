import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/AddStudentPage.css";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminMenu from "./AdminMenu";

const AddStudentPage = (props) => {
  const { type, setType, hostel, setHostel, Id, setId } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enrollment: "",
    room: "",
    hostelBuilding: "",
    email: "",
  });

  //   console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  // console.log(formData)

  return (
    <div className="addS--container">
      <AdminMenu type={type} setType={setType} Id={Id} setId={setId} />
      <div className="addS--rightSection">
        <div className="addS--rightSection--heading">Add Student</div>
        <div className="addS--rightSection--content">
          <div className="addS--form--div">
            <form action="" className="addS--form">
              <div className="addS--form--box">
                <div className="addS--box--item">
                  <label htmlFor="">First Name</label>
                  <div className="addS--item--input">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="addS--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="addS--box--item">
                  <label htmlFor="">Last Name</label>
                  <div className="addS--item--input">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="addS--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="addS--form--box">
                <div className="addS--box--item">
                  <label htmlFor="">Enrollment</label>
                  <div className="addS--item--input">
                    <FontAwesomeIcon
                      icon={faListOl}
                      className="addS--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="enrollment"
                      placeholder="Enrollment No."
                      required
                    />
                  </div>
                </div>
                <div className="addS--box--item">
                  <label htmlFor="">Email</label>
                  <div className="addS--item--input">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="addS--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="addS--form--box">
                <div className="addS--box--item">
                  <label htmlFor="">Room</label>
                  <div className="addS--item--input">
                    <FontAwesomeIcon
                      icon={faDoorClosed}
                      className="addS--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="room"
                      placeholder="Room No."
                      required
                    />
                  </div>
                </div>
                <div className="addS--box--item">
                  <label htmlFor="">Hostel Building</label>
                  <div className="addS--item--input--select">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      size="lg"
                      className="addS--input--icon"
                    />
                    <select
                      name="hostelBuilding"
                      onChange={handleChange}
                      className="addS--select--menu"
                      required
                    >
                      <option
                        value="selectHostel"
                        className="addS--select--options"
                      >
                        --Select Hostel--
                      </option>
                      <option
                        value="M Visvesvaraya Boys Hostel"
                        className="addS--select--options"
                      >
                        M Visvesvaraya Boys Hostel
                      </option>
                      <option
                        value="cvBoysHostel"
                        className="addS--select--options"
                      >
                        C V Raman Boys Hostel
                      </option>
                      <option
                        value="hBhabhaBoysHostel"
                        className="addS--select--options"
                      >
                        H Bhabha Boys Hostel
                      </option>
                      <option
                        value="JCBoseBoysHostel"
                        className="addS--select--options"
                      >
                        J C Bose Boys Hostel
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="addS--submit--btn">
                <input
                  type="submit"
                  value="Add Student"
                  className="addS--btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentPage;
