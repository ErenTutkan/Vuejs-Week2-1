<template lang="">
  <div class="card competition-list mr-10">
    <div class="card--header">
      <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
    </div>
    <div class="card--body">
      <match-item
        v-for="item in getList"
        :key="item.id"
        :item="item"
      ></match-item>
    </div>
  </div>
</template>
<script>
import matchItem from "./matchItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    matchItem,
  },
  computed: {
    ...mapGetters({ getList: "matches/_getList" })
  }

};
</script>
<style lang=""></style>
