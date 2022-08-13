import React, {useRef} from 'react'

const RegisterPage = () => {

const emailRef = useRef()
const passOneRef = useRef()
const passTwoRef = useRef()

function registerUser(){
    const newUser = {
        email : emailRef.current.value,
        passOne: passOneRef.current.value,
        passTwo: passTwoRef.current.value
    }

    console.log(newUser)

const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newUser)

    }

    fetch("http://localhost:4000/addUser", options)
  .then(res => res.json())
  .then((data) => {
console.log(data)
  })    
}

  return (
    <div className="register">
        <input type="text" ref={emailRef}  placeholder="email"/>
        <input type="text" ref={passOneRef} placeholder="password"/>
        <input type="text"  ref={passTwoRef} placeholder="repeat password"/>
        <button onClick={registerUser}>Register</button>
      
    </div>
  )
}

export default RegisterPage