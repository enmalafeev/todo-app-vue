<template lang="pug">
  div.todo
    todo-input(
      @selectAllTodos='selectAllTodos'
    )
    todo-list(
      v-if="todos.length > 0"
      :todos="filteredTodos"
      @filterTodos="filterTodos"
    )
</template>

<script>
import todoInput from "./todoInput";
import todoList from "./todoList";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // todos: [],
      // filter: "all"
    };
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "active":
          return this.todos.filter(item => item.checked === false);
        case "completed":
          return this.todos.filter(item => item.checked);
      }
    }
  },
  methods: {
    filterTodos(filter) {
      this.filter = filter;
    },
    selectAllTodos() {
      if (this.todos.length > 0) {
        this.todos = this.todos.map(el => ({ ...el, checked: true }));
      }
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

