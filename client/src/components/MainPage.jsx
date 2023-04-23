import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import  logo  from '../assets/Images/website-logo.jpg';
import '../styles/MainPage.css'

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleShow = () => {
        setIsOpen(prev => !prev);
        console.log(isOpen);
    }

  return (
      <div className="mainPage--container">
          <div className="mainPage--navbar">
              <div className="navbar--item1">
                  <div className="logo--img">
                      <img src={logo} alt="" />
                  </div>
                  Hostel Management System
              </div>
              <div className="navbar--item2">
                  <Link to="" className="item2--li">About</Link>
                  <Link to="" className="item2--li">Contact</Link>
                  <div className="item2--li" onClick={handleShow}>Login/SignUp<FontAwesomeIcon icon={faCaretDown} id="op--icon"/></div>
                  {isOpen && <div className="dropdown--options--box">
                      <Link to="/login" className='dropdown--items'>Student Login</Link>
                      <Link to="/login" className='dropdown--items'>Admin Login</Link>
                  </div>}
              </div>
          </div>
          <div className="mainPage--title">
              <div className="title--logo">
                  <img src={logo} alt="" />
              </div>
              <div className="title--heading">SGSITS Hostel Management System</div>
          </div>

      </div>
  )
}

export default MainPage