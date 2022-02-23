import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import Typewriter from "@/components/Typewriter";
import ShineBanner from "@/components/ShineBanner";


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
        {
            path: '/about',
            component: Typewriter
        },
        {
            path: '/about',
            component: ShineBanner
        },

    ]
})

export default router;
