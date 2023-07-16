import React, { useState } from "react";
import "../styles/UploadLinkElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faLink,
  faListOl,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const UploadLinkElement = (props) => {
  // const [title, setTitle] = useState("");
  const { title, setTitle } = props;
  const [link, setLink] = useState("");
  const hideBox = () => {
    props.setIsShow(0);
    // props.setTitle("");
    // props.setTemp([]);
  };

  async function addLink(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/addlinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        link,
      }),
    });
    const data = await response.json();
    hideBox();
  }
  return (
    <div className={`upload--container box--display${props.isShow}`}>
      <div className="box--close">
        <FontAwesomeIcon
          icon={faXmark}
          className="close--icon"
          onClick={hideBox}
        />
      </div>
      <div className="upload--form--div">
        <form action="" className="upload--form" onSubmit={addLink}>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Title</label>
              <div className="upload--item--input">
                <FontAwesomeIcon
                  icon={faHashtag}
                  className="upload--input--icon"
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Enter Title"
                  value={title}
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--box--item">
              <label htmlFor="">Link</label>
              <div className="upload--item--input">
                <FontAwesomeIcon
                  icon={faLink}
                  className="upload--input--icon"
                />
                <input
                  value={link}
                  type="text"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  name="fullName"
                  placeholder="Paste Link"
                  required
                />
              </div>
            </div>
          </div>
          <div className="upload--form--box">
            <div className="upload--submit--btn">
              <input type="submit" value="Submit" className="upload--btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadLinkElement;
