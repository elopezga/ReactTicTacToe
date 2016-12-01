import React from 'react';

function Scoreboard(props){
  var style = {
    display: 'inline-block',
    margin: 'auto'
  };
  
  var xScoreStyle = {
    display: 'inline-block',
    margin: 'auto',
    borderRight: '1px solid black',
    padding: '0px 20px'
  }
  
  var yScoreStyle = {
    display: 'inline-block',
    margin: 'auto',
    borderLeft: '1px solid black',
    padding: '0px 20px'
  }
  
  
  return (<div style={style}>
    <div style={xScoreStyle}>
      <h1>X wins</h1>
      <h1>{props.xwins}</h1>
    </div>

    <div style={yScoreStyle}>
      <h1>O wins</h1>
      <h1>{props.owins}</h1>
    </div>
    
    
    
  </div>);
}

export default Scoreboard;