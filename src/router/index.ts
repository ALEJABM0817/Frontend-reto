import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataTableView from '../views/DataTableView.vue'
import RecommendationView from '../views/RecommendationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tabla-datos',
      name: 'tabla-datos',
      component: DataTableView,
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: RecommendationView,
    }
  ],
})

export default router
