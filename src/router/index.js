import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/product', component: Product },
    { path: '/product/:id(\\d+)', component: Product },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
export default router

