import "./App.css";
import React, { Component } from "react";
import { TodoInput, TodoList } from "./components";
import PropTypes from "prop-types";
import { Todo } from "./models";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.getTodos() };

    this.setTodo = this.setTodo.bind(this);
    this.toggleTodoCompletion = this.toggleTodoCompletion.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  getTodos() {
    const todosProps = this.props.repo.getTodos();

    if (todosProps != null) {
      return Todo.wrap(todosProps);
    } else {
      return [];
    }
  }

  setTodo(todoText) {
    const newTodo = new Todo({ text: todoText });
    const todos = this.state.todos.concat(newTodo);
    this.commitChanges(todos);
  }

  toggleTodoCompletion(clickedTodo) {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === clickedTodo.id);
    todos[index] = clickedTodo.toggleCompletion();
    this.commitChanges(todos);
  }

  commitChanges(todos) {
    this.setState({ todos });
    this.props.repo.setTodos(todos);
  }

  handleUpdateTodo(updatedTodo) {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    todos[index] = updatedTodo;
    this.commitChanges(todos);
  }

  render() { return (
    <div className="app">
      <TodoInput onCreateTodo={this.setTodo}/>
      <TodoList
        onUpdateTodo={this.handleUpdateTodo}
        onClickedTodo={this.toggleTodoCompletion}
        todos={this.state.todos}
      />
    </div>
  );}
}

App.propTypes = {
  repo: PropTypes.any,
};
