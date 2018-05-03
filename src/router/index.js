import Vue from 'vue'
import Router from 'vue-router'

import Users from '@/components/Users'
import Test from '@/components/Test'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({

  mode: 'history',
  base: __dirname,
  routes: [    
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/test',
      component: Test
    },
    
  ]
})
