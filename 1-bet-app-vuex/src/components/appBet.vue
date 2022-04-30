<template lang="">
  <div
    class="bet--coupon--app d-flex justify-content-between align-items-start"
  >
    <match-list :matchesList="matches" />
    <app-coupon :rate="couponrate"></app-coupon>
  </div>
</template>
<script>
import matchList from "./matchList.vue";
import appCoupon from "./appCoupon.vue";
export default {
  components: {
    matchList,
    appCoupon,
  },
  data() {
    return {

      couponrate: 1

    };
  },

};
</script>
<style lang=""></style>
