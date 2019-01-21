import React, { Component } from 'react';

class ShowList extends Component {
	render() {
		const teams = [...new Set(this.props.items.map(item => item.team))];
		const games = [...new Set(this.props.items.map(item => item.game))];

		const listOfGamers = (item) => {
	      return this.props.items.map((itemG, index) => {
	        if (itemG.team === item) {
	          return <p className="column" key={index}>{itemG.nickname} {itemG.captain && '(captain)'} {itemG.email && `- ${itemG.email}`}</p>
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

	    const listOfGamersWoTeam = (item) => {
	      return this.props.items.map((itemG, index) => {
	        if (itemG.game === item) {
	          return <div className="gamer-wo-team-item" key={index}>
	          			<p>{itemG.nickname} - {itemG.email}</p>
	          			<p>Comment: {itemG.comment || '-'}</p>
	          		</div>
	        }
	      })
	    }

	    const listOfGames = (games) => {
	    	return (
	    		<table className="wo-team">
	    			<thead>
		    			<tr>
		    				<th>{games[0]}</th>
		    				<th>{games[1]}</th>
		    			</tr>
		    		</thead>
		    		<tbody>
		    			<tr>
		    				<td>{listOfGamersWoTeam(games[0])}</td>
		    				<td>{listOfGamersWoTeam(games[1])}</td>
		    			</tr>
		    		</tbody>
	    		</table>
	    	)
	    }

	    return (
	        <div className="list_popup">
	        	<span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
	        	{this.props.items.length ?
	        		this.props.game === 'player-wo-team' ?
	        		listOfGames(games) :
	        		this.props.game !== 'starcraft' && this.props.game !== 'quake' ?
		            listOfTeams(teams)
		            : this.props.items.map((item, index) => {
		                    return (
		                      <div key={ index }>
		                        <p className="players_block">{item.nickname} - {item.email} {item.race && `(${item.race})`}</p>
		                      </div>
		                     );
		                  })
	        		: this.props.game === 'starcraft' || this.props.game === 'quake' || this.props.game === 'player-wo-team' ?
	        		   <div className="no-players">There are no registered players!</div>
	        		   : <div className="no-teams">There are no registered teams!</div>
	        		}

	        </div>
	    );
  	}
}

export default ShowList;