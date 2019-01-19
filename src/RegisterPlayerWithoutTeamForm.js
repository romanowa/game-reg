import React, { Component } from 'react';

const request = require('request');

class RegisterPlayerWithoutTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null,
      email: null,
      comment: null,
      game: null,
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
          nickname: this.state.nickname,
          email: this.state.email,
          comment: this.state.comment,
          game: this.state.game,
          freeForTeam: true,
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
     const isAbled = (this.state.nickname && this.state.email && this.state.game && this.state.email.includes('@godeltech.com'));
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
          pattern="\S+@godeltech.com$"
          placeholder="n.surname@godeltech.com"></input>
          </p>
        <p className="inline">Game<span>*</span>
        <select
          className="form__input field select_field"
          value={this.state.game}
          onChange={this.handleChange}
          name="game">
          <option value="" disabled selected>Choose game</option>
          <option value="cs">Counter-Strike</option>
          <option value="dota">Dota2</option>
        </select>
        </p>
        <p className="full_width">Comment
        <input
          name="comment"
          value={this.state.comment}
          onChange={ this.handleChange }
          className="form__input comment"
          placeholder="Description of playthrough, etc."></input>
          </p>
  			<button disabled={!isAbled} className={"form__register" + (!isAbled ? ' disabled' : '')} type="submit">Register</button>
    	</form>
    );
  }
}

export default RegisterPlayerWithoutTeamForm;