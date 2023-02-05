import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "~/pages/AboutPage.vue";
import PortfolioPage from "~/pages/PortfolioPage.vue";
import ContactPage from "~/pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AboutPage,
  },
  {
    path: "/about",
    name: "About",
    component: PortfolioPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
