import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import GeneralView from '../views/GeneralView.vue';
import FavoritesView from '../views/FavoritesView.vue';

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView,
  },
  {
    path: '/general',
    name: 'general',
    component: GeneralView,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/general',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;