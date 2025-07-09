import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const buttonNames=["All","Songs","Cricket","Football","Sitcoms","trailers","news","wimbeldon","formula1","tennis","Bhajans","kids","stories","podcasts"]
  return (
    <div className='flex'>
      {buttonNames.map((buttonName,index)=>{
        return (<Button key={index} name={buttonName}/>);
      })}

    </div>
  )
}

export default ButtonList