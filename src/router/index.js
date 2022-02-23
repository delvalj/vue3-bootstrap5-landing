import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/components/HomePage";
import Typewriter from "@/components/Typewriter";
import ShineBanner from "@/components/ShineBanner";
import ImpossibleBanner from "@/components/ImpossibleBanner";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/impossible',
            component: ImpossibleBanner
        },
        {
            path: '/typewriter',
            component: Typewriter
        },
        {
            path: '/shine',
            component: ShineBanner
        },

    ]
})

export default router;
