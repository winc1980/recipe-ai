import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import FoodSelect from '../pages/FoodSelect.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/foodselect', name: 'FoodSelect', component: FoodSelect },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
