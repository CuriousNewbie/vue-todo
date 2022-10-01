import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", () => {
  let n = 10;
  const todos = ref([
    { id: 1, title: "Clear room", state: "finished" },
    { id: 2, title: "meal", state: "pending" },
    { id: 3, title: "dinner", state: "finished" },
    { id: 4, title: "Breakfast", state: "pending" },
  ]);

  const settings = ref({
    showFinished: true,
    showUnfinished: true,
  });
  const currentTodos = computed(() => {
    const res = [];
    if (settings.value.showFinished) res.push("finished");
    if (settings.value.showUnfinished) res.push("pending");

    return todos.value.filter((el) => res.includes(el.state));
  });
  function addTodo({ title }) {
    todos.value.push({ title, id: n++ });
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter((el) => el.id !== id);
  }

  function alterTodo({ id, state }) {
    let todo = todos.value.find((el) => el.id === id);
    todo.state = state;
  }
  return { todos, currentTodos, addTodo, deleteTodo, alterTodo, settings };
});
