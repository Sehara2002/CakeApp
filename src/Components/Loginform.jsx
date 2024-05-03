import { useRef } from "react"
import "./CSS/Loginform.css"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Loginform = () => {

  const navigate = useNavigate();
  const pw = useRef(null);
  const un = useRef(null);


  const login = () => {
    let username = un.current.value.trim();
    let password = pw.current.value.trim();

    if(username === "Admin" && password == "abc@123"){
      navigate("/");
    }else{
      state = false;
      alert("Login Failed");
    }
  }
  

  const [data,setData] = useState([]);

  
  const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value});
  }

  console.log(data);
  return (
    <div>
      <form method="POST" action="" className="login-frm">
        <div >
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="text_input"
            ref={un}
            onChange={(event)=>inputHandler(event)}

          />
        </div>
        <div >
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="text_input"
            ref = {pw}
            onChange={(event)=>inputHandler(event)}

          />
        </div>
        <input
          type="button"
          value="LOGIN"
          className="btn-login"
          onClick={()=>{login()}}
        />
      </form>
    </div>
  )
}

export default Loginform