import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
        isAuthenticate: false
    },
    getters: {
        isAuthenticate: state => !!state.token,
        authStatus: state => state.status,
    },
    actions: {
    },
    mutations: {
    }
})
