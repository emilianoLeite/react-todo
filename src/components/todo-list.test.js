import React from "react";
import { shallow } from "enzyme";
import TodoList from "./todo-list";

it("renders without crashing", () => {
  shallow(<TodoList />);
});

describe("when no todos are supplied", () => {
  it("renders a empty list", () => {
    let wrapper = shallow(<TodoList />);

    expect(wrapper.find('ul').children()).toHaveLength(0);
  });
});

