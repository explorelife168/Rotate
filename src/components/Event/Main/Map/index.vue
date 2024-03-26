<template>
  <div class="map-wrap">
    <GoogleMap
      class="google-map"
      api-key="AIzaSyD8PsWHNJcQjOGQo7XLobJe9TcWMLLLm_0"
      :center="center"
      :zoom="15"
    >
      <!-- 圖釘 -->
      <Marker :options="markerOptions"></Marker>
      <div
        class="close"
        @click="closeMap"
        :style="{ 'background-image': `url(${require('@/assets/close.png')})` }"
      ></div>
      <InfoWindow :options="{ position: center, content: `${storeName}` }" />
    </GoogleMap>
  </div>
</template>
<script lang="ts" setup>
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import useDataStore from "@/stores/useDataStore";
import { computed } from "vue";

const dataStore = useDataStore();
const center = computed(() => {
  return { lat: dataStore.getMapLat, lng: dataStore.getMapLng };
});

const markerOptions = computed(() => {
  return {
    position: {
      lat: dataStore.getMapLat,
      lng: dataStore.getMapLng,
    },
  };
});

const storeName = computed(() => dataStore.getStoreName);
const closeMap = () => {
  dataStore.actionShowMapStatus();
};

// const mapInfo = () => {
//   let place = autoComplete.getPla;
// };
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
