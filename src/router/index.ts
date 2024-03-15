import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("../components/Event/index.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../components/Event/Main/TextLogIn/index.vue"),
  // },
  // {
  //   path: "/work",
  //   name: "work",
  //   component: () => import("../components/Event/Main/work/index.vue"),
  //   // meta: { requireAuth: true },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
