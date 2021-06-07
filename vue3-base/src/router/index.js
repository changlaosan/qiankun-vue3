import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
            },
            {
                path: '/app1/:url*',
                name: 'app1',
                component: () => import('../views/Apps.vue')
            },
            {
                path: '/app2/:url*',
                name: 'App2',
                component: () => import('../views/Apps.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
