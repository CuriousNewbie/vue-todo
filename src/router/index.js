import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "todoList",
      component: TodoList,
    },
    {
      path: "/new",
      name: "newtodo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewTodo.vue"),
    },
  ],
});

export default router;
