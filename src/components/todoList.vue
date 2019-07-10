<template lang="pug">
  .todo-list
    .content
      ul.list
        li.item(v-for="todo in todos")
          todo-list-item(
            :todo="todo"
          )
          
    .footer
      .footer-content
        .counter {{remainigTodos}} items left
        .filter
          todo-list-filter

</template>

<script>
import todoListFilter from "./todoListFilter";
import todoListItem from "./todoListItem";
import { mapState } from "vuex";

export default {
  props: {
    todos: Array
  },
  components: {
    todoListFilter,
    todoListItem
  },
  computed: {
    remainigTodos() {
      return this.todos.filter(todo => !todo.checked).length;
    }
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.list {
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.item {
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
}
.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 14px;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px rgba(0, 0, 0, 0.1);
  }
}

.footer-content {
  display: flex;
  align-items: right;
  position: relative;
}
.filter {
  flex: 1;
}
</style>

