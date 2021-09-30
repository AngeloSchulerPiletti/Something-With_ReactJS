import React, { Component } from "react";
import { Card } from "./Card";

export class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <li key={index}>
              <Card
                title={task.title}
                description={task.description}
                type={task.type}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
