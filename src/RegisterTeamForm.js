import React, { Component } from 'react';
import Popup from './Popup.js';


const request = require('request');


class RegisterTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      captain: null,
      captainEmail: null,
      player1nickname: null,
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
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
	makeRequest() {
    this.props.reg()
    const data = {
      game: this.props.game,
      title: this.state.title,
      captain: this.state.captain,
      captainEmail: this.state.captainEmail,
      player1nickname: this.state.player1nickname,
      player1email: this.state.player1email,
      player2nickname: this.state.player2nickname,
      player2email: this.state.player2email,
      player3nickname: this.state.player3nickname,
      player3email: this.state.player3email,
      player4nickname: this.state.player4nickname,
      player4email: this.state.player4email,
      player5nickname: this.state.player5nickname,
      player5email: this.state.player5email,
      player6nickname: this.state.player6nickname,
      player6email: this.state.player6email,
    }
 /*   request.post({
      headers: {'content-type' : 'application/json'},
      url: 'http://localhost:3001/api/teams',
      body: JSON.stringify({game: this.props.game, title: this.state.title, captain: this.state.captain})
    }, (err, res, body) => {
      console.log('@@@@@', err)
        if (err) {
          alert(`Something wrong: ${err}`);
        } else {
          alert('SUCCESS!');
        }

      });*/
      return new Promise((resolve, reject) => {
        request.post({
          headers: {'content-type' : 'application/json'},
          url: 'http://localhost:3001/api/teams',
          //body: JSON.stringify({game: this.props.game, title: this.state.title, captain: this.state.captain})
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
          name="title"
          value={this.state.title}
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