import Repository from "./repository";

export default class RestApi extends Repository {
  constructor(options) {
    const defaultOptions = { endpoint: "http://localhost:3001", ...options };
    super(defaultOptions);
  }

  async getTodos() {
    try {
      const response = await fetch(`${this.config.endpoint}/todos/0`);
      const rawTodos = await response.json();

      return rawTodos["todos"];
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async setTodos(todos) {
    try {
      await fetch(`${this.config.endpoint}/todos/0`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todos })
      });
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
