import PropTypes from "prop-types";
import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.ENTER_KEY = 13;
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event){
    const pressedKey = (event.keyCode ? event.keyCode : event.which);

    if (pressedKey === this.ENTER_KEY) {
      this.props.onCreateTodo(event.target.value);
      this.clearInput();
    }
  }

  clearInput(){ this.setState({ value: "" }); }

  handleChange(event){
    this.setState({ value: event.target.value });
  }

  render() { return (
    <input
      type='text'
      placeholder='New todo...'
      value={this.state.value}
      onKeyPress={this.handleKeyPress}
      onChange={this.handleChange}
    />
  );}
}

TodoInput.propTypes = {
  onCreateTodo: PropTypes.func.isRequired
};


