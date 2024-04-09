import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import User from "@/entries/components/users/user.vue";
import Lists from "@/entries/components/lists/lists.vue";
import Mailings from "@/entries/components/mailings/mailings.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/clients',
        component: User,
        props: true
    },
    {
        path: '/clients/:id',
        component: User
    },
    {
        path: '/lists',
        component: Lists
    },
    {
        path: '/mailings',
        component: Mailings
    },
    // {
    //     path: '/courses'
    // },
    // {
    //     path: '/products'
    // },
    // {
    //     path: '/sales_list'
    // },
    // {
    //     path: '/statistic'
    // },
    // {
    //     path: '/promo_codes'
    // },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;