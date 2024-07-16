import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../pages/Home.vue'
import NotFound from '../pages/404.vue'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeVue,
      meta: {
        title: 'Anthony FRERE - Portfolio'
      }
    },
    
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound,
      meta: {
        title: 'Page non trouvée - Erreur 404'
      }
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 85,
      }
    }else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title= to.meta.title
  next()
})

export default router
