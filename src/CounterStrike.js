import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import ButtonRules from './ButtonRules.js';

class CounterStrike extends Component {
  render() {
    return (
    	<div className="rel game-block">
          <div className="cs16"></div>
          <ButtonRegister form="team" game="counterstrike"/>
          <ButtonCommands game="counterstrike"/>
          <ButtonRules game="Counter-Strike"/>
        </div>
    );
  }
}

export default CounterStrike;









