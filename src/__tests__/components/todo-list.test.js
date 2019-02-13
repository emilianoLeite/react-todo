import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import TodoList from "../../components/todo-list";

it("renders without crashing", () => {
  shallow(<TodoList />);
});

describe("when no todos are supplied", () => {
  it("renders a empty list", () => {
    let wrapper = shallow(<TodoList />);

    expect(wrapper.find('ul').children()).toHaveLength(0);
  });
});

describe("when some todos are supplied", () => {
  it("correctly renders the todo list", () => {
    let todos = [
      { text: 'todo1' },
      { text: 'todo2', completed: true },
    ];
    let wrapper = shallow(<TodoList todos={todos}/>);
    let listItems = wrapper.find('ul').children()

    expect(listItems).toHaveLength(2);
    expect(listItems.at(0).text()).toMatch('todo1');
    expect(listItems.at(1).text()).toMatch('todo2');
    expect(listItems.at(1).hasClass('completed')).toEqual(true);
  });

  it("matches snapshot", () => {
    /*
      this is redundant (regarding the previous test), but it seems to be the
      preferred way of testing component rendering
    */
    let todos = [
      { text: 'todo1' },
      { text: 'todo2', completed: true },
    ];
    const tree = renderer
      .create(<TodoList todos={todos} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });



  describe("when a todo is clicked", () => {
    xit("emits the updated todo to the supplied callback", () => { });
  });
});
