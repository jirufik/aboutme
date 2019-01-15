import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About'
import Projects from '../components/Projects'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {path: '/', component: About},
        {path: '/about', component: About},
        {path: '/projects', component: Projects}
    ]
});