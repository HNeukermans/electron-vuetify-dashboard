import Vue from 'vue'
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import Vuetify from 'vuetify';
import store from './store';

Vue.use(Vuetify)

new Vue({
    store,
    el: '#app',
    render: h => h(App3)
})