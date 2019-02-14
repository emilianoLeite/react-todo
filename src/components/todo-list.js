import "./todo-list.css";
import PropTypes from "prop-types";
import React from "react";

import Todo from "./todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.ALL = "All";
    this.INCOMPLETE = "Incomplete";
    this.COMPLETED = "Completed";
    this.state = { activeMenu: this.ALL, visibleTodos: props.todos };

    this.handleClick = this.handleClick.bind(this);
    this.isActiveMenu = this.isActiveMenu.bind(this);
    this.activateMenu = this.activateMenu.bind(this);
    this.visibleTodosFor = this.visibleTodosFor.bind(this);
  }

  handleClick(index) {
    this.props.onClickedTodo(index);
  }

  indexedHandleUpdateTodo(index) {
    return (todo) => this.props.onUpdateTodo(todo, index);
  }

  classesFor(menuItem) {
    if (this.isActiveMenu(menuItem)) {
      return "menu-item active";
    } else {
      return "menu-item";
    }
  }

  isActiveMenu(menuItem) {
    return this.state.activeMenu === menuItem;
  }

  activateMenu(event) {
    const activeMenu = event.target.textContent.trim();
    this.setState({
      activeMenu: activeMenu,
      visibleTodos: this.visibleTodosFor(activeMenu)
    });
  }

  visibleTodosFor(activeMenu) {
    const todos = this.props.todos;

    switch (activeMenu) {
    case this.ALL:
      return todos;
    case this.INCOMPLETE:
      return todos;
    case this.COMPLETED:
      return todos;
    default:
      return [];
    }
  }

  render() {
    const visibleTodos = this.visibleTodosFor(this.state.activeMenu);

    return (
      <div className="todo-list">
        <div className="filter-menu">
          <div onClick={this.activateMenu} className={this.classesFor(this.ALL)}> {this.ALL} </div>
          <div onClick={this.activateMenu} className={this.classesFor(this.INCOMPLETE)}> {this.INCOMPLETE} </div>
          <div onClick={this.activateMenu} className={this.classesFor(this.COMPLETED)}> {this.COMPLETED} </div>
        </div>
        <ul>
          {
            visibleTodos.map((todo, index) => {
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
        </ul>
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
