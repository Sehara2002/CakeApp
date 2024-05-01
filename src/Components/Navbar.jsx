import "./CSS/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Assets/Images/Logo.png";
const Navbar = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav">
            <ul className="nav-bar">
              <li className="nav-item">
              <Link className={`nav-link ${props.activePage === "home"?"active":""}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${props.activePage === "about"?"active":""}`} to="/about">About</Link>
              
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${props.activePage === "cakes"?"active":""}`} to="/cakes">Cakes</Link>
              
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${props.activePage === "contact"?"active":""}`} to="/contacts">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="icon-list">
            <div className="row">
              <div className="icon-container">
                <p>Icons</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line">
        
      </div>
    </div>
  );
};

export default Navbar;
