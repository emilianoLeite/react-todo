import PropTypes from "prop-types";
import React from "react";

export default class Todo extends React.Component {
  render() { return (
    <span className="todo-text"> {this.props.todo.text} </span>
  );}
}

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })
};
