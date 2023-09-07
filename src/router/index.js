// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',

        redirect: to => {
          return { path: '/login' }
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/completed',
        component: () => import('@/views/CompletedTasks.vue'),
        props (route) {
          return {
            loginName: route.query.loginName
          }
        }
      },
      {
        path: '/login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        props (route) {
          return {
            loginName: route.query.loginName
          }
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
