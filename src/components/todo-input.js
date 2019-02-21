import PropTypes from "prop-types";
import React from "react";
import { Todo } from "../models";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.ENTER_KEY = 13;
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event){
    const pressedKey = (event.keyCode ? event.keyCode : event.which);

    if (pressedKey === this.ENTER_KEY) {
      this.props.addTodo(new Todo({ text: event.target.value }));
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
      autoFocus={true}
      value={this.state.value}
      onKeyPress={this.handleKeyPress}
      onChange={this.handleChange}
    />
  );}
}

TodoInput.propTypes = {
  value: PropTypes.string,
  onCreateTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func
};

TodoInput.defaultProps = {
  value: ""
};

export default connect(() => ({}), { addTodo })(TodoInput);
