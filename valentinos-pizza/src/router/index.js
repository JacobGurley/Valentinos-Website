import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ValentinosMenu from "@/components/ValentinosMenu.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/menu',
        name: 'Menu',
        component: ValentinosMenu
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;