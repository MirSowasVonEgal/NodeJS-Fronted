import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import routes from './routes';
import AuthService from '../services/AuthService'
import store from '../store'

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  const authPages = ['/login', '/register'];
  const isPublicPage = authPages.includes(to.path);
  const token = localStorage.getItem('token');

  if(to.path == "/resetpassword") {
    return next();
  }

  if(token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    AuthService.getProfile().then(user => {
      store.dispatch("auth/user", user);
      if(isPublicPage) {
        return next('/');
      }
    }).catch(error => {
      if(!isPublicPage) {
        return next('/login');
      }
    });
  } else {
    if(!isPublicPage) {
      return next('/login');
    }
  }

  next();
})

export default router;
