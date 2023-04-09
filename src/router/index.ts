import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/home/home.vue')
  },
  {
    path: '/esg',
    name: 'esg',
    component: () => import('../components/esg/esg.vue')
  },
  {
    path:'/international',
    name:'international',
    component:() => import('../components/international/international.vue')
  },
  {
    path:'/domestic',
    name:'demestic',
    component:() => import('../components/domestic/domestic.vue')
  },
  {
    path:'/esgReport',
    name:'esg-report',
    component:() => import('../components/esg/esgReport.vue')
  },
]

const router = createRouter({
  
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})


export default router
//暴露出去给vue使用