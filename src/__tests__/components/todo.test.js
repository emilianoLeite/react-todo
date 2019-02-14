import React from "react";
import { Todo } from "../../components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("renders correctly", () => {
  const todo = { text: "My Todo" };
  const wrapper = shallow(<Todo todo={todo} />);
  const tree = renderer.create(wrapper).toJSON();

  expect(tree).toMatchInlineSnapshot(`
<span
  className="todo-text"
>
   
  My Todo
   
</span>
`);
});

// describe('when a todo text is clicked', () => {
//   test('renders a TodoInput in its place', () => {
//     const todo = { text: 'My Todo' };
//     const wrapper = shallow(<Todo todo={todo} />);

//     wrapper.find('span.todo-text').simulate('click');

//     expect(wrapper.find('TodoInput')).toHaveLength(1);
//   });
// });
