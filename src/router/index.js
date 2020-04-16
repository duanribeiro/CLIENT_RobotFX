import Vue from 'vue'
import Router from 'vue-router'

// Layouts
const TheContainer = () => import('@/layouts/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')


Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
      ]
    },
  ]
}

