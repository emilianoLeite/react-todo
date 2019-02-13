import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../../App';

let subject;

beforeEach(() => {
  subject = mount(<App />);
});

afterEach(() => {
  subject.unmount();
});

const createNewTodo = (todoText) => {
  subject.find('TodoInput').simulate('keyPress', { target: { value: todoText }, keyCode: 13 });
};

it('allows the creation and listing of todos', () => {
  let currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // No TODOs

  createNewTodo('myNewTodo');

  currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // Shows created TODO

  createNewTodo('myNewTodo2');

  currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // Shows all TODOs
});

