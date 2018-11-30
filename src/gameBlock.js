import React, { Component, Fragment } from "react";
import "./gameBlock.css";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default class GameBlock extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    return (
      <Fragment>
        <dt className="config-item__name"> {this.props.id} </dt>
        <dd className="config-item__description">
          <input
            type="text"
            className="config-item__input"
            ref={this.input}
            value={this.state.value}
            readOnly={this.props.mode !== "editing"}
            onChange={e => this.changeValue(e.target.value)}
            onKeyDown={e => this.handleKeyboard(e)}
          />
          {this.renderButtons()}
        </dd>
      </Fragment>
    );
  }
}