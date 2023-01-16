import { createWebHistory, createRouter } from "vue-router";
import HomeVue from '../components/HomeVue.vue';
import AboutVue from '../pages/AboutVue.vue';
import ContactVue from '../pages/ContactVue.vue';
import DonateVue from '../pages/DonateVue.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/about",
    name: "About",
    component: AboutVue,
  },{
    path: "/contact",
    name: "contact",
    component: ContactVue
  },
  {
    path: "/donate",
    name: "donate",
    component: DonateVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;