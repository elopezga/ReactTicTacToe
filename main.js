import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import BoardCell from './BoardCell.jsx';
import UIController from './UIController.jsx';


var xturn = function(){
    // Note: props is binded to this keyword in BoardCell
    console.log('yoo add to score');
    xwins += 1;
  
    ReactDOM.render(<App playerTurn='X' xwins={xwins} owins='1' boardCells={boardCells} cellOnClick={xturn} />, document.getElementById('app'));
  };


function updateCell(viewModel){
  var updatedViewModel = Object.assign({},viewModel);
  var cellLocation = this.cellStyle;
  
  // Use app props to construct viewModel instead
  
  // Update the board cell here
  // Create array with new BoardCell's with that one modified (Deep copy)
  // call render with this new view model
  
  // Problem!! viewModel not saved - this means data will reset. Maybe
  // construc a viewModel from the view first and then modify accordingly
}


var appComponent = <App playerTurn={UIController.viewModel.playerTurn + '\'s turn!'} xwins={UIController.viewModel.xwins} owins={UIController.viewModel.ywins}
                  boardCells={UIController.viewModel.boardCells} cellOnClick={UIController.boardCellOnClick} />;

console.log('player turn: ' + appComponent.props.playerTurn);

ReactDOM.render( appComponent, document.getElementById('app'));

