import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/home/home.vue')
  },
  {
    path: '/esg',
    name: 'Esg',
    component: () => import('../components/esg.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
//暴露出去给vue使用