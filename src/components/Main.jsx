import React, { Component } from "react";
import { TaskList } from "./Main/TaskList";

export default class Main extends Component{
    render(){
        return(
            <main>
                <TaskList/>
            </main>
        );
    }
}