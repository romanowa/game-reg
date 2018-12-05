import React, { Component } from 'react';

const request = require('request');

class RegisterTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      captain: null
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
      url: 'http://localhost:3001/api/teams',
      body: JSON.stringify({title: this.state.title, captain: this.state.captain})
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
        <p>Team title</p>
        <input
        name="title"
          value={this.state.title}
          onChange={ this.handleChange }></input>
        <div>
          Team captain
          <p>Nickname</p>
          <input
          name="captain"
          value={this.state.captain}
          onChange={ this.handleChange }></input>
          <p>Email</p>
          <input type="email"></input>
        </div>
        <div>
          Player 1
          <p>Nickname</p>
          <input></input>
          <p>Email</p>
          <input type="email"></input>
        </div>
        <div>
          Player 2
          <p>Nickname</p>
          <input></input>
          <p>Email</p>
          <input type="email"></input>
        </div>
        <div>
          Player 3
          <p>Nickname</p>
          <input></input>
          <p>Email</p>
          <input type="email"></input>
        </div>
        <div>
          Player 4
          <p>Nickname</p>
          <input></input>
          <p>Email</p>
          <input type="email"></input>
        </div>
  			<button onClick={this.makeRequest}>Register</button>
    	</div>
    );
  }
}

export default RegisterTeamForm;