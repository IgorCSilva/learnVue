
import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    // No caso de repetição de código é bom utilizar 
    // getters para evitar o problema de manutenção em
    // vários arquivos.
    getters,
    // Para alterar valores de state.
    mutations,
    actions,
    modules: {
        counter
    }
})