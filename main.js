import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//import HelloWorld from './HelloWorld.jsx';
//import PlayerTurn from './PlayerTurn.jsx';


ReactDOM.render(<App playerTurn='X' xwins='2' owins='1' />, document.getElementById('app'));
//ReactDOM.render(<HelloWorld />, document.getElementById('app'));
//ReactDOM.render(<PlayerTurn player='X' />, document.getElementById('app'));
