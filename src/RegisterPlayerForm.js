import React, { Component } from 'react';

const request = require('request');



class RegisterPlayerForm extends Component {
	makeRequest() {
		request('http://localhost:3001/api/gamers', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
	}
  render() {
    return (
    	<div id="myDIV">
    		<p>Nickname</p>
  			<input></input>
  			<p>Email</p>
  			<input type="email"></input>
  			<button onClick={this.makeRequest}>register</button>
    	</div>
    );
  }
}

export default RegisterPlayerForm;