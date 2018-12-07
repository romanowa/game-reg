import React, { Component } from 'react';

const request = require('request');

//import './ButtonCommands.css';

class ButtonCommands extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      teams: [],
      gamers: []
    };
    this.makeTeamRequest = this.makeTeamRequest.bind(this);
    this.makeGamerRequest = this.makeGamerRequest.bind(this);

  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
	makeTeamRequest() {
		request.get('http://localhost:3001/api/teams?game=' + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ teams: res.body })
	      });
		this.togglePopup()
	}

	makeGamerRequest() {
		request.get('http://localhost:3001/api/gamers?game=' + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ gamers: res.body })
	      });
		this.togglePopup()
	}

  render() {
  	/*const teams = this.state.teams;
  	console.log('+++++++++++++++', JSON.parse(teams[0]))
  	const teamsList = teams.map((team) => {
                        return <li>{team.title}</li>;
                      })*/
    return (
    	<div>
    		{this.props.game === 'starcraft' ?
    			<button onClick={this.makeGamerRequest}>Show list of gamers</button>
    			: <button onClick={this.makeTeamRequest}>Show list of commands</button>
    		}
	    	{this.state.showPopup ?
	    		this.state.teams ?
	    			<p>{this.state.teams}</p>
	    			: <p>{this.state.gamers}</p>
	          : null
	        }
        </div>
    );
  }
}

export default ButtonCommands;