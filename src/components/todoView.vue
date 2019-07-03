<template lang="pug">
  div
    h2 Компонент просмотра задания {{$route.params.todo}}
    button(@click="goBack") Назад
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

