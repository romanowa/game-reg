import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import ButtonRules from './ButtonRules.js';

class Quake extends Component {
  render() {
    return (
    	<div className="rel game-block">
          <div className="quake"></div>
          <ButtonRegister form="player" game="quake"/>
          <ButtonCommands game="quake"/>
          <ButtonRules game="Quake"/>
      </div>
    );
  }
}

export default Quake;