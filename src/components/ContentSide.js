import React, {useEffect, useState, useRef} from 'react'

const ContentSide = ({setHanged, setgameover, logedinUser, setmsg, gameover}) => {

    const [getWord, setWord] = useState(null)
    const guessref = useRef()
    const [getPoints, setPoints] = useState(0)


    useEffect(()=> {
        fetch("http://localhost:4000/setWord/" )
            .then(res => res.json())
            .then(data => {
              setWord(data.data)
              console.log(data.data)
            })
    },[])


    function submitguess(){


    fetch("http://localhost:4000/singleGuess/" + guessref.current.value + "/" + logedinUser.useremail )
  .then(res => res.json())
  .then((data) => {
      console.log(data)
      if(!data.error && data.message === "correct"){
          setWord(data.updatedarr)
          setPoints(data.updateduser.userpoints)
          
          
      } else if (!data.error && data.message === "win"){
        setgameover(true)
        setHanged([])
        setmsg("you won this game")
        setPoints(data.updateduser.userpoints)
        setWord(data.updatedarr)
      }
      
      else if(data.error && data.message === "incorrect"){
        setHanged(data.hangmanarr)
        setPoints(data.updateduser.userpoints)
      }
      else if(data.error && data.message === "already guessed"){
        console.log("already guessed")
      }
      else {
        setgameover(true)
        setHanged([])
        setmsg("you lost this game")
      }
  }
  )   
  
  
    }

    function restartgame(){
      fetch("http://localhost:4000/changeword/" )
            .then(res => res.json())
            .then(data => {
              console.log(data)
              setWord(data.newarr)
              setHanged(data.hangmanarr)
              console.log(data.hangmanarr)
              setgameover(false)
            })
    }

    
  return (
    <div className="content">
      
        <div className="wordcontainer">
        {getWord && getWord.map((x, i) => (
            <div className="outerletter">
                <div style={{display: x.visible? "flex" : "none"}}>
                    {x.letter}
                </div>
                
                </div>
        ))}
        </div>
        <div className="inputs">
            <input ref={guessref} type="text" placeholder="guess letter" />
            {gameover ? <button onClick={restartgame}>Try again</button>
            :
            <button onClick={submitguess}>Submit</button>
            }
            
        </div>

        <div>
        <h3>Points: {getPoints}</h3>
      </div>
    </div>
  )
}

export default ContentSide