<template lang="pug">
  .todo-input
    div.error {{validation.firstError('todo.name')}}
    label.select-all(
      @click="selectAllTodos"
      :class="{active: this.todo.checked}"
      )
      input(
        type='text'
        placeholder='Todo Name'
        autofocus
        v-model="todo.name"
        @keydown.enter='addTodo'
        :class="{'valid-error': validation.hasError('todo.name')}"
      ).input
</template>

<script>
import { Validator } from "simple-vue-validator";

let uniqId = 0;
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "todo.name"(value) {
      return Validator.value(value).required("This field can't be empty");
    }
  },
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false
      }
    };
  },
  methods: {
    addTodo() {
      this.$validate().then(success => {
        if (!success) return;

        uniqId++;
        this.todo.id = uniqId;
        this.$emit("addTodo", { ...this.todo });
        this.todo.name = "";

        this.validation.reset();
      });
    },
    selectAllTodos() {
      this.$emit("selectAllTodos", { ...this.todo });
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

.error {
  position: absolute;
  top: 70px;
  left: 125px;
  color: firebrick;
}

.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: 1px solid transparent;
  background: rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  background: #fff;
}

.valid-error {
  border: 1px solid firebrick;
}
</style>

