import "./CSS/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Assets/Images/Logo.png";
import loginlogo from "./Assets/Images/login-logo.png";
import cart from "./Assets/Images/cart.png";
import { useNavigate } from "react-router-dom"
const Navbar = (props) => {
  const Showuser = () => {
    if (localStorage.getItem("username")!==null) {
      return <p className='username-p'>{localStorage.getItem("username")}</p>;
    }
  }
let navigator = useNavigate();

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
                <Link className={`nav-link ${props.activePage === "home" ? "active" : ""}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.activePage === "about" ? "active" : ""}`} to="/about">About</Link>

              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.activePage === "cakes" ? "active" : ""}`} to="/cakes">Cakes</Link>

              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.activePage === "contact" ? "active" : ""}`} to="/contacts">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="icon-list">
            <div className="row">
              <div className="icon-container">

                <div>
                  <Showuser />

                </div>

                <p>
                  <img src={loginlogo} alt="" className="navloginicon" id="login-btn" onClick={()=>{
                    if(localStorage.getItem("username")!==null){
                      let res = confirm("Do you want to Logout?")
                      if(res){
                        localStorage.removeItem("username");
                        navigator("/");
                      }
                    }else{
                      navigator("/login");
                    }
                  }}/>

                  <img src={cart} alt="" className="navloginicon" /></p>
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
