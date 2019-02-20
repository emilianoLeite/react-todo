import { createAction, createReducer } from "redux-starter-kit";

export const addTodo = createAction("ADD_TODO");

const addTodoReducer = ({ todos }, action) => {
  todos.push({ text: action.payload });
};

export default createReducer({ todos: [] }, {
  [addTodo]: addTodoReducer
});

