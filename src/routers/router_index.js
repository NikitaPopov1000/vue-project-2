import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/components/views/Login.vue";
import AdminPage from "@/components/views/AdminPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'admin',
            path: '/',
            component: AdminPage
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (!token) {
        if (to.name !== 'login') {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        if (to.name === 'login') {
            next('/');
        } else {
            next();
        }
    }
});

export default router