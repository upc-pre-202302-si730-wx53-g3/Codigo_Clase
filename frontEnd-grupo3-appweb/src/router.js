import Home from "@/components/home-component.vue";
import Contact from "@/components/contact-component.vue";
import Login from "@/components/login-component.vue";
import NotFound from "@/components/not-found-component.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserList from "@/components/user-list-component.vue";

const routes = [
    { path: "/", component: Home},
    { path: "/contact", component: Contact},
    { path: "/login", component: Login},
    { path: "/users", component: UserList},
    { path: "/:pathMatch(.*)*", component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;