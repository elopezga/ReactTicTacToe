import React from 'react';

function Gameboard(props){
  // Create cell elements array (Gameboard is responsible for how the cells displayed)
  var cellElements = props.cellElements.map( (element) => {return element;} ) ;
  return (<div>
    {cellElements}
  </div>);
}


export default Gameboard;