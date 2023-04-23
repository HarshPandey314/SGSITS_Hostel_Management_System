import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import OtpVerification from "./components/OtpVerification";
import Menu from "./components/Menu";
import AddComplaint from "./components/AddComplaint";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import Status from "./components/Status";
import "./App.css";
import GalleryPage from "./components/GalleryPage";
import MessMenu from "./components/MessMenu";
import MainPage from "./components/MainPage";
import AddStudentPage from "./components/AddStudentPage";
import AdminComplaintPage from './components/AdminComplaintPage'
import AdminHomePage from "./components/AdminHomePage";
import AdminLoginPage from "./components/AdminLoginPage";

function App() {
  const [type, setType] = useState("");
  const [hostel, setHostel] = useState("");
  const [Id, setId] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello World</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminLogin" element={<AdminLoginPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/addComplaint" element={<AddComplaint />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/status" element={<Status />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/MessMenu" element={<MessMenu />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route
          path="/addStudent"
          element={
            <AddStudentPage
              type={type}
              setType={setType}
              hostel={hostel}
              setHostel={setHostel}
              Id={Id}
              setId={setId}
            />
          }
        ></Route>
        <Route
          path="/adminComplaint"
          element={
            <AdminComplaintPage
              type={type}
              setType={setType}
              hostel={hostel}
              setHostel={setHostel}
              Id={Id}
              setId={setId}
            />
          }
        ></Route>
        <Route
          path="/adminHomePage"
          element={
            <AdminHomePage
              type={type}
              setType={setType}
              hostel={hostel}
              setHostel={setHostel}
              Id={Id}
              setId={setId}
            />
          }
        ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
