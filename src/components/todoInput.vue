<template lang="pug">
  .todo-input
    div.error {{validation.firstError('todo.name')}}
    label.select-all(
      @click="selectAllCompletedTodos"
      :class="{active: isActive}"
      v-on="$listeners"
      )
    input(
      type='text'
      placeholder='Todo Name'
      autofocus
      v-model="todo.name"
      @keydown.enter='addNewTodo'
      :class="{'valid-error': validation.hasError('todo.name')}"
    ).input
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapMutations } from "vuex";

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
        beforeEditCashe: "",
        checked: false,
        editing: false
      },
      isActive: false
    };
  },
  methods: {
    ...mapMutations(["addTodo", "selectAllTodos"]),
    addNewTodo() {
      this.$validate().then(success => {
        if (!success) return;

        uniqId++;
        this.todo.id = uniqId;
        this.addTodo({ ...this.todo });
        this.todo.name = "";

        this.validation.reset();
      });
    },
    selectAllCompletedTodos() {
      this.selectAllTodos();
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
  border: 1px solid transparent;
  background: rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
  background: #fff;
}

.todo-input {
  position: relative;
}

.error {
  position: absolute;
  top: -30px;
  left: 0;
  color: firebrick;
}

.valid-error {
  border: 1px solid firebrick;
}
</style>

