import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path:'/work',
    name:'Work',
    component:()=>import('../views/Work.vue')
  },
  {
    path: "/courses/:id",
    name: "Courses_id",
    component: () => import("../views/Courses.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
