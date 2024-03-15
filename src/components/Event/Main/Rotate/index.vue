<template>
  <div class="rotate-wrap">
    <div
      class="turntable-bottom"
      :style="{
        'background-image': `url(${require('@/assets/turntable_bottom.png')})`,
      }"
    >
      <div
        class="turntable-center"
        :style="{
          'background-image': `url(${require('@/assets/turntable_center.png')})`,
        }"
      >
        <div
          class="awardList"
          v-for="list in dataStore.awardList"
          :key="list"
          v-text="`${list}`"
        ></div>
      </div>
      <div
        class="turntable-top"
        :style="{
          'background-image': `url(${require('@/assets/turntable_top.png')})`,
        }"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDataStore from "@/stores/useDataStore";

const dataStore = useDataStore();
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
