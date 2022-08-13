import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router'
const LoginPage = ({setlogedinUser}) => {

const emailLogRef = useRef()
const passLogRef = useRef()
const [message, setMessage] = useState("")
const nav = useNavigate()

function validateUser(){

  fetch("http://localhost:4000/logUser/" + emailLogRef.current.value + "/" + passLogRef.current.value )
            .then(res => res.json())
            .then(data => {
                
            if(data.error){
            console.log(data.message)
            setMessage(data.message)
            } else {
                setlogedinUser(data.result)
                nav("/game")
            }
                
            })
}

  return (
    <div className="login">
        <input type="text" ref={emailLogRef} placeholder="email"/>
      <input type="text" ref={passLogRef} placeholder="password"/>
      <button onClick={validateUser}>Login</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default LoginPage