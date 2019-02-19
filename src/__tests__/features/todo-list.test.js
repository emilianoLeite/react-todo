import React from "react";
import { TodoList } from "../../components";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

describe("when a todo's checkbox is clicked", () => {
  it("emits the index of the clicked todo to the supplied callback", () => {
    const handleCompletedTodoCallback = jest.fn();
    const todos = [{ id: 1, text: "Todo", completed: false }];
    const subject = mount(
      <TodoList
        onUpdateTodo={() => { }}
        onClickedTodo={handleCompletedTodoCallback}
        todos={todos}
      />
    );

    subject.find("input[type='checkbox']").simulate("click");

    expect(handleCompletedTodoCallback).toHaveBeenCalledWith({
      id: 1,
      text: "Todo",
      completed: false
    });

    subject.unmount();
  });
});

describe("filters", () => {
  it.skip("shows only the TODOs corresponding to the selected filter", () => {
    const todos = [
      { id: 1, text: "Todo1", completed: false },
      { id: 2, text: "Todo2", completed: true }
    ];
    const subject = mount(
      <TodoList
        onUpdateTodo={() => { }}
        onClickedTodo={() => { }}
        todos={todos}
      />
    );

    let currentSnapshot = renderer
      .create(subject)
      .toJSON();
    expect(currentSnapshot).toMatchSnapshot(); // All TODOs shown


    subject.find("Tab").findWhere((node) => node.text() === "Incomplete").simulate("click");

    currentSnapshot = renderer
      .create(subject)
      .toJSON();
    expect(currentSnapshot).toMatchSnapshot(); // Only "Todo1"

    subject.find("Tab").findWhere((node) => node.text() === "Complete").simulate("click");

    currentSnapshot = renderer
      .create(subject)
      .toJSON();
    expect(currentSnapshot).toMatchSnapshot(); // Only "Todo2"

    subject.unmount();
  });
});
