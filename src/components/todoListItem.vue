<template lang="pug">
  .todo-item()
    label.label
      .input-block
        input(
          type='checkbox'
          @change="checkTodo"
          :checked="todo.checked"
        ).input
      .title {{todo.name}}
    .button
      router-link(
        tag='button'
        :to='`./view/${todo.name}`'
      ).view ->
    .button
      button(
        type='button'
        @click="removeTodo"
      ).remove x
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    removeTodo() {
      this.$emit("removeTodo", this.todo.id);
    },
    checkTodo(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      };
      this.$emit("checkTodo", todoItem);
    }
  }
};
</script>


<style lang="scss">
.view {
  visibility: hidden;
  cursor: pointer;
}
.todo-item {
  display: flex;
  align-items: center;
  &:hover {
    .remove {
      visibility: visible;
    }
    .view {
      visibility: visible;
    }
  }
}

.checked .title {
  text-decoration: line-through;
}

.label {
  display: flex;
  align-items: center;
  flex: 1;
}

.input-block {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  padding: 15px 0;
  display: block;
  line-height: 1.2;
}

.button {
  width: 40px;
}

.remove {
  background: transparent;
  border: none;
  color: firebrick;
  cursor: pointer;
  font-size: 20px;
  visibility: hidden;
}
</style>
