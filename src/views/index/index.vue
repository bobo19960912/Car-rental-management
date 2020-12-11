<template>
  <div class="index">
    <!-- 汽车 -->
    <Cars></Cars>
    <!-- 地图 -->
    <Map></Map>
    <!-- 会员 -->
    <div id="children-view" :class="[show ? '' : 'open']">
      <router-view></router-view>
    </div>
    <!-- 导航栏 -->
    <Navbar class="navbar"></Navbar>
  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "../../components/navbar/index";
export default {
  components: {
    Map,
    Cars,
    Navbar
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    show() {
      console.log(this.$route.name);
      return this.$route.name == "index" ? false : true;
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
  &.open {
    right: -500px;
  }
}
.navbar{
    position: fixed;
    z-index: 101;
    bottom: 85px;
    left: 685px;
}
</style>
