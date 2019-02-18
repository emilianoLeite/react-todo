import Repository from "./repository";

export default class SessionStorage extends Repository {
  constructor(options) {
    const defaultOptions = { keyName: "todos-list", ...options };
    super(defaultOptions);
  }

  getTodos() {
    const todos = sessionStorage.getItem(this.config.keyName);

    if (todos != null) {
      return JSON.parse(todos);
    } else {
      return [];
    }
  }

  setTodos(todos) {
    sessionStorage.setItem(this.config.keyName, JSON.stringify(todos));
    return null;
  }
}
