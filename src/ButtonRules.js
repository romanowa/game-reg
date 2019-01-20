import React, { Component } from 'react';

class ButtonRules extends Component {
  render() {
    let link;
    switch(this.props.game) {
      case 'Counter-Strike':
        link = 'https://docs.google.com/document/d/1N3RTttJbf_rPd8pFtuTxTgwyR1doX_DYXdcwFe-PbVA/edit';
        break;
      case 'Dota2':
        link = 'https://docs.google.com/document/d/1cUqc5ohFkbCnoAEF2ts7ysjpwI0tyzLsTDt39kn7zK0/edit';
        break;
      case 'Quake':
        link = 'https://docs.google.com/document/d/1kcZ2zhvexH1ZqHwIavUpnMCRUANps8CRbUsrm99AJJc/edit';
        break;
      case 'StarCraft2':
        link = 'https://docs.google.com/document/d/1hqnLyBqLmBIkTD0x2ODVWSZTvT-Ak1hVXPMvuBG0Sl4/edit';
        break;
    }

    return (
    	<div>
        <a href={link}>
          <button className="button_rules">Rules</button>
        </a>
      </div>
    );
  }
}

export default ButtonRules;