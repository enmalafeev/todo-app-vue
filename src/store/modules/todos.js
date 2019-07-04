const todos = {
  state: {
    todos: [],
    filter: "all"
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(item => item.id !== todoId);
    },
  },
  actions: {},
  getters: {},
}

export default todos;