import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard.vue"
import Wlan from "./components/Wlan.vue"

Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
if (process.env.NODE_ENV === "development") {
  makeServer();
}
Vue.config.productionTip = false;
const routes = [
  { path: '/', component: Dashboard },
  { path: '/wlan', component: Wlan },
  { path: '/dashboard', component: Dashboard },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
