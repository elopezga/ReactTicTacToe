import React from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import Scoreboard from './Scoreboard.jsx';
import Gameboard from './Gameboard.jsx';
import BoardCell from './BoardCell.jsx';

function App(props){
  // Game logic here (use seperate game logic components)
  // UI created + control here
  var boardCells = [<BoardCell key='1' markType='X' cellStyle='top-left' />,
                    <BoardCell key='2' markType='O' cellStyle='top-center' />,
                    <BoardCell key='3' markType=' ' cellStyle='top-right' />,
                    <div></div>,
                    <BoardCell key='4' markType=' ' cellStyle='middle-left' />,
                    <BoardCell key='5' markType=' ' cellStyle='middle-center' />,
                    <BoardCell key='6' markType=' ' cellStyle='middle-right' />,
                    <div></div>,
                    <BoardCell key='7' markType=' ' cellStyle='bottom-left' />,
                    <BoardCell key='8' markType=' ' cellStyle='bottom-center' />,
                    <BoardCell key='9' markType=' ' cellStyle='bottom-right' />];
  
  return ( <div>
      <PlayerTurn player={props.playerTurn} />
      <Gameboard cellElements={boardCells} />
      <Scoreboard xwins={props.xwins} owins={props.owins} />
    </div>
  );
}

export default App;