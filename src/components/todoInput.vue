<template lang="pug">
  .todo-input
    label.select-all(
      @click="selectAllTodos"
      :class="{active: isActive}"
      )
      input(
        type='text'
        placeholder='Todo Name'
        autofocus
        v-model="todo.name"
        @keydown.enter='addTodo'
      ).input
</template>

<script>
let uniqId = 0;
export default {
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false
      },
      isActive: false
    };
  },
  methods: {
    addTodo() {
      uniqId++;
      this.todo.id = uniqId;
      this.$emit("addTodo", { ...this.todo });
      this.todo.name = "";
    },
    selectAllTodos() {
      this.$emit("selectAllTodos", { ...this.todo });
      this.isActive = true;
    }
  }
};
</script>


<style lang="scss" scoped>
.select-all {
  position: relative;
  &::before {
    position: absolute;
    top: -8px;
    left: 24px;
    content: "❯";
    font-size: 24px;
    color: #000;
    opacity: 0.2;
    transform: rotate(90deg);
  }
}
.active {
  &::before {
    opacity: 1;
  }
}

.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  background: #fff;
}
</style>

