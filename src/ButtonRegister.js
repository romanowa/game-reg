import React, { Component } from 'react';

import './ButtonRegister.css';
import Popup from './Popup.js';

class ButtonRegister extends Component {
  constructor() {
    super();
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
      <button className="button_register" onClick={this.togglePopup.bind(this)}>Register!!!</button>
      {this.state.showPopup ?
          <Popup
            form={this.props.form}
            game={this.props.game}
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default ButtonRegister;