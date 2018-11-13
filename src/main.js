// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Usando vuex.
import { store } from './components/vuex/store/store'

// Installed to make http request.
import vueResource from 'vue-resource'
Vue.use(vueResource)

// Importando Vue Material Design
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)


Vue.config.productionTip = false

// Bus para comunicação direta entre filhos.
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
}) 

// Vídeo de directivas. (hotreload não renderiza diretivas. Then it's necessary reload the web page on tests).
Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green'; // Criando diretivas para tornar o background do elemento verde. Aqui usa-se assim: p(v-highlight) Bla bla.
    // el.style.backgroundColor = binding.value; // Criando diretivas para tornar o background do elemento azul. Aqui usa-se assim: p(v-highlight="'blue'") Bla bla.

    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000
    }

    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value
      }else {
        el.style.color = binding.value
      }
    }, delay)

    
  }
});

// Filtro global.
Vue.filter('to-lowercase', function(value){
    return (value.toLowerCase())
})

// Mixin global.
Vue.mixin({
  created(){
    console.log('Global Mixin - Created Hook')
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store, // usando vuex. ## ESTE BENDITO TEM QUE ESTAR ANTES DE components.
  components: { App },
  template: '<App />'

}).$mount('#app')

