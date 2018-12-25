import React, { Component } from 'react';

const request = require('request');

//import './ButtonCommands.css';

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
		request.get('http://localhost:3001/api/gamers?game=' + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ gamers: JSON.parse(res.body) })
	      });
		this.togglePopup()
	}

  render() {
    const teams = [...new Set(this.state.gamers.map(item => item.team))];

    const listOfGamers = (item) => {
      return this.state.gamers.map((itemG, index) => {
        if (itemG.team === item) {
          return <p className="column" key={index}>{itemG.nickname} {itemG.captain && '(captain)'}</p>
        }
      })
    }

    const listOfTeams = (teams) => {
      return teams.map((item, index) => {
                return (
                  <div className="team_block" key={ index }>
                    <p className="team_title bold">{item}</p>
                    <div className="row">
                    {listOfGamers(item)}
                    </div>
                  </div>
                 );
              })
    }

    return (
    	<div>

    		{this.props.game === 'starcraft' || this.props.game === 'quake' ?
    			<button className="button_list" onClick={this.makeGamerRequest}>Show list of players</button>
    			: <button className="button_list" onClick={this.makeGamerRequest}>Show list of teams</button>
    		}


	    	{this.state.showPopup ?
	    		this.props.game !== 'starcraft' && this.props.game !== 'quake' ?
            listOfTeams(teams)
	    			: this.state.gamers.map((item, index) => {
                    return (
                      <div key={ index }>
                        <p className="players_block">{item.nickname} - {item.email}</p>
                      </div>
                     );
                  })
	          : null
	        }

        </div>
    );
  }
}

export default ButtonCommands;