<template>
  <div>
    <p>{{ wlan.name }} REST</p>
    <Status v-bind:currentStatus="wlan.status"></Status>
     <p> WLAN SOCKET</p>
    <Status v-bind:currentStatus="wlanSocket.status"></Status>
  </div>
</template>

<script>
import io from "socket.io-client";
import Status from "./Status";

export default {
  name: "Wlan",
  components: {
    Status,
  },
  data() {
    return {
      wlan: {},
      socket: {},
      wlanSocket: {}
    
    };
  },
  created() {
    // socket server call
    this.socket = io("http://localhost:3000");

    //rest api call
    fetch("/api/v2/wlan")
      .then((res) => res.json())
      .then((json) => {
        this.wlan = json.value;
      });
  },
  mounted() {
    this.socket.on("wlan", (data) => {
      this.wlanSocket = data;
    });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
