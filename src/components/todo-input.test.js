import React from "react";
import { shallow } from "enzyme";
import TodoInput from "./todo-input";

it("renders without crashing", () => {
  shallow(<TodoInput onCreateTodo={() => { }} />);
});
