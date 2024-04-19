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
              <form>
                
                    <input type='text' id='name' name='name' placeholder='Name'/>
                
                    <input type='text' id='age' name='age' value='Age' placeholder='Age'/>
                
                    <select placeholder='Gender'>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select>
                
                    <textarea placeholder='Address'></textarea>
                
                    <input type='text' id='contact' name='contact' placeholder='Contact'/>
                
                    <input type='email' id='email' name='email' placeholder='Email'/>
                    <hr/>
                
                    <input type='text' id='usrname' name='usrnme' placeholder='Username'/>
                
                    <input type='password' id='passwd' name='passwd' placeholder='Password'/>
                
                    <input type='password' id='passwwd' name='passwd' placeholder='Confirm Password'/>
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