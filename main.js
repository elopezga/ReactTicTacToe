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

var gameViewModel = {
  xwins: 0,
  ywins: 0,
  playerTurn: 'X',
  boardCells: [<BoardCell key='1' markType=' ' cellStyle='top-left' />,
                    <BoardCell key='2' markType=' ' cellStyle='top-center' />,
                    <BoardCell key='3' markType=' ' cellStyle='top-right' />,
                    <div></div>,
                    <BoardCell key='4' markType=' ' cellStyle='middle-left' />,
                    <BoardCell key='5' markType=' ' cellStyle='middle-center' />,
                    <BoardCell key='6' markType=' ' cellStyle='middle-right' />,
                    <div></div>,
                    <BoardCell key='7' markType=' ' cellStyle='bottom-left' />,
                    <BoardCell key='8' markType=' ' cellStyle='bottom-center' />,
                    <BoardCell key='9' markType=' ' cellStyle='bottom-right' />]
};

var updatedModel = UIController.updateModel(gameViewModel, {playerTurn: 'Y'});


var appComponent = <App playerTurn={updatedModel.playerTurn} xwins={gameViewModel.xwins} owins={gameViewModel.ywins}
                  boardCells={gameViewModel.boardCells} cellOnClick={UIController.boardCellOnClick} />;

console.log('player turn: ' + appComponent.props.playerTurn);

ReactDOM.render( appComponent, document.getElementById('app'));

