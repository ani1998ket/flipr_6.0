import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import( '../views/Info.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [{
        path : '/dashboard/hospital',
        name : 'Hospital',
        component : () => import('../views/Hospital.vue')
      },{
        path : '/dashboard/medical_college',
        name : 'Medical_College',
        component : () => import('../views/Medical_College.vue')
      }
    ]
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import( '../views/Stats.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
