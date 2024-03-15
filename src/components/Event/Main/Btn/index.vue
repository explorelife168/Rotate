<template>
  <div class="btn-wrap">
    <div
      class="btn-start"
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

const btnText = ref("Start");
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
