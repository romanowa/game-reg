import React, { Component } from 'react';
import RegisterPlayerForm from './RegisterPlayerForm.js';
import RegisterTeamForm from './RegisterTeamForm.js';

class Popup extends Component {
  render() {
    const form = this.props.form;
    return (
      <div className='popup'>
        <div className='popup_inner'>
        {form === 'player' ? (
          <RegisterPlayerForm reg={this.props.closePopup}/>
        ) : (
          <RegisterTeamForm reg={this.props.closePopup}/>
        )}
        </div>
      </div>
    );
  }
}

export default Popup;