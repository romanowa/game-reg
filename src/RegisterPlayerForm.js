import React, { Component } from 'react';

class RegisterPlayerForm extends Component {
  render() {
    return (
    	<div id="myDIV">
    		<label for="nickname">Nickname</label>
  			<input id="nickname"></input>
  			<label for="email">Email</label>
  			<input type="email" id="female"></input>
    	</div>
    );
  }
}

export default RegisterPlayerForm;