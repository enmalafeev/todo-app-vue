<template lang="pug">
  div
    button(
      v-for="filter in filters"
      type='button'
      :class="{active: currentFilter === filter}"
      @click="filterCurrentTodos(filter)"
      ) {{ filter }}
    button.clearCompleted(
      v-if="this.someTodoChecked"
      @click="clearAllCompleted"
    ) Clear completed
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      filters: ["all", "active", "completed"],
      currentFilter: "all"
    };
  },
  mounted() {
    setTimeout(() => this.someTodoChecked, 5000);
  },
  computed: {
    ...mapGetters(["someTodoChecked"])
  },
  methods: {
    ...mapMutations(["filterTodos", "clearCompleted"]),
    filterCurrentTodos(filter) {
      this.currentFilter = filter;
      this.filterTodos(filter);
    },
    clearAllCompleted() {
      this.clearCompleted();
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 20px;
  border: none;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;

  &.active {
    border-color: rgba(175, 47, 47, 0.2);
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
