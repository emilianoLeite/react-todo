import Repository from "./repository";

export default class SessionStorage extends Repository {
  constructor(options) {
    const defaultOptions = { keyName: "todos-list", ...options };
    super(defaultOptions);
  }

  getTodos() {
    return JSON.parse(sessionStorage.getItem(this.config.keyName));
  }

  setTodos(todos) {
    sessionStorage.setItem(this.config.keyName, JSON.stringify(todos));
    return null;
  }
}
