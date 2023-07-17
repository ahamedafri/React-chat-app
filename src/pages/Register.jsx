import React from 'react'
import Avatar from "../img/addAvatar.png"

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
             <span className='logo'>Chit Chat</span>
             <span className='title'>Register</span>
             <form>
                  <input type='text' placeholder='Your Name'/>
                  <input type='email'placeholder='Email'/>
                  <input type='password' placeholder='Password'/>
                  <input style={{display:"none"}} type='file' id="file" />
                  <label htmlFor="file">
                      <img src={Avatar} alt='' />
                      <span>Add an Avatar</span>
                  </label>
                  <button >Sign Up</button>
             </form>
             <p>Already have an Account? Login</p>
      </div>
    </div>
  )
}

export default Register