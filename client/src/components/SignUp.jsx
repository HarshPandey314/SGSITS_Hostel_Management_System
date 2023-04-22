import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToOtp = (otp) => {
    navigate("/otpverification", {
      state: { otp: otp, enrollmentNo: enrollmentNo, password: password },
    });
  };
  async function checkUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enrollmentNo,
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.length == 1 && data[0].status == "1") {
      data[0].gsuitid == email ? SignUpUser() : alert("Tatta Spotted");
    } else if (data.length == 1 && data[0].status == "0") {
      alert("Account Already Exist");
    } else {
      alert("Tatta Spotted");
    }
  }
  async function SignUpUser() {
    const response = await fetch("http://localhost:3000/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enrollmentNo,
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.status == "1") {
      console.log(data);
      goToOtp(data.OTP);
    } else {
      alert("Please enter a Registered Gmail address");
    }
    console.log("Hello");
  }

  return (
    <div className="signUp--container">
      <div className="signUp--box">
        <form onSubmit={checkUser} className="signUp--form">
          <div className="signUp--null">
            <div className="signUp--heading1">SignUp</div>
            <div className="signUp--input--box">
              <div className="signUp--heading--input">Name</div>
              <div className="signUp--input--container">
                <div className="signUp--icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input
                  value={name}
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  className="signUp--form--input"
                />
              </div>
              <div className="signUp--heading--input">Enrollment</div>
              <div className="signUp--input--container">
                <div className="signUp--icon">
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  <FontAwesomeIcon icon={faListOl} />
                </div>
                <input
                  value={enrollmentNo}
                  type="text"
                  onChange={(e) => {
                    setEnrollmentNo(e.target.value);
                  }}
                  placeholder="Enrollment"
                  className="signUp--form--input"
                />
              </div>
              <div className="signUp--heading--input">Email</div>
              <div className="signUp--input--container">
                <div className="signUp--icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  value={email}
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className="signUp--form--input"
                />
              </div>
              <div className="signUp--heading--input">Password</div>
              <div className="signUp--input--container">
                <div className="signUp--icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  value={password}
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                  className="signUp--form--input"
                />
              </div>
              <div className="signUp--submit--btn">
                <input type="submit" value="Sign Up" className="signUp--btn" />
              </div>
              <div className="signUp--heading--bottom">
                <Link to="/login" className="signUp--heading2">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
