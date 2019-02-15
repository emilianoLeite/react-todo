import "./todo-list.css";
import { Tab, TabMenu } from "./tab-menu";
import PropTypes from "prop-types";
import React from "react";
import Todo from "./todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.showAllTodos = this.showAllTodos.bind(this);
    this.showCompletedTodos = this.showCompletedTodos.bind(this);
    this.showIncompleteTodos = this.showIncompleteTodos.bind(this);
  }

  showAllTodos() {
    return this.showTodos(this.props.todos);
  }

  showCompletedTodos() {
    const todos = this.props.todos.filter(todo => todo.completed);
    return this.showTodos(todos);
  }

  showIncompleteTodos() {
    const todos = this.props.todos.filter(todo => !todo.completed);
    return this.showTodos(todos);
  }

  showTodos(todos) {
    return <ul className="todo-list">
      {
        todos.map((todo) => {
          return (
            <li
              className={todo.completed ? "completed" : ""}
              key={todo.id}
            >
              <input
                defaultChecked={todo.completed}
                type="checkbox"
                onClick={() => this.props.onClickedTodo(todo)}
              />
              <Todo
                onUpdateTodo={this.props.onUpdateTodo}
                todo={todo}
              />
            </li>
          );
        })
      }
    </ul>;
  }

  render() { return (
    <TabMenu>
      <Tab active name="All" render={this.showAllTodos} />
      <Tab name="Incomplete" render={this.showIncompleteTodos} />
      <Tab name="Completed" render={this.showCompletedTodos} />
    </TabMenu>
  );}
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onClickedTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};
