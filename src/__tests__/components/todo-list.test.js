import React from "react";
import { TodoList } from "../../components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("when no todos are supplied", () => {
  it("renders a empty list", () => {
    const wrapper = shallow(<TodoList onClickedTodo={() => { }} />);

    expect(wrapper.find("ul").children()).toHaveLength(0);
  });
});

describe("when some todos are supplied", () => {
  it("matches snapshot", () => {
    const todos = [
      { text: "todo1" },
      { text: "todo2", completed: true },
    ];
    const tree = renderer
      .create(<TodoList onClickedTodo={() => { }} todos={todos} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("when a todo's checkbox is clicked", () => {
    it("emits the index of the clicked todo to the supplied callback", () => {
      const handleCompletedTodoCallback = jest.fn();
      const todos = [{text: "Todo", completed: false}];
      const wrapper = shallow(<TodoList
        onClickedTodo={handleCompletedTodoCallback}
        todos={todos}
      />);

      wrapper.find("input[type='checkbox']").simulate("click");

      expect(handleCompletedTodoCallback).toHaveBeenCalledWith(0);
    });
  });
});
