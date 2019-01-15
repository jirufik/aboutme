import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        langEn: true
    },
    getters: {
        isEnLang: state => state.langEn
    },
    mutations: {
        changeLang(state) {
            state.langEn = !state.langEn;
        }
    },
    actions: {
        async changeLang({commit}) {
            commit('changeLang');
        }
    }
});