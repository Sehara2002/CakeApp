import "./CSS/Contact.css"
import FooterComponent from "./FooterComponent"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import conImg from "./Assets/Images/conCake.png"
import mail from "./Assets/Images/EmailIcon.png"
import call from "./Assets/Images/CallIcon.png"
import axios from 'axios'
import { useState } from "react"


const Contact = () => {
  const [fullname, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate  = useNavigate();
  
  const handleContact = () =>{
    axios
    .post('http://localhost:8000/contacts', {fullname,email,message})
    .then(response=>{
      navigate('/contacts')
      {alert("message sended")}
    })
    .catch(error=>{
      console.log(error)
    });
  };
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
          <input className="detail1" placeholder="Full Name" value={fullname} onChange={e=>setfullName(e.target.value)}/><br/>
          <input className="detail2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
          <textarea className="detail3" placeholder="Message" rows="7" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
          <div className="send"><button onClick={handleContact}>Send</button></div>
        </div>
        </div>
      </div>


     
      <FooterComponent activePage = "contact"/>
      </div>
      </div>
        
  )
}

export default Contact;