import React from 'react';

function BoardCell(props){
  // BoardCell is responsible for click events
  // Allow to specify cell pre-formats i.e top-left, center-left, etc.
  
  var style = {
    display: 'inline-block',
    width: '100px',
    textAlign: 'center',
    border: '1px solid black',
    whiteSpace: 'pre'
  };
  
  return (<div style={style}>
      <h1>{props.markType}</h1>
    </div>);
}

export default BoardCell;