import React from "react";
import { TodoList } from "../../components";
import { mount } from "enzyme";

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
