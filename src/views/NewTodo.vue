<template>
  <div class="about">
    <form class="">
      <label>Title</label>
      <input v-model="title" class="" type="text" />
      <button class="" @click.prevent="addTodo">Add todo</button>
    </form>
  </div>
</template>

<style></style>

<script setup>
import { useTodosStore } from "@/stores/todos.js";
import router from "@/router";

import { ref } from "vue";
const title = ref("");
const todosStore = useTodosStore();

const addTodo = () => {
  todosStore.addTodo({ title: title });
  router.push({ name: "todoList" });
};
</script>
