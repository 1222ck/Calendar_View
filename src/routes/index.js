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
        path: '/member/complete/:userEmail',
        name: 'Complete',
        // 1.
        component: () => import('@/components/member/Complete.vue'),
    },
    {
        path: '/calendar/calendarForm',
        name: 'calendarForm',
        // 1.
        component: () => import('@/components/calendar/CalendarForm.vue'),
    },
    {
        path: '/calendar/groupForm',
        name: 'groupForm',
        // 1.
        component: () => import('@/components/calendar/group/GroupForm.vue'),
    },
];

const router = createRouter({
    // 2.
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, form, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        const token = localStorage.getItem('token');

        if (token) {
            next();
        } else {
            router.push({ name: 'Login' });
        }
    } else {
        next();
    }
});

export default router;