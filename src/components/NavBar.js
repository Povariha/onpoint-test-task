import home from "../img/home.svg";
import "./navBar.css";

const NavBar = ({ setSlide }) => {
  return (
    <nav className="nav-bar">
      <img src={home} className="nav-img" onClick={() => setSlide(0)} />
      <span className="nav-line"></span>
      <p className="nav-text">PROJECT</p>
    </nav>
  );
};

export default NavBar;
