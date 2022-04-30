<template>
  <div class="coupon--total--container">
    <div class="card my-coupon">
      <div class="card--header">
        <h4>Kuponum</h4>
      </div>
      <div class="card--body">
        <app-coupon-item v-for="item in getList" :key="item.id" :item="item"></app-coupon-item>

      </div>
    </div>
    <app-coupon-result :cuoponrate="1"></app-coupon-result>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import appCouponItem from "./appCouponItem.vue";
import appCouponResult from "./appCouponResult";
export default {
  components: {
    appCouponItem,
    appCouponResult,
  },
  computed: {
    ...mapGetters({
      getList: "coupon/_getList"
    })
  }

};
</script>
<style lang=""></style>
