import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import quake from './quake.jpg';
import './App.css';

import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import RegisterPlayerForm from './RegisterPlayerForm.js';

class App extends Component {
  handleClick (event) {
    var x = document.getElementById("myDIV");
    console.log('============', x.style.display);

    if (x.style.display === "none") {

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
        <div className="rel game-block">
          <div className="cs16"></div>
          <ButtonRegister />
          <ButtonCommands />
        </div>
        <div className="rel game-block">
          <div className="dota2"></div>
          <ButtonRegister onClick={this.handleClick}/>
          <RegisterPlayerForm />
          <ButtonCommands />
        </div>

        <div className="rel game-block">
          <div className="quake"></div>
          <ButtonRegister />
          <ButtonCommands />
        </div>
        <div className="rel game-block">
          <div className="sc"></div>
          <ButtonRegister />
          <ButtonCommands />
        </div>
      </div>
    );
  }
}

export default App;
