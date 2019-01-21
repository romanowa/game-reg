import React, { Component } from 'react';
import Popup from './Popup.js';

const request = require('request');
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

class ButtonCommands extends Component {
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
		request.get(`${backendUrl}/api/gamers?game=` + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ gamers: JSON.parse(res.body) })
	      });
		this.togglePopup()
	}

  render() {
    return (
    	<div>

    		{this.props.game === 'starcraft' || this.props.game === 'quake' ?
    			<button className="button_list" onClick={this.makeGamerRequest}>Show list of players</button>
    			: <button className="button_list" onClick={this.makeGamerRequest}>Show list of teams</button>
    		}

	    	{this.state.showPopup ?
            <Popup
              form="list"
              items={this.state.gamers}
              game={this.props.game}
              closePopup={this.togglePopup.bind(this)}
            />
            : null
	        }
        </div>
    );
  }
}

export default ButtonCommands;

