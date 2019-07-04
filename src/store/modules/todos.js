const todos = {
  state: {
    todos: [],
    filter: "all"
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {},
  getters: {},
}

export default todos;