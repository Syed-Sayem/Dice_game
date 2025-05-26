import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"
import TotalScore from "./components/TotalScore"



function App() {
  const [isGameStarted,setIsgamestarted]=useState(true)

  const toggleGamePlay=()=>{
    setIsgamestarted((prev)=>!prev);
  }
  return <>
  {
    isGameStarted ? <GamePlay/>:<StartGame
    toggle={toggleGamePlay}/>
  }

  </>
}

export default App
