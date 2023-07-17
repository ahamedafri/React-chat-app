import React from 'react'
import Avatar from "../img/addAvatar.png"


function Search() {
  return (
   <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Find a user' />
        </div>

        <div className='userChat'>
           <img src={Avatar} alt='' />
           <div className='userChatInfo'>
               <span>Jane</span>
           </div>
        </div>
   </div> 
  )
}

export default Search