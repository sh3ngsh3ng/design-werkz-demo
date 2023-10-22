import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createRouter, createWebHistory } from "vue-router"



import MainPage from "@/pages/MainPage"
import AboutUsPage from "@/pages/AboutUsPage"
import ServicesPage from "@/pages/ServicesPage"
import PortfolioPage from "@/pages/PortfolioPage"
import ProgressPage from "@/pages/ProgressPage"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: MainPage
        },
        {
            path: "/about",
            name: "About Us",
            component: AboutUsPage
        },
        {
            path: "/services",
            name: "Services",
            component: ServicesPage
        },
        {
            path: "/portfolio",
            name: "Portfolio",
            component: PortfolioPage
        },
        {
            path: "/:pathMatch(.*)*",
            name: "Not Found",
            component: ProgressPage
        }

    ]
})

const globalAsset = {
    methods: {
        goToPage: function (page) {
            this.$router.push(page)
        }
    },
    data: function () {
        return {
            currentPage: 'test'
        }
    }
}
createApp(App).use(router).mixin(globalAsset).mount('#app')
