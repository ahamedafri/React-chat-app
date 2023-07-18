import React from 'react'

function Message() {
  return (
    <div className='message owner'> 
      <div className='messageInfo'>
        <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60' alt=''/>
        <span>just now</span>
      </div>
      <div className='messageContent'>
          <p>hello sdfsd sdsd  sdsds</p>
          <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60' alt=''/>
      </div>
    </div>
  )
}

export default Message