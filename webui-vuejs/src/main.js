import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import { makeServer } from "./server";
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

if (process.env.NODE_ENV === "development") {
  makeServer();
}
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
