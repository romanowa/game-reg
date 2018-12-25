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
    return new Promise((resolve, reject) => {
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
      }, (err, res) => {
          if (err) {
            alert(`Something wrong: ${err}`);
            return reject(err)
          }
            alert('SUCCESS!');
            return resolve(res);
        })
    });
	}
  render() {
    const isAbled = (this.state.nickname && this.state.email && this.state.email.includes('@'));
    return (
    	<form onSubmit={this.makeRequest}>
        <span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
    		<p className="inline">Nickname<span>*</span>
  			<input
          name="nickname"
          value={this.state.nickname}
          onChange={ this.handleChange }
          className="form__input field"></input>
          </p>
  			<p className="inline">Email<span>*</span>
  			<input
          type="email"
          name="email"
          value={this.state.email}
          onChange={ this.handleChange }
          className="form__input field"
          pattern="\S+@godeltech.com$"></input>
          </p>
  			<button disabled={!isAbled} className={"form__register" + (!isAbled ? ' disabled' : '')} type="submit">Register</button>
    	</form>
    );
  }
}

export default RegisterPlayerForm;