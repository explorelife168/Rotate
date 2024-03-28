<template>
  <div class="main-wrap">
    <Title />
    <Background />
    <Rotate />
    <Btn />
  </div>
</template>

<script lang="ts" setup>
import Title from "../Main/Title/index.vue";
import Background from "../Main/Background/index.vue";
import Rotate from "../Main/Rotate/index.vue";
import Btn from "../Main/Btn/index.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
