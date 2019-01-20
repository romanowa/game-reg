import React, { Component } from 'react';
import Popup from './Popup.js';

const request = require('request');
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

class ButtonPlayersWithoutTeam extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      gamers: [],
    };

    this.makeGamerRequest = this.makeGamerRequest.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

	makeGamerRequest() {
		request.get(`${backendUrl}/api/gamers?freeForTeam=true`, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ gamers: JSON.parse(res.body) })
	      });
		this.togglePopup()
	}

  render() {
    return (
    	<div className="flex-item">
    			<button className="button_list_players" onClick={this.makeGamerRequest}>Show list of players without team</button>
	    	{this.state.showPopup ?
            <Popup
              form="list"
              items={this.state.gamers}
              game="player-wo-team"
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
    );
  }
}

export default ButtonPlayersWithoutTeam;