import Vuex from 'vuex';
import Vue from 'vue';
import { state,  mutations, getters, actions } from './proces';
import { state, getters } from './app';
//import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        process: {
            namespaced: true,
            state,
            actions,
            mutations,
            getters
        },
        app: {
            namespaced: true,
            state,
            getters
        }
    }

    //plugins
})