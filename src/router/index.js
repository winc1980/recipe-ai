import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import FoodSelect from '../pages/FoodSelect.vue';
import RecipeList from '../pages/RecipeList.vue';
import RecipeDetail from '../pages/RecipeDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/foodselect', name: 'FoodSelect', component: FoodSelect },
  { path: '/recipelist', name: 'RecipeList', component: RecipeList },
  { path: '/recipedetail/:id', name: 'RecipeDetail', component: RecipeDetail },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
