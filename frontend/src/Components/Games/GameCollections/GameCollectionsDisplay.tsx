import { useState } from "react";
import { game } from "./GameCollectionsLogic"
import GameInfoDisplay from "./GameInfoDisplay";

type gameProps = {
  data: game[];
}

function GameCollectionsDisplay({data }: gameProps) {
  const [filterString, setFilterString] = useState("");
  const [checkToggle, setCheckToggle] = useState(false);
  const [gameId, setGameId] = useState(-1);

  return (
    <>
      <span>Game filter: </span><input onInput={(e)=>{
        setFilterString(e.currentTarget.value);
      }} type="text"></input>

      <div onClick={() => {
            if (checkToggle) {setGameId(-1); setCheckToggle(!checkToggle);}
      }}>
        <ul className="games-list-grid">
          {
            data
              .sort((game0, game1) => {return game0.title.localeCompare(game1.title); })
              .filter((game) => {return game.title.toLowerCase().includes(filterString); })
              .map((game) => {
              return (
                <li key={game.gameId} className="game-tile">
                  <img src={game.gameImageUrl} alt={game.title} onClick={() => {
                      if (!checkToggle) {setGameId(game.gameId); setCheckToggle(!checkToggle);}
                  }}/>
                  
                  {(gameId == game.gameId) && <GameInfoDisplay data={game}/>}
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default GameCollectionsDisplay