import React from 'react';

function PlayerTurn(props){
  var style = {
    display: 'inline-block',
    margin: 'auto'
  };
  
  
  return (<div style={style}>
    <h1>{props.player}'s turn!</h1>
  </div>);
}

export default PlayerTurn;