import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faList, faList12, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/AdminLoginPage.css";

const AdminLoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // async function loginUser(event) {
  //   event.preventDefault();
  //   console.log("login function working");
  //   const response = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       enrollmentNo,
  //       password,
  //     }),
  //   });
  //   const data = await response.json();
  //   // console.log(data[0]);
  //   if (
  //     data[0].status == "0" &&
  //     data[0].password == password &&
  //     data[0].id == enrollmentNo
  //   ) {
  //     localStorage.setItem("dataKey", JSON.stringify(data[0]));
  //     localStorage.setItem("dataKey2", JSON.stringify(data[0].id));
  //     navigate("/homePage");
  //   } else {
  //     alert("Please check your username and password");
  //   }
  // }

  return (
    <div className="admin--login--container">
      <div className="admin--login--box">
        <form onSubmit="" className="admin--login--form">
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
                    setEnrollmentNo(e.target.value);
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
