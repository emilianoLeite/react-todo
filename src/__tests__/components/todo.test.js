import React from "react";
import { Todo } from "../../components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("renders correctly", () => {
  const todo = { text: "My Todo" };
  const wrapper = shallow(<Todo onUpdateTodo={() => { }} todo={todo} />);
  const tree = renderer.create(wrapper).toJSON();

  expect(tree).toMatchInlineSnapshot(`
<span
  className="todo-text"
  onClick={[Function]}
>
  My Todo
</span>
`);
});

describe("when the todo is clicked", () => {
  it("renders a TodoInput in its place", () => {
    const todo = { text: "My Todo" };
    const wrapper = shallow(<Todo onUpdateTodo={() => { }} todo={todo} />);

    wrapper.find("span.todo-text").simulate("click");

    expect(wrapper.find("TodoInput")).toHaveLength(1);
  });
});
