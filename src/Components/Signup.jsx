import React from 'react'
import "./CSS/Signup.css"
import img5 from "./Assets/Images/signuppage.png"

function Signup() {
  return (
    <><div className='container'>
          <div className='row'>
              <div className='column'>
                <img src={img5} alt="imageinpage" />
              </div>
              <div className='column'>
                <h1 className='title'>SignUp</h1>
                <hr/>
              <form className='form'>
                
                    <input type='text' id='name' name='name' placeholder='Name' className='txt'/>
                
                    <input type='text' id='age' name='age'  placeholder='Age' className='txt'/>
                
                    <select placeholder='Gender' className='txt'>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select>
                
                    <textarea placeholder='Address' className='txt'></textarea>
                
                    <input type='text' id='contact' name='contact' placeholder='Contact' className='txt'/>
                
                    <input type='email' id='email' name='email' placeholder='Email' className='txt'/>
                    <hr/>
                
                    <input type='text' id='usrname' name='usrnme' placeholder='Username' className='txt'/>
                
                    <input type='password' id='passwd' name='passwd' placeholder='Password' className='txt'/>
                
                    <input type='password' id='passwwd' name='passwd' placeholder='Confirm Password'className='txt'/>
                <div className='subset'>
                  <div className='left1'>
                    <button>Submit</button>
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