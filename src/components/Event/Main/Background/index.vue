<template>
  <div
    class="bg-wrap"
    :style="{
      'background-image': `url(${require('@/assets/bg_m.jpg')}), url(${require('@/assets/bg_repeat.jpg')})`,
    }"
  ></div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
