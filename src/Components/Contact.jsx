import "./CSS/Contact.css"
import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"

import conImg from "./Assets/Images/conCake.png"
import mail from "./Assets/Images/EmailIcon.png"
import call from "./Assets/Images/CallIcon.png"

import img6 from "./Assets/Images/backgroundcake.png"


const Contact = () => {
  return (
      <div >
      <Navbar activePage = "contact"/>
      <div className="contactContainer">
      <div className="con-outer-row">

        <div className="con-outer-col1">
          <img src={conImg} alt="Cake Image" className="conCake" />
          <h1 className="contactUs" >Contact</h1>
          <h1 className="contactUs2">Us</h1>
        </div>

        <div className="con-outer-col2">
        <div className="con-inner-row1">
          <div className="con-inner-col1">
            <img src={mail} alt="Email Logo" className="mailCon" />
            <p className="email">cake@Odyssey.lk</p>
          </div>

          <div className="con-inner-col2">
            <img src={call} alt="Call Logo" className="callCon" />
            <p className="call">+94 11 502 772</p>
          </div>
        </div>
        <div className="con-inner-row2">
          <input className="detail1" placeholder="Full Name" /><br/>
          <input className="detail2" placeholder="Email" /><br/>
          <textarea className="detail3" placeholder="Message" rows="7" ></textarea>
          <div className="send"><button>Send</button></div>
        </div>
        </div>
      </div>


     
      <FooterComponent activePage = "contact"/>
      </div>
      </div>
        
  )
}

export default Contact;