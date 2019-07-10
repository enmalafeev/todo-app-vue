<template lang="pug">
  .todo-item(:class="{checked: todo.checked}")
    label.label
      .input-block
        input(
          type='checkbox'
          @change="checkTodoAsCompleted"
          :checked="todo.checked"
        ).input
      .input-type-left
        .title(
          v-if="!todo.editing"
          @dblclick="editTodo(todo)"
        ) {{todo.name}}
        input(
          v-else="todo.editing"
          @blur="doneEdit(todo)"
          @keydown.enter="doneEdit(todo)"
          v-focus
          type="text"
          v-model="todo.name"
          ).input-edit
    .button
      router-link(
        tag='button'
        :to='`./view/${todo.name}`'
      ).view ->
    .button
      button(
        type='button'
        @click="removeExistedTodo"
      ).remove x
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    todo: Object
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    ...mapMutations(["removeTodo", "checkTodo"]),
    removeExistedTodo() {
      this.removeTodo(this.todo.id);
    },
    checkTodoAsCompleted(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      };
      this.checkTodo(todoItem);
    },
    editTodo(todo) {
      todo.editing = true;
    },
    doneEdit(todo) {
      todo.editing = false;
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

.input-type-left {
  width: 100%;
  display: flex;
  align-items: center;
}

.title {
  padding: 15px 0;
  display: block;
  border: 1px solid #fff;
  line-height: 1.2;
}

.input-edit {
  width: 100%;
  font-size: 24px;
  color: #2c3e50;
  line-height: 1.2;
  padding: 15px 0;
  border: 1px solid #ccc;
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
