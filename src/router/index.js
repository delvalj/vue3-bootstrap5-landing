import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
// import Carousel from "@/components/Carousel";
// import cta from "@/components/cta";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutPage
        },
        // {
        //     path: '/link',
        //     component: AboutPage
        // },

    ]
})

export default router;
