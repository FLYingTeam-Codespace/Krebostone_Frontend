import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/app",
    name: "app",
    component: () => import("../views/AppHome.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/home/overview.vue")
      },
      {
        path: "server",
        name: "server",
        component: () => import("../views/server/serverHome.vue")
      }
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
