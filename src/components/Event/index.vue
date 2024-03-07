<template>
  <div
    class="event-wrap"
    :style="{ 'background-image': `url(${require('@/assets/bg.jpg')})` }"
  >
    <Main />
  </div>
</template>

<script lang="ts" setup>
import Main from "../Event/Main/index.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
