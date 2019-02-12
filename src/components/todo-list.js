import React from 'react';
import PropTypes from 'prop-types';

export default function TodoList(props) {
  return (
    <ul>
      {
        props.todos.map((todo, index) => {
          return <li key={index}> {todo} </li>;
        })
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array
};

TodoList.defaultProps = {
  todos: []
};
