<template>
  <div>
    <TodoCard
      v-for="todo in todosStore.currentTodos"
      :todo="todo"
      :key="todo.id"
      @delete-todo="todosStore.deleteTodo($event)"
      @finished="changeTodoState"
    />
  </div>
</template>

<script setup>
import { useTodosStore } from "@/stores/todos.js";
import TodoCard from "@/components/TodoCard.vue";

const todosStore = useTodosStore();
function changeTodoState(payload) {
  todosStore.alterTodo(payload);
}
</script>
