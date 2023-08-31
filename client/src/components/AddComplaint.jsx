import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/AddComplaint.css";
import {
  faComment,
  faDoorClosed,
  faBook,
  faPhone,
  faUser,
  faList,
  faListOl,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddComplaint = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    enrollment: "",
    room: "",
    hostelBuilding: "",
    contact: 0,
    subject: "",
    complaint: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  async function handelSubmit() {
    const response = await fetch("http://localhost:3000/api/addcomplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status == "ok") {
      alert("Your Complaint Has Been Succesfully Submitted");
    }
  }
  return (
    <div className="add--container">
      <Menu item="AddComplaint" className="add--menu" />
      <div className="add--rightSection">
        <div className="add--rightSection--heading">Complaint Form</div>
        <div className="add--rightSection--content">
          <div className="addcomplaint--form--div">
            <form onSubmit={handelSubmit} className="addcomplaint--form">
              <div className="form--box">
                <div className="box--item">
                  <label htmlFor="">Full Name</label>
                  <div className="item--input">
                    <FontAwesomeIcon icon={faUser} className="input--icon" />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>

                <div className="box--item">
                  <label htmlFor="">Enrollment</label>
                  <div className="item--input">
                    <FontAwesomeIcon icon={faListOl} className="input--icon" />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="enrollment"
                      placeholder="Enrollment No."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form--box">
                <div className="box--item">
                  <label htmlFor="">Room</label>
                  <div className="item--input">
                    <FontAwesomeIcon
                      icon={faDoorClosed}
                      className="input--icon"
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
                <div className="box--item">
                  <label htmlFor="">Hostel Building</label>
                  <div className="item--input--select">
                    <FontAwesomeIcon
                      icon={faBuilding}
                      size="lg"
                      className="input--icon"
                    />
                    <select
                      name="hostelBuilding"
                      onChange={handleChange}
                      className="select--menu"
                      required
                    >
                      <option value="selectHostel" className="select--options">
                        --Select Hostel--
                      </option>
                      <option
                        value="M.Visvesvaraya.Boys.Hostel"
                        className="select--options"
                      >
                        M.Visvesvaraya.Boys.Hostel
                      </option>
                      <option
                        value="C.V.Raman.Boys.Hostel"
                        className="select--options"
                      >
                        C.V.Raman.Boys.Hostel
                      </option>
                      <option
                        value="H.Bhabha.Boys.Hostel"
                        className="select--options"
                      >
                        H.Bhabha.Boys.Hostel
                      </option>
                      <option
                        value="J.C.Bose.Boys.Hostel"
                        className="select--options"
                      >
                        J.C.Bose.Boys.Hostel
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form--box">
                <div className="box--item">
                  <label htmlFor="">Contact</label>
                  <div className="item--input">
                    <FontAwesomeIcon icon={faPhone} className="input--icon" />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="contact"
                      placeholder="Contact"
                      required
                    />
                  </div>
                </div>
                <div className="box--item">
                  <label htmlFor="">Subject of Complaint</label>
                  <div className="item--input--select">
                    <FontAwesomeIcon icon={faList} className="input--icon" />
                    <select
                      name="subject"
                      onChange={handleChange}
                      className="select--menu"
                    >
                      <option value="selectSubject" className="select--options">
                        --Select Subject--
                      </option>
                      <option value="electricity" className="select--options">
                        Electricity
                      </option>
                      <option value="Food Quality" className="select--options">
                        Food Quality
                      </option>
                      <option
                        value="Carpentry Work"
                        className="select--options"
                      >
                        Carpentry Work
                      </option>
                      <option value="Others" className="select--options">
                        Others
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form--box">
                <div className="box--item2">
                  <label htmlFor="">Complaint Details</label>
                  <div className="item--input2">
                    {/* <FontAwesomeIcon icon={faBook} className='input--icon' /> */}
                    <textarea
                      cols="76"
                      rows="6"
                      onChange={handleChange}
                      name="complaint"
                      placeholder="Enter Your Complaint"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="addC--submit--btn">
                <input type="submit" value="Submit" className="addC--btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComplaint;
