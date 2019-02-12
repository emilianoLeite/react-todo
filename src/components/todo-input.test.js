import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todo-input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoInput onCreateTodo={() => { }}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
