import React, { useState } from "react";
import { faFileLines, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminMenu from "./AdminMenu";
import dp from "../assets/Images/HostelImg.jpg";
import { useNavigate } from "react-router-dom";
import "../styles/AddNoticePage.css";

const AddNoticePage = (props) => {
  const navigate = useNavigate();
  const { type, setType, hostel, setHostel, Id, setId } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enrollment: "",
    room: "",
    hostelBuilding: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  async function addStudent(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/addStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    navigate("/addStudent");
  }

  const [noticePicture, setNoticePicture] = useState();
  const handleChangePicture = (event) => {
    const { files } = event.target;
    setNoticePicture(URL.createObjectURL(files[0]));
  };

  return (
    <div className="addN--container">
      <AdminMenu type={type} setType={setType} Id={Id} setId={setId} />
      <div className="addN--rightSection">
        <div className="addN--rightSection--heading">Add Notice</div>
        <div className="addN--rightSection--content">
          <div className="addN--form--div">
            <form onSubmit={addStudent} className="addN--form">
              <div className="addN--form--box">
                <div className="addN--box--item">
                  <label htmlFor="">Subject</label>
                  <div className="addN--item--input">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="addN--input--icon"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      placeholder="Enter Description"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="addN--form--box">
                <div className="addN--box--item2">
                  <label htmlFor="">Choose File</label>
                  <div className="addN--item--input2">
                    <FontAwesomeIcon
                      icon={faFileImage}
                      className="addN--input--icon2"
                    />
                    <label htmlFor="photo--upload">Choose File</label>

                    <input
                      type="file"
                      // accept="application/pdf"
                      onChange={handleChangePicture}
                      name="file"
                      id="photo--upload"
                      capture
                    />
                  </div>
                  <div className="notice--photo--div">
                    <img src={noticePicture} alt="" id="notice--photo" />
                  </div>
                </div>
              </div>

              <div className="addN--submit--btn">
                <input type="submit" value="Add Notice" className="addS--btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoticePage;
