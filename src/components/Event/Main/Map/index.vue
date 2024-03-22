<template>
  <div class="map-wrap">
    <div
      class="map"
      ref="map"
      style="
         {
          width: 500px;
          height: 500px;
        }
      "
    ></div>
  </div>
</template>
<script lang="ts" setup>
import useDataStore from "@/stores/useDataStore";

import { ref, watch, computed } from "vue";

const map = ref(null);

const dataStore = useDataStore();

const getShowAwardStatus = computed(() => dataStore.getShowAwardStatus);

const initMap = () => {
  const google: undefined | any = (window as any).google;
  const myLatLng = { lat: 24.112316131591797, lng: 120.61644744873047 };
  let maps: any = new google.maps.Map(map.value, {
    center: myLatLng,
    zoom: 14,
  });

  let marker = new google.maps.marker.AdvancedMarkerElement({
    position: myLatLng,
    map: maps,
    title: "hello",
  });
  marker.setPosition();
};

watch(getShowAwardStatus, (newVal) => {
  if (newVal) {
    initMap();
    console.log("123");
  }
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
