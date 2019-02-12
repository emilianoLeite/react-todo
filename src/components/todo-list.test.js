import React from "react";
import { shallow } from "enzyme";
import TodoList from "./todo-list";

it("renders without crashing", () => {
  shallow(<TodoList />);
});
