import React from "react";
import { TodoInput } from "../../components";
import { shallow } from "enzyme";



describe("when the user presses the ENTER key inside the input", () => {
  it("calls the onCreateTodo callback", () => {
    const createTodoCallback = jest.fn();
    const wrapper = shallow(<TodoInput onCreateTodo={createTodoCallback} />);

    wrapper.find("input").simulate("keyPress", { target: { value: "myNewTodo" }, keyCode: 13 });

    expect(createTodoCallback).toHaveBeenCalledWith("myNewTodo");
  });

  it("clears the input", () => {
    const wrapper = shallow(<TodoInput onCreateTodo={() => { }} />);
    wrapper.setState({ value: "previousContent" });

    wrapper.find("input").simulate("keyPress", { target: { value: "myNewTodo" }, keyCode: 13 });

    expect(wrapper.props().value).toEqual("");
  });
});
