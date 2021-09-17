/* eslint-disable */
/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import VueTimeLine from "@growthbunker/vuetimeline";
import VueElementLoading from 'vue-element-loading'
import App from './App.vue';

// router setup
import router from './routes/router';
// plugin setup
Vue.component('VueElementLoading', VueElementLoading)
Vue.use(DashboardPlugin);
Vue.use(VueTimeLine, {
  // Specify the theme to use: dark or light (dark by default).
  theme: "light",
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
