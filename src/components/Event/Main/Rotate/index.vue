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
      ></div>
      <div
        class="turntable-top"
        :style="{
          'background-image': `url(${require('@/assets/turntable_top.png')})`,
        }"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
