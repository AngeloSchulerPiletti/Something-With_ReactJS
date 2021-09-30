import React, { Component } from "react";

export class TaskCreator extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.description = "";
    this.type = "estudos";
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleDescriptionChange(event) {
    event.stopPropagation();
    this.description = event.target.value;
  }
  _handleTypeChange(event) {
    event.stopPropagation();
    this.type = event.target.value;
  }

  _handleAddTask(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.addTask(this.title, this.description, this.type);
  }

  render() {
    return (
      <form onSubmit={this._handleAddTask.bind(this)}>
        <div>
          <label htmlFor="title">
            Título
            <input type="text" name="title" id="title" onChange={this._handleTitleChange.bind(this)}/>
          </label>
          <label htmlFor="type">
            <select name="type" id="type" onChange={this._handleTypeChange.bind(this)} defaultValue="estudos">
              <option value="estudos">Estudos</option>
              <option value="treino">Treino</option>
              <option value="trabalho">Trabalho</option>
              <option value="casa">Casa</option>
              <option value="lazer">Lazer</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Adicione uma descrição"
              onChange={this._handleDescriptionChange.bind(this)}
            ></textarea>
          </label>
        </div>
        <div>
          <button>Salvar</button>
        </div>
      </form>
    );
  }
}
