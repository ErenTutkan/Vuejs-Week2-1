<template lang="">
  <div class="card card-light multiply--container mt-20">
    <h4 class="text-center mb-10">Mislini Seç</h4>
    <div
      class="multiply--buttons mb-10 d-flex justify-content-center align-items-center"
    >
      <button class="btn-sm" v-for="item in money" :key="item.money" @click="selectMoney=item">{{item}}</button>
    </div>
    <div class="coupon--total--container mt-20">
      <div
        class="d-flex justify-content-between align-items-center font-weight-bold"
      >
        <span>Toplam Oran</span>
        <span class="text-info">{{getCouponRate.toFixed(2)}}</span>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Kupon Tutarı</span>
        <span class="font-weight-bold">{{selectMoney}} TL</span>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-5">
        <span>Tahmini Kazanç</span>
        <span class="font-weight-bold text-info">{{(getCouponRate*selectMoney).toFixed(2)}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {

  data() {
    return {
      money: [5, 10, 20, 30, 50, 100, 200, 500, 1000, 1500, 2500],
      selectMoney: 5,

    }
  },
  computed: {
    ...mapGetters({
      getCouponRate: "coupon/_getCouponRate"
    })
  }


};
</script>
<style lang=""></style>
