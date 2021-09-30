import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div>
        <div className="close">
          X
        </div>
        <div className="content">
          <h6>{this.props.title}</h6>
          <p>{this.props.description}</p>
          <p>tipo: <span>{this.props.type}</span></p>
        </div>
      </div>
    );
  }
}
