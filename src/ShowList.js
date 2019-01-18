import React, { Component } from 'react';

class ShowList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const teams = [...new Set(this.props.items.map(item => item.team))];

		const listOfGamers = (item) => {
	      return this.props.items.map((itemG, index) => {
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
	        <div className="list_popup">
	        	<span className="deleteMeetingClose" onClick={this.props.reg}>&times;</span>
	        	{this.props.items.length ?
	        		this.props.game !== 'starcraft' && this.props.game !== 'quake' ?
		            listOfTeams(teams)
		            : this.props.items.map((item, index) => {
		                    return (
		                      <div key={ index }>
		                        <p className="players_block">{item.nickname} - {item.email} ({item.race})</p>
		                      </div>
		                     );
		                  })
	        		: this.props.game === 'starcraft' || this.props.game === 'quake' ?
	        		   <div className="no-players">There are no registered players!</div>
	        		   : <div className="no-teams">There are no registered teams!</div>
	        		}

	        </div>
	    );
  	}
}

export default ShowList;