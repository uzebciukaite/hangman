import React from 'react'
import { useNavigate } from 'react-router'


const Toolbar = ({ setlogedinUser}) => {

const nav = useNavigate()

function loguserout(){
  
  setlogedinUser(null)
  nav("/login")

}


  return (
    <div className="toolbar">
        <button onClick={() => nav("/login")}>login</button>
        <button onClick={() => nav("/")} >register</button>
        <button onClick={loguserout}>logout</button>
        <button onClick={() => nav("/game")}>Play game</button>
        <button onClick={() => nav("/leaderboard")}>See leader board</button>
    </div>
  )
}

export default Toolbar