import "./todo-list.css";
import PropTypes from "prop-types";
import React from "react";

import Todo from "./todo";
import { Tab, TabMenu } from "./tab-menu";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.ALL = "All";
    this.INCOMPLETE = "Incomplete";
    this.COMPLETED = "Completed";
    this.state = { activeMenu: this.ALL };

    this.handleClick = this.handleClick.bind(this);
    this.showAllTodos = this.showAllTodos.bind(this);
  }

  handleClick(index) {
    this.props.onClickedTodo(index);
  }

  indexedHandleUpdateTodo(index) {
    return (todo) => this.props.onUpdateTodo(todo, index);
  }

  showAllTodos() {
    return <ul>
      {
        this.props.todos.map((todo, index) => {
          return (
            <li
              className={todo.completed ? "completed" : ""}
              key={index}
            >
              <input type="checkbox" onClick={() => this.handleClick(index)} />
              <Todo
                onUpdateTodo={this.indexedHandleUpdateTodo(index)}
                todo={todo}
              />
            </li>
          );
        })
      }
    </ul>;
  }

  render() {
    return (
      <div className="todo-list">
        <TabMenu >
          <Tab default name="All" render={this.showAllTodos} />
          <Tab name="Completed" render={this.showAllTodos} />
          <Tab name="Incomplete" render={this.showAllTodos} />
        </TabMenu>
      </div>
    );
  }
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
