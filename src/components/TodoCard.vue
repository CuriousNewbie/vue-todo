<template>
  <div class="card">
    <input type="checkbox" v-model="finished" @change="finishTodo" />
    <div class="card-title">{{ props.todo.title }}</div>
    <div>Priority: {{ props.todo.priority }}</div>
    <span @click="deleteTodo" class="delete-item">&times;</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["todo"]);
const emit = defineEmits(["delete-todo", "finished"]);

const finished = ref(props.todo.state === "finished");
const deleteTodo = () => {
  emit("delete-todo", props.todo.id);
};
const finishTodo = () => {
  emit("finished", {
    state: finished.value ? "finished" : "pending",
    id: props.todo.id,
  });
};
</script>
<style>
.card {
  display: flex;
  align-items: center;
  border: 2px black solid;
  border-radius: 5px;
  margin: 0.5rem;
  box-shadow: 4px 4px 3px gray;
  background-color: ;
}

.card-title {
  padding: 0.25rem;
}
.card input,
.delete-item {
  margin: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
}
.card-title {
  flex-grow: 1;
}
</style>
