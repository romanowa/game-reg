/* eslint no-unused-expressions: off */

import React, { Component } from 'react';
import { withAlert } from 'react-alert';

const request = require('request');
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

class RegisterTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
      captain: '',
      captainEmail: '',
      player1nickname: '',
      player1email: '',
      player2nickname: '',
      player2email: '',
      player3nickname: '',
      player3email: '',
      player4nickname: '',
      player4email: '',
      player5nickname: '',
      player5email: '',
      player6nickname: '',
      player6email: '',
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
      item.game = this.props.game;
      item.team = this.state.team;
      item.freeForTeam = false
    })
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
        url: `${backendUrl}/api/gamers`,
        body: JSON.stringify(data)
      }, (err, res) => {
        console.log('----- ERR', err)
        console.log('++++++ RES')
          if (err) {
            this.props.alert.show('Something is wrong:(', { type: 'error' })
            console.log(err)
            return reject(err)
          }
          if (JSON.parse(res.body).error && JSON.parse(res.body).error === 'INVALID_TEAM_TITLE') {
            this.props.alert.show('INVALID_TEAM_TITLE', { type: 'error' })
            console.log(err)
            return reject(err)
          }
            this.props.alert.show('Thanks for registration!', { type: 'success' })
            return resolve(res);
        })
    });
  }
  render() {
    const isAbled = (this.state.team &&
      this.state.captain &&
      this.state.captainEmail &&
      this.state.player1nickname &&
      this.state.player1email &&
      this.state.player2nickname &&
      this.state.player2email &&
      this.state.player3nickname &&
      this.state.player3email &&
      this.state.player4nickname &&
      this.state.player4email &&
      this.state.captainEmail.includes('@') &&
      this.state.player1email.includes('@') &&
      this.state.player2email.includes('@') &&
      this.state.player3email.includes('@') &&
      this.state.player4email.includes('@')
      );
    return (
    	<form className="form" onSubmit={this.makeRequest}>
        <span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
        <p className="bold title_header">Team title<span>*</span></p>
        <input
          name="team"
          value={this.state.team}
          onChange={this.handleChange}
          className="form__input title"
          required></input>
        <div>
          <p className="bold header">Team captain<span>*</span></p>
          <p className="inline">
            Nickname
            <input
            name="captain"
            value={this.state.captain}
            onChange={this.handleChange}
            className="form__input field"></input>
          </p>
          <p className="inline">
            Email
            <input
            name="captainEmail"
            type="email"
            value={this.state.captainEmail}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
          </p>
        </div>
        <div>
          <p className="bold header">Player 1<span>*</span></p>
          <p className="inline">Nickname
          <input
            name="player1nickname"
            value={this.state.player1nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player1email"
            value={this.state.player1email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
        <div>
          <p className="bold header">Player 2<span>*</span></p>
          <p className="inline">Nickname
          <input
            name="player2nickname"
            value={this.state.player2nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player2email"
            value={this.state.player2email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
        <div>
          <p className="bold header">Player 3<span>*</span></p>
          <p className="inline">Nickname
          <input
            name="player3nickname"
            value={this.state.player3nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player3email"
            value={this.state.player3email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
        <div>
          <p className="bold header">Player 4<span>*</span></p>
          <p className="inline">Nickname
          <input
            name="player4nickname"
            value={this.state.player4nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player4email"
            value={this.state.player4email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
        <div>
          <p className="bold header">Replacement players</p>
          <p className="bold header">Player 5</p>
          <p className="inline">Nickname
          <input
            name="player5nickname"
            value={this.state.player5nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player5email"
            value={this.state.player5email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
        <div>
          <p className="bold header">Player 6</p>
          <p className="inline">Nickname
          <input
            name="player6nickname"
            value={this.state.player6nickname}
            onChange={this.handleChange}
            className="form__input field"></input>
            </p>
          <p className="inline">Email
          <input
            type="email"
            name="player6email"
            value={this.state.player6email}
            onChange={this.handleChange}
            className="form__input field"
            pattern="\S+@godeltech.com$"
            placeholder="n.surname@godeltech.com"></input>
            </p>
        </div>
  			<button disabled={!isAbled} className={"form__register" + (!isAbled ? ' disabled' : '')} type="submit">Register</button>
    	</form>
    );
  }
}

export default withAlert(RegisterTeamForm);