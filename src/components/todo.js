import PropTypes from "prop-types";
import React from "react";
import { TodoInput } from ".";
import { Todo as TodoModel } from "../models";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTodoUpdate(todoText) {
    const updatedTodo = new TodoModel({ ...this.props.todo, text: todoText });

    this.props.onUpdateTodo(updatedTodo);

    this.setState({ editing: false });
  }

  handleClick() {
    this.setState({ editing: true });
  }

  render() {
    if (this.state.editing) {
      return (
        <TodoInput
          onCreateTodo={this.handleTodoUpdate}
          value={this.props.todo.text}
        />
      );
    } else {
      return (
        <span
          onClick={this.handleClick}
          className="todo-text"
        >
          {this.props.todo.text}
        </span>
      );
    }
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  }),
  onUpdateTodo: PropTypes.func.isRequired
};
