import React from 'react';
import PropTypes from "prop-types";

export default class TodoInput extends React.Component {
  ENTER_KEY = 13;

  render() {return (
    <input onKeyPress={this.handleKeyPress} placeholder="New todo..."/>
  );}

  handleKeyPress = (event) => {
    let pressedKey = (event.keyCode ? event.keyCode : event.which);
    if (pressedKey === this.ENTER_KEY) {
      this.props.onCreateTodo(event.target.value);
    }
  }
}

TodoInput.propTypes = {
  onCreateTodo: PropTypes.func.isRequired
};


