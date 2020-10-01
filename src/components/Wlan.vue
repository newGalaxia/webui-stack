<template>
  <div>
    <p>{{ wlan.name }}</p>
    <Status v-bind:currentStatus="wlan.status"></Status>
  </div>
</template>

<script>
import Status from "./Status";

export default {
  name: "Wlan",
  components: {
    Status,
  },
  data() {
    return { wlan: {} };
  },
  created() {
    fetch("/api/v2/wlan")
      .then((res) => res.json())
      .then((json) => {
        this.wlan = json.value;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
