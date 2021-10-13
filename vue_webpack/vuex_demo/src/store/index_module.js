import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const firstState = {
    name: "1"
}
const secondState = {
    name: "2"
}

export default new Vuex.Store({
    state: {
        firstState,
        secondState
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})