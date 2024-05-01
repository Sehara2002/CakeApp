import React from 'react'
import "./CSS/Signup.css"
import img5 from "./Assets/Images/cupcake.jpg"

function Signup() {
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
                
                    <input type='text' id='name' name='name' placeholder='Name' className='txt1'/>
                
                    <input type='text' id='age' name='age'  placeholder='Age' className='txt1'/>
                
                    <select placeholder='Gender' className='txt1'>
                        <option value={true}>Male</option>
                        <option value={false}>Female</option>
                    </select>
                
                    <textarea placeholder='Address' className='txt1' rows='6'></textarea>
                
                    <input type='text' id='contact' name='contact' placeholder='Contact' className='txt1'/>
                
                    <input type='email' id='email' name='email' placeholder='Email' className='txt1'/>
                    </div>
                    </div>
                    <hr color='darkgoldenrod'/>
                    <div className='borderupper'>
                    <div className='mar'>
                
                    <input type='text' id='usrname' name='usrnme' placeholder='Username' className='txt1'/>
                
                    <input type='password' id='passwd' name='passwd' placeholder='Password' className='txt1'/>
                
                    <input type='password' id='passwwd' name='passwd' placeholder='Confirm Password'className='txt1'/>
                    </div>
                    </div>
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