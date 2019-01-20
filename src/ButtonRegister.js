import React, { Component } from 'react';
import Popup from './Popup.js';

class ButtonRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="center">
      <button className="button_register" onClick={this.togglePopup.bind(this)}>{this.props.game === 'starcraft' || this.props.game === 'quake' ? 'Register as a player': 'Register as a team'}</button>
      {this.state.showPopup ?
          <Popup
            form={this.props.form}
            game={this.props.game}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default ButtonRegister;