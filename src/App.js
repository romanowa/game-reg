import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import quake from './quake.jpg';
import './App.css';

import Button from './Button.js';
import RegisterPlayerForm from './RegisterPlayerForm.js';

class App extends Component {
  handleClick (event) {
    var x = document.getElementById("myDIV");
    
    if (x.style.display === "none") {
      console.log('============');
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
        
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.godeltech.com/wp-content/themes/godeltech/img/logo.svg" alt="Logo" class="logo-img"></img>
        </header>
        <div className="game-block cs16">
          <p>Counter-strike</p>
          <button>Register</button>
          <button>Show list of commands</button>
          <RegisterPlayerForm />
        </div>
        <div className="game-block dota2"></div>
          <p>Dota2</p>
          <button className="register">Register</button>
          <button className="list">Show list of commands</button>
          <Button />
      
        <div className="game-block quake">
          <p>Quake</p>
          <button onClick={this.handleClick}>Register</button>
          <button>Show list of commands</button>
        </div>
        <div className="game-block sc" id="myDIV">
          <p>Starcraft 2</p>
          <button>Register</button>
          <button>Show list of commands</button>
        </div>
      </div>
    );
  }
}

export default App;
