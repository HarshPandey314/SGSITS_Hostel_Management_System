import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faList,
  faList12,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/AdminLoginPage.css";

const AdminLoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function verifyAdmin() {
    if (userName == "gshosteladmin" && password == "12345678") {
      navigate("/adminHomePage");
    } else {
      alert("chekc username or password");
    }
  }

  return (
    <div className="admin--login--container">
      <div className="admin--login--box">
        <form onSubmit={verifyAdmin} className="admin--login--form">
          <div className="admin--null">
            <div className="admin--heading1">Admin Login</div>
            <div className="admin--input--box">
              <div className="admin--heading--input">User Name</div>
              <div className="admin--input--container">
                <div className="admin--icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  value={userName}
                  type="text"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  placeholder="User Name"
                  className="admin--form--input"
                />
              </div>
              <div className="admin--heading--input">Password</div>
              <div className="admin--input--container">
                <div className="admin--icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="admin--form--input"
                />
              </div>
              <div className="admin--submit--btn">
                <input type="submit" value="Sign In" className="admin--btn" />
              </div>
              <div className="admin--heading--bottom">
                <Link to="/signUp" className="admin--heading2">
                  Create Account
                </Link>
                <Link to="" className="admin--heading3">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
