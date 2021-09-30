import React, { Component } from "react";
import { Card } from "./Card";

export class TaskList extends Component {
  render() {
    return (
      <div>
          {Array.of('Casa', 'Estudos', 'Casa', 'Trabalho', 'Trabalho').map(category =>{
              return(
                <Card/>
              );
          })}
      </div>
    );
  }
}
