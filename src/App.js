import React, { Component } from 'react';
import './App.css';

import CounterStrike from './CounterStrike.js';
import Dota from './Dota.js';
import Quake from './Quake.js';
import StarCraft from './StarCraft.js';
import ButtonRegisterPlayer from './ButtonRegisterPlayer.js';
import ButtonPlayersWithoutTeam from './ButtonPlayersWithoutTeam.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="flex-container">
            <ButtonRegisterPlayer />
            <ButtonPlayersWithoutTeam />
            <img src="http://www.godeltech.com/wp-content/themes/godeltech/img/logo.svg" alt="Logo" className="logo_img flex-item"></img>
          </div>
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
