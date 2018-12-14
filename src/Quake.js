import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import RegisterTeamForm from './RegisterTeamForm.js';

const request = require('request');

class Quake extends Component {
	makeRequest() {
		request('http://localhost:3001/api/gamers', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });
	}


  render() {
    return (
    	<div className="rel game-block">
          <div className="quake"></div>
          <ButtonRegister form="player" game="quake"/>
          <ButtonCommands game="quake"/>
      </div>
    );
  }
}

export default Quake;