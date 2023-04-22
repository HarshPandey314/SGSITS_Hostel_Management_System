import React, { useState } from "react";
import "../styles/MoreOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCaretDown,
  faCircleChevronDown,
  faImage,
  faList,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const MoreOptions = () => {
  const [isShow, setIsShow] = useState(0);

  const showBox = () => {
    setIsShow((prev) => {
      if (prev == 0) return 1;
      else return 0;
    });
  };

  return (
    <div className="more--container">
      <div className={`more--menu--items`} onClick={showBox} id="MoreOptions">
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="more--items--icons"
        />
        More Options
      </div>
      <div className={`more--items--box box--display${isShow}`}>
        <div className="more--item">
          <FontAwesomeIcon icon={faUtensils} className="more--items--icons" />
          <Link to="/MessMenu" className="more--item--link">
            Mess Menu
          </Link>
        </div>
        <div className="more--item">
          <FontAwesomeIcon icon={faImage} className="more--items--icons" />
          <Link to="/gallery" className="more--item--link">
            Gallery
          </Link>
        </div>
        <div className="more--item">
          <FontAwesomeIcon icon={faList} className="more--items--icons" />
          <Link to="/homePage" className="more--item--link">
            Hostel List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreOptions;
