import React, {useEffect, useState} from 'react'

const LeaderBoardPage = () => {

  const [users, setUsers] = useState([])

   useEffect(()=> {
        fetch("http://localhost:4000/showall/" )
            .then(res => res.json())
            .then(data => {
              setUsers(data.sort((a, b) => b.userpoints - a.userpoints))
              console.log(data)
            })
    },[])


  return (
    <div className="scoreboard">

      {users.map((x, i) => (
        <div className="singlescore">
          <div>{i + 1}</div>
          <div>{x.useremail}</div>
          <div>{x.userpoints}</div>
        </div>
      ))}
    </div>
  )
}

export default LeaderBoardPage