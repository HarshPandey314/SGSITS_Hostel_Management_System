import React from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/OtpPage.css";

const OtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const password = location.state.password;
  const enrollmentNo = location.state.enrollmentNo;
  console.log(otp);
  async function VerifyUser(event) {
    event.preventDefault();
    console.log(otp);
    const response = await fetch("http://localhost:3000/api/updatePassword", {
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
    if (otp === location.state.otp) {
      navigate("/login");
    } else {
      alert("wrong otp");
    }
  }
  return (
    <div className="otp--container">
      <div className="otp--box">
        <form onSubmit={VerifyUser} className="otp--form">
          <div className="otp--null">
            <div className="otp--heading1">OTP Verification</div>
            <div className="otp--heading1-2">
              Please Enter the OTP to Verify Your Account
            </div>
            <div className="otp--input--box">
              {/* <div className="otp--heading--input">Please Enter the OTP to Verify Your Account</div> */}
              <div className="otp--input--container">
                <div className="otp--icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span></span>}
                  renderInput={(props) => (
                    <input {...props} className="form--input--char" />
                  )}
                  className="otp--input"
                />
              </div>
            </div>
            <div className="otp--submit--btn">
              <input type="submit" value="Validate OTP" className="otp--btn" />
            </div>
            <div className="heading--bottom">
              <Link to="/signUp" className="heading2">
                Resend OTP?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
