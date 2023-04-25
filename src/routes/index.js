// vue-router
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/Login',
        name: 'Login',
        // 1.
        component: () => import('@/components/member/Login.vue'),
    },
];

const router = createRouter({
    // 2.
    history: createWebHistory(),
    routes,
});

export default router;