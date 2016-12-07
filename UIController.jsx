import React from 'react';
import ReactDOM from 'react-dom';
import BoardCell from './BoardCell.jsx';
import App from './App.jsx';

var UIController = {
  viewModel: {
    xwins: 0,
    ywins: 0,
    playerTurn: 'X',
    boardCells: [<BoardCell key='1' markType=' ' cellStyle='top-left' />,
                    <BoardCell key='2' markType=' ' cellStyle='top-center' />,
                    <BoardCell key='3' markType=' ' cellStyle='top-right' />,
                    <div key='-1'></div>,
                    <BoardCell key='5' markType=' ' cellStyle='middle-left' />,
                    <BoardCell key='6' markType=' ' cellStyle='middle-center' />,
                    <BoardCell key='7' markType=' ' cellStyle='middle-right' />,
                    <div key='-2'></div>,
                    <BoardCell key='9' markType=' ' cellStyle='bottom-left' />,
                    <BoardCell key='10' markType=' ' cellStyle='bottom-center' />,
                    <BoardCell key='11' markType=' ' cellStyle='bottom-right' />]
  },
  
  changeCurrentPlayer: function(){
    /*
    if( currentPlayer === 'X' ){
      this.currentPlayer = 'Y';
    }else{
      this.currentPlayer = 'X';
    }*/
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
      
    // TODO Once cell has been clicked, cannot 'click again'
    var index = this.viewModel.boardCells.findIndex( (element) => {return (element.props.cellStyle === props.cellStyle);} );
      
    this.viewModel.boardCells[index] = <BoardCell key={index+1} markType={this.viewModel.playerTurn} cellStyle={props.cellStyle} />;
      
    this.changeCurrentPlayer();
    this.renderApp();
                           
    
  },
    
  renderApp: function(){
      var appComponent = <App playerTurn={this.viewModel.playerTurn} xwins={this.viewModel.xwins} owins={this.viewModel.ywins}
                  boardCells={this.viewModel.boardCells} cellOnClick={this.boardCellOnClick} />;
      
      ReactDOM.render(appComponent, document.getElementById('app'));
  }
}

UIController.boardCellOnClick = UIController.boardCellOnClick.bind(UIController);


export default UIController;

/*
import ReactDOM from 'react-dom';


var UIController = {
  updateWins: function(model){
    var updatedModel = Object.assign({}, model);
  },
  
  updateCell: function(model){
    var updatedModel = Object
  },
  
  updatePlayerTurn: function(model){
    
  },
  
  render: function(){
    ReactDom.render( <App playerTurn=? xwins=? owins=? boardCells=? cellOnClick=? />, document.getElementById('app'));
  }
}*/