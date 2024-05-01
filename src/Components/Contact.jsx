import "./CSS/Contact.css"
import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"
<<<<<<< HEAD
import conImg from "./Assets/Images/conCake.png"
import mail from "./Assets/Images/EmailIcon.png"
import call from "./Assets/Images/CallIcon.png"
=======
import img6 from "./Assets/Images/backgroundcake.png"
>>>>>>> ce3c80049cf8f0b0d304b91ae6c514c0e454ffcc

const Contact = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="contactContainer">
      <Navbar activePage = "contact"/>
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
=======
        <Navbar activePage = "contact"/>
        <div className="divider">
          <div className="left">
            <img src={img6} alt="seharacake"/>
          </div>
          <div className="right">
            <h1>Butter cake</h1>
          </div>
        </div>
        <FooterComponent activePage = "contact"/>
>>>>>>> ce3c80049cf8f0b0d304b91ae6c514c0e454ffcc
    </div>
  )
}

export default Contact