import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'
import './scss/main.scss'
import 'bootstrap'
// Filters
import './filters/filters.js'
//sweetalert2
window.Swal  = require('sweetalert2');
//Toast
const Toast  = Swal.mixin({
    toast            : true,
    position         : 'top-end',
    showConfirmButton: false,
    timer            : 3000,
    timerProgressBar : true,
    didOpen          : (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;


//services
import ApiService      from '@/services/api.service.js'
import * as JwtService from "@/services/jwt.service.js";

ApiService.init();

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name  : 'login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            ApiService.get('/user').then(response => {
                store.commit("auth/GETUSER", response.data.data);
                next()
            }).catch(error => {
                JwtService.destroyToken();
                next({name: 'login'})
            })
            // TODO : need to check the token on each route change
            // next();
        }
    }

    if (to.name == 'login') {
        if (JwtService.getToken()) {
            next({name: 'adminDashboard'});
        }
    }

    next();
    Vue.nextTick(() => {
        document.title = `${to.meta.title} - ${process.env.VUE_APP_TITLE}` || process.env.VUE_APP_TITLE
    })
});


new Vue({
    router,
    store,
    computed: {
        user() {
            return this.$store.state.auth.user;
        },
    },
    render  : h => h(App)
}).$mount('#app');

