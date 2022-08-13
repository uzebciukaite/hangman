import React, {useState} from 'react'

const HangMan = ({getHanged, gameover, getmsg}) => {

  console.log(getHanged)
  console.log(gameover)
    

    

    
  return (
    <div className="hmcont">
      {getHanged.map((x ,i) => (
        <div className={x}></div>
      ))}

      {gameover && <h1>{getmsg}</h1>}
        
        
        
    </div>
  )
}

export default HangMan