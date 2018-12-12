import React, { Component } from 'react';

const request = require('request');

class RegisterPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null,
      email: null
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
		request.post({
      headers: {'content-type' : 'application/json'},
      url: 'http://localhost:3001/api/gamers',
      body: JSON.stringify({
        game: this.props.game,
        nickname: this.state.nickname,
        email: this.state.email,
        captain: false,
        freeForTeam: false,
      })
    }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        console.log('%%%%%%%%%%%%%%', res);
      });
	}
  render() {
     const isAbled = (this.state.nickname && this.state.email); 
    return (
    	<form onSubmit={this.makeRequest}>
        <span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
    		<p>Nickname</p>
  			<input
          name="nickname"
          value={this.state.nickname}
          onChange={ this.handleChange }
          className="form__input"></input>
  			<p>Email</p>
  			<input
          type="email"
          name="email"
          value={this.state.email}
          onChange={ this.handleChange }
          className="form__input"></input>
  			<button disabled={!isAbled} className="form__register" type="submit">Register!!!</button>
    	</form>
    );
  }
}

export default RegisterPlayerForm;