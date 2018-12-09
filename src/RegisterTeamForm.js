/* eslint no-unused-expressions: off */

import React, { Component } from 'react';
import Popup from './Popup.js';


const request = require('request');


class RegisterTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: null,
      captain: null,
      captainEmail: null,
      playerNickname1: null,
      player1email: null,
      player2nickname: null,
      player2email: null,
      player3nickname: null,
      player3email: null,
      player4nickname: null,
      player4email: null,
      player5nickname: null,
      player5email: null,
      player6nickname: null,
      player6email: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
    this.prepareForRequest = this.prepareForRequest.bind(this);
    this.makeArray = this.makeArray.bind(this)
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  prepareForRequest(array) {
    array.forEach(item => {
      item.game = this.props.game,
      item.team = this.state.team,
      item.freeForTeam = false
    })
    console.log('///////////////', array)
    return array
  }

  makeArray() {
    return [
      {
        nickname: this.state.captain,
        email: this.state.captainEmail,
        captain: true
      },
      {
        nickname: this.state.player1nickname,
        email: this.state.player1email,
        captain: false
      },
      {
        nickname: this.state.player2nickname,
        email: this.state.player2email,
        captain: false
      },
      {
        nickname: this.state.player3nickname,
        email: this.state.player3email,
        captain: false
      },
      {
        nickname: this.state.player4nickname,
        email: this.state.player4email,
        captain: false
      },
      {
        nickname: this.state.player5nickname,
        email: this.state.player5email,
        captain: false
      },
      {
        nickname: this.state.player6nickname,
        email: this.state.player6email,
        captain: false
      }
    ]
  }
  
	makeRequest() {
    const data = this.prepareForRequest(this.makeArray())
    this.props.reg()
      return new Promise((resolve, reject) => {
        request.post({
          headers: {'content-type' : 'application/json'},
          url: 'http://localhost:3001/api/gamers',
          body: JSON.stringify(data)
        }, (err, res) => {
          console.log('@@@@@', err)
            if (err) {
              alert(`Something wrong: ${err}`);
              return reject(err)
            }
              alert('SUCCESS!');
              return <Popup />
          })
      });
  }
  render() {
    return (
    	<div>
        <span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
        <p>Team title</p>
        <input
          name="team"
          value={this.state.team}
          onChange={this.handleChange}></input>
        <div>
          <p>Team captain</p>
          <p>Nickname</p>
          <input
            name="captain"
            value={this.state.captain}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            name="captainEmail"
            type="email"
            value={this.state.captainEmail}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Player 1</p>
          <p>Nickname</p>
          <input
            name="player1nickname"
            value={this.state.player1nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player1email"
            value={this.state.player1email}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Player 2</p>
          <p>Nickname</p>
          <input
            name="player2nickname"
            value={this.state.player2nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player2email"
            value={this.state.player2email}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Player 3</p>
          <p>Nickname</p>
          <input
            name="player3nickname"
            value={this.state.player3nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player3email"
            value={this.state.player3email}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Player 4</p>
          <p>Nickname</p>
          <input
            name="player4nickname"
            value={this.state.player4nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player4email"
            value={this.state.player4email}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Replacement players</p>
          <p>Player 5</p>
          <p>Nickname</p>
          <input
            name="player5nickname"
            value={this.state.player5nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player5email"
            value={this.state.player5email}
            onChange={this.handleChange}></input>
        </div>
        <div>
          <p>Player 6</p>
          <p>Nickname</p>
          <input
            name="player6nickname"
            value={this.state.player6nickname}
            onChange={this.handleChange}></input>
          <p>Email</p>
          <input
            type="email"
            name="player6email"
            value={this.state.player6email}
            onChange={this.handleChange}></input>
        </div>
  			<button onClick={this.makeRequest}>Register</button>
    	</div>
    );
  }
}

export default RegisterTeamForm;