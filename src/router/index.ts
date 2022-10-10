import { createRouter, createWebHistory } from "vue-router";
import About from "~/pages/AboutPage.vue";
import Portfolio from "~/pages/PortfolioPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/about",
    name: "About",
    component: Portfolio,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
