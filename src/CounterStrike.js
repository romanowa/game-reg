import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import RegisterTeamForm from './RegisterTeamForm.js';

const request = require('request');

class CounterStrike extends Component {
	makeRequest() {
		request('http://localhost:3001/api/gamers', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
	}
  render() {
    return (
    	<div className="rel game-block">
          <div className="cs16"></div>
          <ButtonRegister form="team"/>
          <ButtonCommands />
        </div>
    );
  }
}

export default CounterStrike;









