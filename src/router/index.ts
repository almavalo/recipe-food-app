import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },

  {
    path: "/category/:name",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/recipe/:id",
    name: "recipe",
    component: () => import("../views/RecipeView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
