import React from 'react'

const Button = (props) => {
    const {name}=props
  return (
    <div>
        <button className='rounded-lg bg-gray-300 px-4 py-2 m-2 cursor-pointer'>{name}</button>
    </div>
  )
}

export default Button