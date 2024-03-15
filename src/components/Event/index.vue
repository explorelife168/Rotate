<template>
  <div class="event-wrap">
    <!-- <div
      class="bg"
      :style="{ 'background-image': `url(${require('@/assets/bg.jpg')})` }"
    ></div> -->

    <Main />
  </div>
</template>

<script lang="ts" setup>
import Main from "../Event/Main/index.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
