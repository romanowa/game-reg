import React, { Component } from 'react';

const request = require('request');

//import './ButtonCommands.css';

class ButtonCommands extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      teams: null,
      gamers: [],
      gamersTeam: null,
    };
    //this.makeTeamRequest = this.makeTeamRequest.bind(this);
    this.makeGamerRequest = this.makeGamerRequest.bind(this);
    this.makeGamersTeamRequest = this.makeGamersTeamRequest.bind(this);

  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
	/*makeTeamRequest() {
		request.get('http://localhost:3001/api/teams?game=' + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        this.setState({ teams: JSON.parse(res.body) })
          const teams = this.state.teams.map(team => {
            return team.title;
          })
          teams.forEach(team => {
            this.makeGamersTeamRequest(team)
          })
	      });
		this.togglePopup()

	}*/

	makeGamerRequest() {
		request.get('http://localhost:3001/api/gamers?game=' + this.props.game, (err, res, body) => {
	        if (err) {
	          return console.log(err);
	        }
	        console.log('------- RES BODYYYY', res.body)
	        this.setState({ gamers: JSON.parse(res.body) })
	      });
		this.togglePopup()
	}

  makeGamersTeamRequest(teamTitle) {
    request.get('http://localhost:3001/api/gamers?team=' + teamTitle, (err, res, body) => {
          if (err) {
            return console.log(err);
          }
          this.setState({ gamersTeam: JSON.parse(res.body) })
        });
    this.togglePopup()
  }

  render() {
    console.log('-------', this.state.gamers)

    const aa = this.state.gamers.filter(bb => bb.team === 'asdf')

    console.log('GHTHYSDD#####', aa)
  	/*const teams = this.state.teams;
  	console.log('+++++++++++++++', JSON.parse(teams[0]))
  	const teamsList = teams.map((team) => {
                        return <li>{team.title}</li>;
                      })*/
    return (
    	<div>
    		{this.props.game === 'starcraft' ?
    			<button onClick={this.makeGamerRequest}>Show list of gamers</button>
    			: <button onClick={this.makeGamerRequest}>Show list of commands</button>
    		}
	    	{this.state.showPopup ?
	    		this.state.teams ?
            this.state.teams.map(function(item, index){
                    return (
                      <div key={ index }>
                        <p>{item.title}</p>
                        <p></p>
                      </div>

                     );
                  })
	    			: this.state.gamers.map(function(item, index){
                    return (
                      <div key={ index }>
                        <p>{item.nickname} - {item.email}</p>
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