import App from "../../App";
import React from "react";
import { SessionStorage } from "../../lib/repositories";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

let subject;

beforeEach(() => {
  subject = mount(<App repo={new SessionStorage()} />);
});

afterEach(() => {
  subject.unmount();
});

const createNewTodo = (todoText) => {
  subject.find("TodoInput").simulate("keyPress", { target: { value: todoText }, keyCode: 13 });
};

test("allows the creation and listing of todos", () => {
  let currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // No TODOs

  createNewTodo("myNewTodo");

  currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // Shows created TODO

  createNewTodo("myNewTodo2");

  currentSnapshot = renderer
    .create(subject)
    .toJSON();
  expect(currentSnapshot).toMatchSnapshot(); // Shows all TODOs
});

