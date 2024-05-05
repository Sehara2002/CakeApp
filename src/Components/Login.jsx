
import "./CSS/Login.css"
import login from './Assets/Images/login.jpg'
import loginlogo from './Assets/Images/login-logo.png'
import Loginform from "./Loginform"
import { Link } from "react-router-dom"



const Login = () => {
  return (
    <div>
      <div className="split left  ">
        <div className="inner-dev" >
          <center>    
            <h1 className="login-heading">Login</h1>
          </center>
    
          <br/><br/>
          <hr color="darkgoldenrod" />
          <br/><br/>
          <center>
            <img  className="logo" src={loginlogo} alt="" /></center>
          <center>
          <div className="login">
            <br/><br/>
            <Loginform/>

             <p className="txt">Don't you have an account? <Link className="link" to="/signup">Signup</Link></p>
          </div></center>

        </div>
      </div>



       <div className="split right ">
        <img className="image" src={login} alt="" />
        <div className="middle">
          <div className="text"><p className="top-text">Cake</p> 
            <p className="bottom-text">Odyssey</p></div>
          </div>
        </div>
    
    </div>
  )
}

export default Login