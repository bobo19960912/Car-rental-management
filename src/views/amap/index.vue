<template>
  <div>
    <el-amap ref="map" vid="amapDemo" class="amap-demo" :events="events"> </el-amap>
  </div>
</template>
<script>
//引入高德原生之后 无法与框架兼容
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Map",
  data() {
    return {
      map: null,
      events: {},
    };
  },
  mounted() {
    //高德地图原生挂载后
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapDemo", {
        center: new AMap.LngLat(116.404765, 39.918052),
        zoom: 8,
        
      });
    });
    
  },
};
</script>
<style lang="scss" scoped>
.amap-demo {
  height: 100vh;
}
</style>
