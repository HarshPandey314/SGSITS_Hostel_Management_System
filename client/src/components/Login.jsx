import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function loginUser(event) {
    event.preventDefault();
    console.log("login function working");
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enrollmentNo,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data[0]);
    if (
      data.length == 1 &&
      data[0].status == "0" &&
      data[0].password == password &&
      data[0].id == enrollmentNo
    ) {
      localStorage.setItem("dataKey", JSON.stringify(data[0]));
      localStorage.setItem("dataKey2", JSON.stringify(data[0].id));
      navigate("/homePage");
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="login--container">
      <div className="login--box">
        <form onSubmit={loginUser} className="login--form">
          <div className="null">
            <div className="heading1">Login Account</div>
            <div className="input--box">
              <div className="heading--input">Enrollment</div>
              <div className="input--container">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  value={enrollmentNo}
                  type="text"
                  onChange={(e) => {
                    setEnrollmentNo(e.target.value);
                  }}
                  placeholder="Enrollment"
                  className="form--input"
                />
              </div>
              <div className="heading--input">Password</div>
              <div className="input--container">
                <div className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="form--input"
                />
              </div>
              <div className="submit--btn">
                <input type="submit" value="Sign In" className="btn" />
              </div>
              <div className="heading--bottom">
                <Link to="/signUp" className="heading2">
                  Create Account
                </Link>
                <Link to="" className="heading3">
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

export default LoginPage;
