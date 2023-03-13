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
    component: () => import('../components/esg/esg.vue')
  },
  {
    path:'/international',
    name:'International',
    component:() => import('../components/international/international.vue')
  },
  {
    path:'/domestic',
    name:'demestic',
    component:() => import('../components/domestic/domestic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
//暴露出去给vue使用