import React from "react";
import { shallow } from "enzyme";

import TodoInput from "../../components/todo-input";

it("renders without crashing", () => {
  shallow(<TodoInput onCreateTodo={() => { }} />);
});

describe("when the user presses the ENTER key inside the input", () => {
  it("calls the onCreateTodo callback", () => {
    let createTodoCallback = jest.fn();
    let wrapper = shallow(<TodoInput onCreateTodo={createTodoCallback} />);

    wrapper.find('input').simulate('keyPress', { target: { value: 'myNewTodo' }, keyCode: 13 });

    expect(createTodoCallback.mock.calls.length).toBe(1);
    expect(createTodoCallback.mock.calls[0][0]).toBe('myNewTodo');
  });
});
