import React from 'react';
import PropTypes from "prop-types";

export default class TodoInput extends React.Component {
  ENTER_KEY = 13;

  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleKeyPress = (event) => {
    let pressedKey = (event.keyCode ? event.keyCode : event.which);

    if (pressedKey === this.ENTER_KEY) {
      this.props.onCreateTodo(event.target.value);
    }
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() { return (
    <input
      type="text"
      placeholder="New todo..."
      value={this.state.value}
      onKeyPress={this.handleKeyPress}
      onChange={this.handleChange}
    />
  );}
}

TodoInput.propTypes = {
  onCreateTodo: PropTypes.func.isRequired
};


