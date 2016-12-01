import React from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import Scoreboard from './Scoreboard.jsx';
import Gameboard from './Gameboard.jsx';
import BoardCell from './BoardCell.jsx';

function App(props){
  // Game logic here (use seperate game logic components)
  // UI created + control here
  var boardCells = [<BoardCell key='1' markType='X' />, <BoardCell key='2' markType='O' />, <BoardCell key='3' markType=' ' />];
  
  return ( <div>
      <PlayerTurn player={props.playerTurn} />
      <div>The game board</div>
      <Gameboard cellElements={boardCells} />
      <Scoreboard xwins={props.xwins} owins={props.owins} />
    </div>
  );
}

export default App;