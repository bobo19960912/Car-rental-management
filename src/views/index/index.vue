<template>
  <div class="index">
    <!-- 汽车 -->
    <Cars></Cars>
    <!-- 地图 -->
    <Map></Map>
    <!-- 会员 -->
    <div v-show="show" id="children-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
export default {
  components: {
    Map,
    Cars,
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    $route(newValue) {
      console.log(newValue.name);
      const name = newValue.name;
      if (name == "index") {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 101;
  width: 410px;
  background: #34393f;
}
</style>
