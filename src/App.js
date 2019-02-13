import React, { Component } from 'react';
import './App.css';

import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import Todo from './models/todo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.getTodos() };
    this.setTodos = this.setTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
  }

  getTodos() {
    const todosProps = JSON.parse(sessionStorage.getItem('todos-list'));

    if (todosProps !== null) {
      return Todo.wrap(todosProps);
    } else {
      return [];
    }
  }

  setTodos(todoText){
    const newTodo = new Todo({ text: todoText });
    const todos = this.state.todos.concat(newTodo);
    this.commitChanges(todos);
  }

  updateTodo(todoIndex){
    const todos = this.state.todos;
    todos[todoIndex] = todos[todoIndex].toggleCompletion();
    this.commitChanges(todos);
  }

  commitChanges(todos) {
    this.setState({ todos });
    sessionStorage.setItem('todos-list', JSON.stringify(todos));
  }

  render() { return (
    <div className="App">
      <TodoInput onCreateTodo={this.setTodos}/>
      <TodoList
        onToggledTodo={this.updateTodo}
        todos={this.state.todos}
      />
    </div>
  );
  }
}
