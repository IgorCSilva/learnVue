import Vue from 'vue'
import Router from 'vue-router'

import vars from '@/variaveis/vars'


Vue.use(Router)

export default new Router({

  mode: 'history',
  base: __dirname,
  routes: vars.routes
})
