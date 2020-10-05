import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
// import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(VueRouter)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
if (process.env.NODE_ENV === "development") {
  makeServer();
}
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
