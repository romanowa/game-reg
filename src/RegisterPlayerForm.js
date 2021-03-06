import React, { Component } from 'react';
import { withAlert } from 'react-alert';

const request = require('request');
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

class RegisterPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      race: ''
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
        url: `${backendUrl}/api/gamers`,
        body: JSON.stringify({
          game: this.props.game,
          nickname: this.state.nickname,
          email: this.state.email,
          captain: false,
          freeForTeam: false,
          race: this.state.race,
        })
      }, (err, res) => {
          if (err) {
            this.props.alert.show('Something is wrong:(', { type: 'error' })
            console.log(err)
            return reject(err)
          }
            this.props.alert.show('Thanks for registration!', { type: 'success' })
            return resolve(res);
        })
    });
	}
  render() {
    const isAbled = this.props.game === 'starcraft' ? 
          (this.state.nickname && this.state.race && this.state.email && this.state.email.includes('@'))
          : (this.state.nickname && this.state.email && this.state.email.includes('@'));
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
        {this.props.game === 'starcraft' ?
          <p className="inline">Race<span>*</span>
            <select
              className="form__input field select_field"
              value={this.state.race}
              onChange={this.handleChange}
              name="race">
              <option value="" disabled selected>Choose race</option>
              <option value="Terran">Terran</option>
              <option value="Protoss">Protoss</option>
              <option value="Zerg">Zerg</option>
              <option value="Random race">Random race</option>
            </select>
          </p>
          : null
        }
  			<button disabled={!isAbled} className={"form__register" + (!isAbled ? ' disabled' : '')} type="submit">Register</button>
    	</form>
    );
  }
}

export default withAlert(RegisterPlayerForm);