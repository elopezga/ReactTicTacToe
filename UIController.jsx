var UIController = {
  currentPlayer: 'X',
  
  changeCurrentPlayer: function(){
    if( currentPlayer === 'X' ){
      this.currentPlayer = 'Y';
    }else{
      this.currentPlayer = 'X';
    }
  },
  
  updateModel: function(model, changes){
    var modelCopy = Object.assign({}, model);
    var updatedModel = Object.assign(modelCopy, changes);
    
    return updatedModel;
  },
  
  boardCellOnClick: function(props){
    console.log(props.cellStyle);
    //Elementprops.markType = this.currentPlayer;
    
  }
}

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