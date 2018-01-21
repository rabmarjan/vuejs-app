import Vue from 'vue'
import Router from 'vue-router'
import customers from '@/components/Customers'
import about from '@/components/About'
import add from '@/components/Add'
import edit from '@/components/Edit'
import customerdetails from '@/components/CustomerDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/customers',
      name: 'customers',
      component: customers
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/customer/:id',
      name: 'customerdetails',
      component: customerdetails
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
})
