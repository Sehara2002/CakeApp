import { Link } from "react-router-dom"
import "./CSS/Footer.css"

const FooterComponent = (props) => {
  return (
    <div className="footer-section">
        <div className="row">
            <div className="col-sm-6">
                <img src="" alt="Logo" />
            </div>
            <div className="col-sm-3">
                <h3 className="list-title">Company</h3>
                <ul className="list1" type="none">
                    <li className="list-item">
                        <Link to="/about" className={`footer-list-item ${props.activePage==="about"?"active-link":""}`}>About</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/cakes" className={`footer-list-item ${props.activePage==="cakes"?"active-link":""}`}>Cakes</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/orders" className={`footer-list-item ${props.activePage==="orders"?"active-link":""}`}>Orders</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-3">
            <h3 className="list-title">Company</h3>
                <ul className="list1" type="none">
                    <li className="list-item">
                        <Link to="/" className="footer-list-item">About</Link>
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
    </div>
  )
}

export default FooterComponent