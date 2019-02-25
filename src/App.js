import "./App.css";
import React, { Component } from "react";
import { TodoInput, TodoList } from "./components";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Todo } from "./models";
import { createStore } from "redux";
import reducer from "./redux/reducers/reducer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    this.setTodo = this.setTodo.bind(this);
    this.toggleTodoCompletion = this.toggleTodoCompletion.bind(this);
    this.commitChanges = this.commitChanges.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  componentDidMount() {
    this.getTodos().then(todos => this.setState({ todos }));
  }

  async getTodos() {
    const todosProps = await this.props.repo.getTodos();

    return Todo.wrap(todosProps);
  }

  setTodo(todoText) {
    const newTodo = new Todo({ text: todoText });
    const todos = this.state.todos.concat(newTodo);
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
    <React.StrictMode>
      <Provider store={this.store}>
        <div className="app">
          <TodoInput onCreateTodo={this.setTodo}/>
          <TodoList
            onUpdateTodo={this.handleUpdateTodo}
            todos={this.state.todos}
          />
        </div>
      </Provider>
    </React.StrictMode>
  ); }
}

App.propTypes = {
  repo: PropTypes.any,
  store: PropTypes.any,
};
