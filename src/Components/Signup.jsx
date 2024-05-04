import React, {useState} from 'react'
import api from "../../api/api"
import "./CSS/Signup.css"
import { useNavigate } from 'react-router-dom'
import img5 from "./Assets/Images/cupcake.jpg"
import axios from 'axios'

function Signup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState('Male');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //message
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = () =>{
    axios
    .post('http://localhost:8000/signup', {name,age,gender,address,contact,email,username,password})
    .then(response => {
      setMessage(response.data.message);
      const {name, age, gender, address, contact, email, username, password, token} = response.data;
      localStorage.setItem('name',name);
      localStorage.setItem('age',age);
      localStorage.setItem('gender',gender);
      localStorage.setItem('address',address);
      localStorage.setItem('contact',contact);
      localStorage.setItem('email',email);
      localStorage.setItem('username',username);
      localStorage.setItem('password',password);
      localStorage.setItem('token',token);
      navigate('/login');
    })
    .catch(error =>{
      console.error(error);
      setMessage("Error try again later");
    });
  };
  return (
    <><div className='container'>
          <div className='row'>
              <div className='column'>
                <img src={img5} alt="imageinpage" />
              </div>
              <div className='column'>
                <h1 className='title'>SignUp</h1>
                <hr color='darkgoldenrod'/>
              
                <div className='borderupper'>
                  <div className='mar'>
                
                    <input type='text' id='name' name='name' placeholder='Name' className='txt1' value={name} onChange={e=>setName(e.target.value)}/>
                
                    <input type='text' id='age' name='age'  placeholder='Age' className='txt1'value={age} onChange={e=>setAge(e.target.value)}/>
                
                    <select placeholder='Gender' className='txt1' value={gender} onChange={e=>setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                
                    <textarea placeholder='Address' className='txt1' rows='6' value={address} onChange={e=>setAddress(e.target.value)}></textarea>
                
                    <input type='text' id='contact' name='contact' placeholder='Contact' className='txt1' value={contact} onChange={e=>setContact(e.target.value)}/>
                
                    <input type='email' id='email' name='email' placeholder='Email' className='txt1' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    </div>
                    <hr color='darkgoldenrod'/>
                    <div className='borderupper'>
                    <div className='mar'>
                
                    <input type='text' id='usrname' name='usrnme' placeholder='Username' className='txt1' value={username} onChange={e=>setUsername(e.target.value)}/>
                
                    <input type='password' id='passwd' name='passwd' placeholder='Password' className='txt1' value={password} onChange={e=>setPassword(e.target.value)}/>
                
                    <input type='password' id='passwwd' name='passwd' placeholder='Confirm Password'className='txt1'/>
                    </div>
                    </div>
                <div className='subset'>
                  <div className='left1'>
                    <button onClick={handleSignup}>Submit</button>
                  </div>
                  <div className='right2'>
                  <button onClick={handleSignup}>Reset</button>
                  </div>
                  
                  
                </div>
                                 
              
              
          </div>
      </div>
    </div>
</>
  );
}


export default Signup