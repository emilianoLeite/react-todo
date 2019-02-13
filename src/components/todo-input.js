import React from 'react';
import PropTypes from "prop-types";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.ENTER_KEY = 13;
    this.state = { value: "" };
  }

  handleKeyPress = (event) => {
    let pressedKey = (event.keyCode ? event.keyCode : event.which);

    if (pressedKey === this.ENTER_KEY) {
      this.props.onCreateTodo(event.target.value);
      this.clearInput();
    }
  };

  clearInput = () => { this.setState({ value: "" }) };

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


