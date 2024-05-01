import { Link } from "react-router-dom"
import "./CSS/Footer.css"
import Logo from "./Assets/Images/Logo.png"

const FooterComponent = (props) => {
  return (
    <div className="footer-section">
        <br></br>
        <hr color="darkgoldenrod" ></hr>
        <br/><br/><br/>
        <div className="row">
            <div className="col-sm-6">
                <img src={Logo} alt="Logo" className="footer-logo" />
                <div className="footer-para">
                    <br/>
                    <p >Cake Odyssey (Pvt) Ltd.
                        <br/>Aththidiya Road,<br/>
                        Rathmalana,<br/>
                        Sri Lanka.
                    </p>
                </div>
            </div>
            
            <div className="col-sm-3">
            <h3 className="list-title">Company</h3>
                <ul className="list1" type="none">
                    <li className="list-item">
                        <Link to="/about" className="footer-list-item">About</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/cakes" className="footer-list-item">Cakes</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/orders" className="footer-list-item">Orders</Link>
                    </li>
                </ul>
            </div>
        </div>
        <br/><br/><br/>
        <div>
            <p><center>Copyright 2024 Cake Odyssey All Rights Reserved</center></p>
            <br/><br/>
        </div>
    </div>
  )
}

export default FooterComponent