import Menu from "./Menu";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage--container">
      <Menu item="Home" className="homePage--menu" />
      <div className="homePage--rightSection">
        <div className="homePage--rightSection--heading">Welcome User</div>
      </div>
    </div>
  );
}
