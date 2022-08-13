import React, {useState} from 'react'
import ContentSide from '../components/ContentSide'
import HangMan from '../components/HangMan'

const GamePage = ({logedinUser, setlogedinUser}) => {

  const [getHanged, setHanged] = useState([])
  const [gameover, setgameover] = useState(false)
  const [getmsg, setmsg] = useState("")


  return (
    <div className="gameboard">
        <HangMan getHanged={getHanged} gameover={gameover} getmsg={getmsg}/>
        <ContentSide setHanged={setHanged} setgameover={setgameover} logedinUser={logedinUser} setlogedinUser={setlogedinUser} setmsg={setmsg} gameover={gameover}/>
    </div>
  )
}

export default GamePage