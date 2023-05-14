// vue-router
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        // 1.
        component: () => import('@/components/calendar/CalendarApp.vue'),
    },
    {
        path: '/member/login',
        name: 'Login',
        // 1.
        component: () => import('@/components/member/Login.vue'),
    },
    {
        path: '/member/join',
        name: 'Join',
        // 1.
        component: () => import('@/components/member/Join.vue'),
    },
    {
        path: '/calendar/calendarForm',
        name: 'Form',
        // 1.
        component: () => import('@/components/calendar/CalendarForm.vue'),
    },
];

const router = createRouter({
    // 2.
    history: createWebHistory(),
    routes,
});

export default router;