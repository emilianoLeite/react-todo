import "./todo-list.css";
import { Tab, TabMenu } from "./tab-menu";
import PropTypes from "prop-types";
import React from "react";
import Todo from "./todo";
import { Todo as TodoModel } from "../models";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.showAllTodos = this.showAllTodos.bind(this);
    this.showCompletedTodos = this.showCompletedTodos.bind(this);
    this.showIncompleteTodos = this.showIncompleteTodos.bind(this);
  }

  showAllTodos() {
    return this.showTodos(this.props.todos);
  }

  showCompletedTodos() {
    const todos = this.props.todos.filter(todo => todo.completed);
    return this.showTodos(todos);
  }

  showIncompleteTodos() {
    const todos = this.props.todos.filter(todo => !todo.completed);
    return this.showTodos(todos);
  }

  showTodos(todos) {
    return <ul className="todo-list">
      {
        todos.map((todo) => {
          return (
            <li
              className={todo.completed ? "completed" : ""}
              key={todo.id}
            >
              <input
                defaultChecked={todo.completed}
                type="checkbox"
                onClick={() => this.props.toggleTodo(todo)}
              />
              <Todo
                onUpdateTodo={this.props.onUpdateTodo}
                todo={todo}
              />
            </li>
          );
        })
      }
    </ul>;
  }

  render() { return (
    <TabMenu className="filter-menu">
      <Tab active name="All" render={this.showAllTodos} />
      <Tab name="Incomplete" render={this.showIncompleteTodos} />
      <Tab name="Completed" render={this.showCompletedTodos} />
    </TabMenu>
  );}
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onUpdateTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: []
};

const mapStateToProps = ({ todos }) => ({ todos: TodoModel.wrap(todos) });
export default connect(mapStateToProps, { toggleTodo })(TodoList);
