import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeWork from '../views/HomeWork'
import ModalsWindow from '../views/ModalsWindow'
import About from '../views/About'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/modals',
        name: 'Modals',
        component: ModalsWindow
    },
    {
        path: '/home-work',
        name: 'Home work',
        component: HomeWork
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
