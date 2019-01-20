import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import ButtonRules from './ButtonRules.js';

class Dota extends Component {
  render() {
    return (
    	<div className="rel game-block">
          <div className="dota2"></div>
          <ButtonRegister form="team" game="dota"/>
          <ButtonCommands game="dota"/>
          <ButtonRules game="Dota2"/>
      </div>
    );
  }
}

export default Dota;