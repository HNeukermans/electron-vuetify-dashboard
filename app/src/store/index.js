import Vuex from 'vuex';
import Vue from 'vue';
import { state, mutations, getters, actions } from './ports'
//import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
    //plugins
})