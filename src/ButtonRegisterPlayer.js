import React, { Component } from 'react';

import Popup from './Popup.js';

class ButtonRegisterPlayer extends Component {
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
      <button className="button_register_player" onClick={this.togglePopup.bind(this)}>Register without team</button>
      {this.state.showPopup ?
          <Popup
            form="player_without_team"
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default ButtonRegisterPlayer;