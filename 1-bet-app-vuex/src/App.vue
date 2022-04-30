<template>
  <app-header />
  <div class="container">
    <app-bet></app-bet>
  </div>
</template>

<script>
import appBet from "./components/appBet";
import appHeader from "./components/appHeader.vue";
export default {
  components: {
    appHeader,
    appBet,
  },
};
</script>

<style></style>
