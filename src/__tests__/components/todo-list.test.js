import React from "react";
import { TodoList } from "../../components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("when no todos are supplied", () => {
  it("renders a empty list", () => {
    const wrapper = shallow(
      <TodoList onUpdateTodo={() => {}} onClickedTodo={() => {}} />
    );

    expect(wrapper.find("ul").children()).toHaveLength(0);
  });
});

describe("when some todos are supplied", () => {
  it("matches snapshot", () => {
    const todos = [
      { id: 1, text: "todo1" },
      { id: 2, text: "todo2", completed: true }
    ];
    const tree = renderer
      .create(
        <TodoList
          onUpdateTodo={() => {}}
          onClickedTodo={() => {}}
          todos={todos}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
