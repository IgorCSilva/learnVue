// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Users from './components/Users'
import Test from './components/Test'


import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/">Users</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
