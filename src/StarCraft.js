import React, { Component } from 'react';
import ButtonRegister from './ButtonRegister.js';
import ButtonCommands from './ButtonCommands.js';
import RegisterPlayerForm from './RegisterPlayerForm.js';

const request = require('request');

class StarCraft extends Component {
	makeRequest() {
		request('http://localhost:3001/api/gamers', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });
	}

  render() {
    return (
    	<div className="rel game-block">
          <div className="sc"></div>
          <ButtonRegister form="player"/>
          <ButtonCommands />
      </div>
    );
  }
}

export default StarCraft;