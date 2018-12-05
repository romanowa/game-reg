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
      body: JSON.stringify({nickname: this.state.nickname, email: this.state.email})
    }, (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        console.log('%%%%%%%%%%%%%%', res);
      });
	}
  render() {
    return (
    	<div>
    		<p>Nickname</p>
  			<input
          name="nickname"
          value={this.state.nickname}
          onChange={ this.handleChange }></input>
  			<p>Email</p>
  			<input
          type="email"
          name="email"
          value={this.state.email}
          onChange={ this.handleChange }></input>
  			<button onClick={this.makeRequest}>Register!!!</button>
    	</div>
    );
  }
}

export default RegisterPlayerForm;