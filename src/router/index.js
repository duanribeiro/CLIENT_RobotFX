import Vue from 'vue'
import Router from 'vue-router'

// Layout
const TheContainer = () => import('@/layouts/TheContainer')

// Views
const DashboardView = () => import('@/views/DashboardView')


Vue.use(Router)


const routes = [{
  path: '/',
  component: TheContainer,
  children: [{
      path: '',
      name: 'Dashboard',  
      component: DashboardView
    }]
  },
]


export default new Router({
  'routes': routes
})



