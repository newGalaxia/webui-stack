<template>
  <div>
    <div class="input-group">
      <div id="radioBtn" class="btn-group">
        <a
          class="status__btn btn btn-sm"
          v-bind:class="{ 'status--enabled': currentStatus == Status.ENABLED }"
        ></a>
        <a
          class="status__btn btn btn-sm"
          v-bind:class="{ 'status--pending': currentStatus == Status.PENDING }"
        ></a>
        <a
          class="status__btn btn btn-sm"
          v-bind:class="{
            'status--disabled': currentStatus == Status.DISABLED,
          }"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../_helpers/status.enum";

export default {
  props: ["currentStatus"],
  data() {
    return { Status };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status__btn {
  height: 1rem;
  background-color: darkgrey;
}
.status--pending {
  background-color: orange;
}

.status--enabled {
  background-color: green;
}

.status--disabled {
  background-color: red;
}
</style>
