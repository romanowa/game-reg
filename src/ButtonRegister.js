import React, { Component } from 'react';

import './ButtonRegister.css';

class ButtonRegister extends Component {
  handleClick (event) {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

  };
  render() {
    return <button onClick={this.handleClick}>Register!!!</button>;
  }
}

export default ButtonRegister;