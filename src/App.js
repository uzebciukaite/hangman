import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import Toolbar from './components/Toolbar';
import GamePage from './pages/GamePage';
import LeaderBoardPage from './pages/LeaderBoardPage';




function App() {

const [logedinUser, setlogedinUser] = useState(null)


  return (



<div className="App"> 
<BrowserRouter>
<Toolbar setlogedinUser={setlogedinUser}/>
<Routes>
  
 <Route path="/" element={<RegisterPage />}/>
 
 <Route path="/login" element={<LoginPage  setlogedinUser={setlogedinUser}/>}/>
 <Route path="/game" element={<GamePage logedinUser={logedinUser} 
 setlogedinUser={setlogedinUser} />}/>
 <Route path="/leaderboard" element={<LeaderBoardPage />}/>
 



 

 
 


  
</Routes>

</BrowserRouter>

  


</div>






    
  );
}

export default App;
