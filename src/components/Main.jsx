import React, { Component } from "react";
import { TaskList } from "./Main/TaskList";
import { TaskCreator } from "./Main/TaskCreator";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addTask(title, description, type) {
    if ((title === "") | (description === "") | (type === "")) {
      return;
    }
    const newTask = { title, description, type };
    const newTasksArr = [...this.state.tasks, newTask];
    const newState = {
      tasks: newTasksArr,
    };
    this.setState(newState);
  }

  render() {
    return (
      <main>
        <div>
          <TaskCreator addTask={this.addTask.bind(this)} />
        </div>
        <div>
          <TaskList tasks={this.state.tasks} />
        </div>
      </main>
    );
  }
}
