import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        component: ()=>import('@/views/Home/index')
      },
      {
        path: '/cart',
        component: ()=>import('@/views/Cart/index')
      }
    ]
  })

export default router