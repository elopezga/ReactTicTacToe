import React from 'react';
import ReactDOM from 'react-dom';
import BoardCell from './BoardCell.jsx';
import App from './App.jsx';

var UIController = {
  viewModel: {
    xwins: 0,
    ywins: 0,
    playerTurn: 'X',
    boardCells: [<BoardCell key='1' markType=' ' cellStyle='top-left' exhausted='false' />,
                    <BoardCell key='2' markType=' ' cellStyle='top-center' exhausted='false' />,
                    <BoardCell key='3' markType=' ' cellStyle='top-right' exhausted='false' />,
                    <div key='-1'></div>,
                    <BoardCell key='5' markType=' ' cellStyle='middle-left' exhausted='false' />,
                    <BoardCell key='6' markType=' ' cellStyle='middle-center' exhausted='false' />,
                    <BoardCell key='7' markType=' ' cellStyle='middle-right' exhausted='false' />,
                    <div key='-2'></div>,
                    <BoardCell key='9' markType=' ' cellStyle='bottom-left' exhausted='false' />,
                    <BoardCell key='10' markType=' ' cellStyle='bottom-center' exhausted='false' />,
                    <BoardCell key='11' markType=' ' cellStyle='bottom-right' exhausted='false' />]
  },
  
  changeCurrentPlayer: function(){
    
    if( this.viewModel.playerTurn === 'X' ){
        this.viewModel.playerTurn = 'O';
    }else{
        this.viewModel.playerTurn = 'X';
    }
  },
  
  updateModel: function(model, changes){
    var modelCopy = Object.assign({}, model);
    var updatedModel = Object.assign(modelCopy, changes);
    
    return updatedModel;
  },
  
  boardCellOnClick: function(props){

    // TODO: Reset game board on click
    // TODO: Add point to winner
      
    // One-to-one mapping of boardcell to cellstyle
    var cellClicked = this.viewModel.boardCells.filter( (element) => {return (element.props.cellStyle === props.cellStyle);} )[0];

    if( cellClicked.props.exhausted === 'false' ){
      var index = this.viewModel.boardCells.findIndex( (element) => {return (element.props.cellStyle === props.cellStyle);} );
      this.viewModel.boardCells[index] = <BoardCell key={index+1} markType={this.viewModel.playerTurn} cellStyle={props.cellStyle} exhausted='true' />;
      
      if( this.checkWinOnCurrentPlayer() ){
        this.renderGameFinished();
      }else{
        this.changeCurrentPlayer();
        this.renderApp();
      }
      
      //this.changeCurrentPlayer();
      //this.renderApp();

    }                      
    
  },

  checkWinOnCurrentPlayer: function(){
    var simpleBoard = this.boardCellsToArray();
    var player = this.viewModel.playerTurn;

    var didWin = false;

    // Check horizontal win
    if( simpleBoard[0] === player && simpleBoard[1] === player && simpleBoard[2] == player ){
      didWin = true;
    }

    if( simpleBoard[3] === player && simpleBoard[4] === player && simpleBoard[5] == player ){
      didWin = true;
    }

    if( simpleBoard[6] === player && simpleBoard[7] === player && simpleBoard[8] == player ){
      didWin = true;
    }

    // Check vertical win
    if( simpleBoard[0] === player && simpleBoard[3] === player && simpleBoard[6] == player ){
      didWin = true;
    }

    if( simpleBoard[1] === player && simpleBoard[4] === player && simpleBoard[7] == player ){
      didWin = true;
    }

    if( simpleBoard[2] === player && simpleBoard[5] === player && simpleBoard[8] == player ){
      didWin = true;
    }

    // Check diagonal win
    if( simpleBoard[0] === player && simpleBoard[4] === player && simpleBoard[8] == player ){
      didWin = true;
    }

    if( simpleBoard[2] === player && simpleBoard[4] === player && simpleBoard[6] == player ){
      didWin = true;
    }

    return didWin;
  },

  boardCellsToArray: function(){
    var simpleBoard = new Array();

    this.viewModel.boardCells.forEach( (element) => { 
      // Don't include undefined
      if( element.props.markType ){
        simpleBoard.push(element.props.markType);
      }
    });

    
    return simpleBoard;
  },

  clearBoard: function(){
    // TODO: Clear board for next round
  },
    
  renderApp: function(){
      var appComponent = <App playerTurn={this.viewModel.playerTurn + '\'s turn!'} xwins={this.viewModel.xwins} owins={this.viewModel.ywins}
                  boardCells={this.viewModel.boardCells} cellOnClick={this.boardCellOnClick} />;
      
      ReactDOM.render(appComponent, document.getElementById('app'));
  },

  renderGameFinished: function(){
    var appComponent = <App playerTurn={this.viewModel.playerTurn + ' won!'} xwins={this.viewModel.xwins} owins={this.viewModel.ywins}
                  boardCells={this.viewModel.boardCells} cellOnClick={this.boardCellOnClick} />;
      
      ReactDOM.render(appComponent, document.getElementById('app'));
  }
}

UIController.boardCellOnClick = UIController.boardCellOnClick.bind(UIController);


export default UIController;