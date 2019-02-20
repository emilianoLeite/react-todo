import shortid from "shortid";

export default class Todo {
  static wrap(arrayOfTodoProps) {
    return arrayOfTodoProps.map(todoProps => new Todo(todoProps));
  }

  constructor({ id, text, completed }) {
    this.id = (id || shortid.generate());
    this.text = text;
    this.completed = completed;
  }

  toggleCompletion() {
    return new Todo({
      id: this.id,
      text: this.text,
      completed: !this.completed
    });
  }
}
