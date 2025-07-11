import React from 'react'

const ChatMessage = (props) => {

    const {message}=props;
  return (
    <div className='p-1 mt-2 flex items-center bg-gray-50 rounded-lg'>
       <img
          className="h-6"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user-logo"
        />
        <span><h1 className='mr-2 font-bold text-lg'>{message.username}</h1></span>
        <span><p className='text-sm'></p>{message.usermessage}</span> 
    </div>
  )
}

export default ChatMessage