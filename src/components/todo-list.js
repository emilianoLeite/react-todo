import React from 'react';
import PropTypes from 'prop-types';

export default function TodoList(props) {
  return (
    <ul>
      {
        props.todos.map((todo, index) => {
          return (
            <li className={todo.completed ? 'completed' : ''} key={index}>
              {todo.text}
            </li>
          );
        })
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  }))
};

TodoList.defaultProps = {
  todos: []
};
