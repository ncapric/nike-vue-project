import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import UsersList from "@/views/UsersListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      name: "userlist",
      component: UsersList,
    },
  ],
});

export default router;
