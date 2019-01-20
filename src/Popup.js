import React, { Component } from 'react';
import RegisterPlayerForm from './RegisterPlayerForm.js';
import RegisterTeamForm from './RegisterTeamForm.js';
import RegisterPlayerWithoutTeamForm from './RegisterPlayerWithoutTeamForm.js';
import ShowList from './ShowList.js';

class Popup extends Component {
  render() {
    const form = this.props.form;
    return (
      <div className='popup'>
        <div className={"popup_inner " + (form === 'list' && 'list_inner')}>
        {form === 'player' &&
          <RegisterPlayerForm reg={this.props.closePopup} game={this.props.game}/>
        }

        {form === 'player_without_team' &&
          <RegisterPlayerWithoutTeamForm reg={this.props.closePopup} />
        }

        {form === 'team' &&
          <RegisterTeamForm reg={this.props.closePopup} game={this.props.game}/>
        }

        {form === 'list' &&
          <ShowList items={this.props.items} game={this.props.game} reg={this.props.closePopup}/>
        }
        </div>
      </div>
    );
  }
}

export default Popup;