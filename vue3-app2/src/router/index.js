import { createRouter, createWebHashHistory } from "vue-router";

// const routes = [
//     {
//         path: "/",
//         name: "Home",
//         component: () => import("../views/Home.vue")
//     },
//     {
//         path: "/about",
//         name: "About",
//         component: () => import("../views/About.vue")
//     }
// ]
const routes = [
    {
        path: '/app2',
        name: 'RouterView',
        component: () => import("../components/RouterView.vue"),
        children: [
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
        ]
    }
]

const router = createRouter({
    // 微应用的入口名称
    // history: createWebHistory('/app2'),
    history: createWebHashHistory(),
    routes
});

export default router;
