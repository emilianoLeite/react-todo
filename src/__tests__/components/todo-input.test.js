import React from 'react';
import { shallow } from 'enzyme';

import TodoInput from '../../components/todo-input';


describe('when the user presses the ENTER key inside the input', () => {
  it('calls the onCreateTodo callback', () => {
    const createTodoCallback = jest.fn();
    const wrapper = shallow(<TodoInput onCreateTodo={createTodoCallback} />);

    wrapper.find('input').simulate('keyPress', { target: { value: 'myNewTodo' }, keyCode: 13 });

    expect(createTodoCallback).toBeCalledWith('myNewTodo');
  });

  it('clears the input', () => {
    const wrapper = shallow(<TodoInput onCreateTodo={() => { }} />);
    wrapper.setState({ value: 'previousContent' });

    wrapper.find('input').simulate('keyPress', { target: { value: 'myNewTodo' }, keyCode: 13 });

    expect(wrapper.props().value).toEqual('');
  });
});
