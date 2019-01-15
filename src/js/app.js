import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '../components/App.vue'
import store from '../store'
import router from '../routes'

require.context("../img/", true, /\.(png|svg|jpg|gif)$/);

Vue.use(Vuetify);
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});