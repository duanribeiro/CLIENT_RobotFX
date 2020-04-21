import Vue from 'vue'
import Router from 'vue-router'

// Layout
const TheContainer = () => import('@/layouts/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


Vue.use(Router)


const routes = [{
  path: '/',
  component: TheContainer,
  children: [{
      path: 'dashboard',
      name: 'Dashboard',  
      component: Dashboard
    }]
  },
]


export default new Router({
  'routes': routes
})