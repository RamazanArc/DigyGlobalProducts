import {createRouter,createWebHistory} from "vue-router";
import HomeA from "../views/HomeA.vue";
import {getAuth,onAuthStateChanged} from "firebase/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeA
        },
        {
            path: '/about',
            component: () => import('../views/AboutA.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path:'/contact',
            component: () =>import("../views/ContactA.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            component: () => import('../views/LoginA.vue')
        },
        {
            path: '/register',
            component: () => import('../views/RegisterA.vue'),

        },
    ]
})
const getCurrentUser = () => {                   //kullanıcı var mı yok mu
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async (to,from,next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if(await getCurrentUser()) {   //eğer kullanıcı varsa erişim izni veriliyor
            next();
        }else {
            alert("You dont have access");
            next("/login");
        }

    }else {
        next();
    }
});
export default router