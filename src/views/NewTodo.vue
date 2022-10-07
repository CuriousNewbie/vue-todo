<template>
  <div class="about">
    <form class="">
      <label>Title</label>
      <input v-model.trim="title" class="" type="text" />
      <br />
      Set todo priority
      <select name="sortingPriority" v-model="priority">
        <option value="high">High</option>
        <option value="low">low</option>
      </select>
      <br />
      <button class="" @click.prevent="addTodo">Add todo</button>
    </form>
  </div>
</template>

<style></style>

<script setup>
import { useTodosStore } from "@/stores/todos.js";
import router from "@/router";

import { ref } from "vue";
const priority = ref("high");
const title = ref("");
const todosStore = useTodosStore();

const addTodo = () => {
  if (todosStore.todos.some((el) => el.title === title.value)) return;
  if (title.value === "") return;
  todosStore.addTodo({ title, priority });
  router.push({ name: "todoList" });
};
</script>
