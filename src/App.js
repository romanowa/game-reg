import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import CounterStrike from './CounterStrike.js';
import Dota from './Dota.js';
import Quake from './Quake.js';
import StarCraft from './StarCraft.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.godeltech.com/wp-content/themes/godeltech/img/logo.svg" alt="Logo" className="logo-img"></img>
        </header>
        <CounterStrike />
        <Dota />
        <Quake />
        <StarCraft />
      </div>
    );
  }
}

export default App;
