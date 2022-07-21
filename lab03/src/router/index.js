import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import CategorieView from '../views/CategorieView.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategorieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
