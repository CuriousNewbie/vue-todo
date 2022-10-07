import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", () => {
  let n = 10;
  const todos = ref([
    { id: 1, title: "Clear room", state: "finished", priority: "high" },
    { id: 2, title: "meal", state: "pending", priority: "low" },
    { id: 3, title: "dinner", state: "finished", priority: "low" },
    { id: 4, title: "Breakfast", state: "pending", priority: "high" },
  ]);

  const settings = ref({
    showFinished: true,
    showUnfinished: true,
    sortingPriority: "default",
  });
  const currentTodos = computed(() => {
    const res = [];
    if (settings.value.showFinished) res.push("finished");
    if (settings.value.showUnfinished) res.push("pending");

    return todos.value.filter((el) => res.includes(el.state));
  });

  const sortedTodos = computed(() => {
    if (settings.value.sortingPriority === "") return currentTodos.value;
    const firstTodos = currentTodos.value.filter(
      (el) => el.priority === settings.value.sortingPriority
    );
    const secondTodos = currentTodos.value.filter(
      (el) => el.priority !== settings.value.sortingPriority
    );

    return [...firstTodos, ...secondTodos];
  });
  function addTodo({ title, priority }) {
    todos.value.push({ title, priority, state: "pending", id: n++ });
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter((el) => el.id !== id);
  }

  function alterTodo({ id, state }) {
    let todo = todos.value.find((el) => el.id === id);
    todo.state = state;
  }
  return {
    todos,
    currentTodos,
    sortedTodos,
    addTodo,
    deleteTodo,
    alterTodo,
    settings,
  };
});
