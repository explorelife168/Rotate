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
    </GoogleMap>
  </div>
</template>
<script lang="ts" setup>
import { GoogleMap, Marker } from "vue3-google-map";
// import useDataStore from "@/stores/useDataStore";
import { ref } from "vue";

const center = ref({ lat: 25.12662, lng: 121.45747 });

const markerOptions = ref({
  position: {
    lat: 25.12662,
    lng: 121.45747,
  },
});

const closeMap = () => {
  console.log("");
};
// const dataStore = useDataStore();

// const getShowAwardStatus = computed(() => dataStore.getShowAwardStatus);

// const initMap = () => {
//   const google: undefined | any = (window as any).google;
//   const myLatLng = { lat: 24.92218475939543, lng: 121.2141211272122 };
//   new google.maps.Map(map.value, {
//     center: myLatLng,
//     zoom: 14,
//   });
// };

// watch(getShowAwardStatus, (newVal) => {
//   if (newVal) {
//     initMap();
//     console.log("123");
//   }
// });
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
