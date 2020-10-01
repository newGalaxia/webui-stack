<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">
            {{ alert.message }}
          </div> -->
          <wlan></wlan>
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Wlan from "./components/Wlan.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Wlan,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
