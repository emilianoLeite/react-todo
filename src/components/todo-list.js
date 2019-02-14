import PropTypes from "prop-types";
import React from "react";

import Todo from "./todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onClickedTodo(index);
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.props.todos.map((todo, index) => {
            return (
              <li
                className={todo.completed ? "completed" : ""}
                key={index}
              >
                <input type="checkbox" onClick={() => this.handleClick(index)} />
                <Todo todo={todo}/>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onClickedTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
  todos: []
};
