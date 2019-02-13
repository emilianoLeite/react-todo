export default class Todo {
  static for(arrayOfTodoProps) {
    return arrayOfTodoProps.map(todoProps => new Todo(todoProps))
  }

  constructor({ text, completed }) {
    this.text = text;
    this.completed = completed;
  }

  toggleCompletion() {
    return new Todo({
      text: this.text,
      completed: !this.completed
    });
  }
}
