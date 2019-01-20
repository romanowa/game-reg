import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import ButtonRules from './ButtonRules.js';

class StarCraft extends Component {
  render() {
    return (
    	<div className="rel game-block">
          <div className="sc"></div>
          <ButtonRegister form="player" game="starcraft"/>
          <ButtonCommands game="starcraft"/>
          <ButtonRules game="StarCraft2"/>
      </div>
    );
  }
}

export default StarCraft;