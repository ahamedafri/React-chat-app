import React from 'react'
import Avatar from "../img/addAvatar.png"

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Chit Chat</span>
        <div className='user'>
        <img src={Avatar} alt='' />
        <span>Jhon</span>
        <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar