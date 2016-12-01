import React from 'react';

function BoardCell(props){
  // BoardCell is responsible for click events
  // Allow to specify cell pre-formats i.e top-left, center-left, etc.
  
  var style = {
    display: 'inline-block',
    width: '100px',
    textAlign: 'center',
    whiteSpace: 'pre'
  };
  
  var applyStyle = Object.assign({}, style);
  applyStyle = Object.assign(applyStyle, chooseStyle(props.cellStyle));
  
  return (<div style={applyStyle}>
      <h1>{props.markType}</h1>
    </div>);
}

function chooseStyle(styleString){
  var topLeftStyle = {
    borderBottom: '1px solid black',
    borderRight: '1px solid black'
  };
  
  var topCenterStyle = {
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    borderLeft: '1px solid black'
  };
  
  var topRightStyle = {
    borderBottom: '1px solid black',
    borderLeft: '1px solid black'
  };
  
  var middleLeftStyle = {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
  };
  
  var middleCenterStyle = {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
    borderLeft: '1px solid black'
  };
  
  var middleRightStyle = {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderBottom: '1px solid black'
  };
  
  var bottomLeftStyle = {
    borderTop: '1px solid black',
    borderRight: '1px solid black'
  };
  
  var bottomCenterStyle = {
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  };
  
  var bottomRightStyle = {
    borderTop: '1px solid black',
    borderLeft: '1px solid black'
  };
  
  if( styleString === 'top-left' ){
    return topLeftStyle;
  }else if( styleString === 'top-center' ){
    return topCenterStyle;
  }else if( styleString === 'top-right' ){
    return topRightStyle;
  }else if( styleString === 'middle-left' ){
    return middleLeftStyle;
  }else if( styleString === 'middle-center' ){
    return middleCenterStyle;
  }else if( styleString === 'middle-right' ){
    return middleRightStyle;
  }else if( styleString === 'bottom-left' ){
    return bottomLeftStyle;
  }else if( styleString === 'bottom-center' ){
    return bottomCenterStyle;
  }else if( styleString === 'bottom-right' ){
    return bottomRightStyle;
  }else{
    return {};
  }
  
}

export default BoardCell;