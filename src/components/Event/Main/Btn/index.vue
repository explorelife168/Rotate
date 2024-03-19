<template>
  <div class="btn-wrap">
    <div
      class="btn-start"
      @click="gameStart"
      :style="{
        'background-image': `url(${require('@/assets/alert_btn_highlight.png')})`,
      }"
    >
      <p>{{ btnText }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useDataStore from "@/stores/useDataStore";

const btnText = ref("Start");
const dataStore = useDataStore();

const gameStart = () => {
  if (dataStore.animationStatus) return;
  dataStore.actionBackgroundStatus();
  dataStore.actionAnimationStatus();
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
