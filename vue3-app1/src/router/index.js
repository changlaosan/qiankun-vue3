import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    }
];
const router = createRouter({
    // 微应用的入口名称
    history: createWebHistory('/app1'),
    routes
});

export default router;
