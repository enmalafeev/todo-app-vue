<template lang="pug">
  div.todo
    todo-input(
      @addTodo='addTodo'
    )
    todo-list(
      v-if="todos.length > 0"
      :todos="todos"
      @removeTodo="removeTodo"
    )
    pre {{todos}}
</template>

<script>
import todoInput from "./todoInput";
import todoList from "./todoList";

export default {
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(item => item.id !== todoId);
    }
  },
  components: {
    todoInput,
    todoList
  }
};
</script>

<style lang="scss" scoped>
.todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>

