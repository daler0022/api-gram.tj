import Vue from 'vue' 
import Router from 'vue-router'
import Map from '@/components/Map/CustomMap.vue'
import Login from '@/components/AuthLogin.vue';
import { store } from './store';

Vue.use(Router) 

const router = new Router({ 
mode: 'history',
routes: [
    { 
      path: '/login', 
      name: 'auth-login', 
      component: Login 
    },
    { 
      path: '/', 
      name: 'Main', 
      component: Map 
    },
  ] 
}) 

router.beforeEach((to, from, next) => {
  if (store.state.token || to.name === 'auth-login'){
    return next()
  } 
  else {
    next('/login')
  }
}) 
export default router
