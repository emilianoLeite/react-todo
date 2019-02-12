import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.getTodos() };
  }

  getTodos = () => {
    let todos = JSON.parse(sessionStorage.getItem('todos-list'));
    return (todos !== null) ? todos : [];
  };

  setTodos = (todo) => {
    let todos = this.state.todos.concat(todo);
    this.setState({ todos });
    sessionStorage.setItem('todos-list', JSON.stringify(todos));
  };

  render() {
    return (
      <div className="App">
        <TodoInput onCreateTodo={this.setTodos}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
