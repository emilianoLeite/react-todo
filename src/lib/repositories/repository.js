export default class Repository {
  constructor(options = {}) {
    this.config = options;
  }

  getTodos() {
    return [];
  }

  setTodos(_todos) {
    return null;
  }
}
