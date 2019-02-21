import { addTodo, toggleTodo } from "../actions";
import { createReducer } from "redux-starter-kit";

const addTodoReducer = ({ todos }, action) => {
  todos.push(action.payload);
};

const toggleTodoReducer = (state, action) => {
  // debugger;
  const { todos } = state;
  const clickedTodo = action.payload;
  const index = todos.findIndex(todo => todo.id === clickedTodo.id);

  todos[index].complete = !todos[index].complete;
};

export default createReducer({ todos: [] }, {
  [addTodo]: addTodoReducer,
  [toggleTodo]: toggleTodoReducer
});

