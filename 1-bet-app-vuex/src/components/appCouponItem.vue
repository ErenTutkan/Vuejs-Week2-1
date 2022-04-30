<template lang="">
  <div class="coupon-item">
    <div class="w-100 mb-5 d-flex justify-content-between align-items-center">
      <span class="font-weight-bold">{{item.matchName}}</span>
      <span class="font-weight-bold text-info">{{item.rate}}</span>
    </div>
    <div class="w-100 d-flex justify-content-between align-items-center">
      <small class="mt-5"
        >Maç Sonucu : <span class="font-weight-bold">{{item.result}}</span></small
      >
      <small class="text-muted">Saat : {{item.hour}}</small>
      <button @click="$store.commit('coupon/deleteItem',item.id)">X</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
};
</script>
<style lang=""></style>
