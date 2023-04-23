import Menu from "./Menu";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage--container">
      <Menu item="Home" className="homePage--menu" />
      <div className="homePage--rightSection">
        <div className="homePage--rightSection--heading">Welcome User</div>
        <div className="admin--cards--div">
          <div className="card--box">
            <div className="hostel--card" >
              M Visvesvaraya Boys Hostel
            </div>
            <div className="hostel--card" >
              C V Raman Boys Hostel
            </div>
          </div>
          <div className="card--box">
            <div className="hostel--card">
              J.C. Bose Boys Hostel
            </div>
            <div className="hostel--card" >
              H Bhabha Boys Hostel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
