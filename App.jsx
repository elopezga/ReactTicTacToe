import React from 'react';
import PlayerTurn from './PlayerTurn.jsx';
import Scoreboard from './Scoreboard.jsx';
import Gameboard from './Gameboard.jsx';
import BoardCell from './BoardCell.jsx';

function App(props){

  function addOnClickCallback(element, onClickCallback){
    var newProps = Object.assign({},element.props);
    newProps.onClick = onClickCallback;
    return React.cloneElement(element, newProps);
  }
  
  var clickableBoardCells = props.boardCells.map( x => addOnClickCallback(x,props.cellOnClick) );
  
  return ( <div>
      <PlayerTurn player={props.playerTurn} />
      <Gameboard cellElements={clickableBoardCells} />
      <Scoreboard xwins={props.xwins} owins={props.owins} />
    </div>
  );
}

export default App;