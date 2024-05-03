import React, {useState, useEffect} from 'react'
import api from "../../api/api"
import "./CSS/Signup.css"
import img5 from "./Assets/Images/cupcake.jpg"

function Signup() {
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    name:'',
    age:'',
    gender:'',
    address:'',
    contact:'',
    email:'',
    username:'',
    password:''
  });

  const fetchUser = async()=>{
    const response = await api.get('/signup');
    setUser(response.data);
  }

  useEffect(()=>{
    fetchUser();
  },[]);

  const handleInputChange = (event) =>{
    setFormData({
      ...formData,
      [event.target.name]:value,
    });
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    await api.post('/signup', formData);
    fetchUser();
    setFormData({
    name:'',
    age:'',
    gender:'',
    address:'',
    contact:'',
    email:'',
    username:'',
    password:''
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
              <form className='form'>
                <div className='borderupper'>
                  <div className='mar'>
                
                    <input type='text' id='name' name='name' placeholder='Name' className='txt1' onChange={handleInputChange} />
                
                    <input type='text' id='age' name='age'  placeholder='Age' className='txt1' onChange={handleInputChange} />
                
                    <select placeholder='Gender' className='txt1' onChange={handleInputChange} >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                
                    <textarea placeholder='Address' className='txt1' rows='6' onChange={handleInputChange} ></textarea>
                
                    <input type='text' id='contact' name='contact' placeholder='Contact' className='txt1'onChange={handleInputChange} />
                
                    <input type='email' id='email' name='email' placeholder='Email' className='txt1' onChange={handleInputChange} />
                    </div>
                    </div>
                    <hr color='darkgoldenrod'/>
                    <div className='borderupper'>
                    <div className='mar'>
                
                    <input type='text' id='usrname' name='usrnme' placeholder='Username' className='txt1' onChange={handleInputChange} />
                
                    <input type='password' id='passwd' name='passwd' placeholder='Password' className='txt1' onChange={handleInputChange} />
                
                    <input type='password' id='passwwd' name='passwd' placeholder='Confirm Password'className='txt1'/>
                    </div>
                    </div>
                <div className='subset'>
                  <div className='left1'>
                    <button onSubmit={handleFormSubmit}>Submit</button>
                  </div>
                  <div className='right2'>
                    <button>Reset</button>
                  </div>
                  
                </div>
                                 
              </form>
          </div>
      </div>
    </div>
</>
  )
}


export default Signup