import React from 'react'


function Login() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
             <span className='logo'>Chit Chat</span>
             <span className='title'>Login</span>
             <form>
                  <input type='email'placeholder='Email'/>
                  <input type='password' placeholder='Password'/>
                  
                  
                  <button >Sign in</button>
             </form>
             <p>You Don't have an Account? Register</p>
      </div>
    </div>
  )
}

export default Login