<template>
  <div class="rotate-wrap">
    <div class="backgroundStatus" v-show="backgroundStatus"></div>
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
        ref="turnTableCenter"
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
      <div
        class="pointer"
        ref="pointer"
        :style="{
          'background-image': `url(${require('@/assets/pointer.png')})`,
        }"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import gsap from "gsap";
import { onMounted, ref, computed, watch } from "vue";
import useDataStore from "@/stores/useDataStore";

const dataStore = useDataStore();

const turnTableCenter = ref(null);

const pointer = ref(null);

const animationStatus = computed(() => dataStore.getAnimationStatus);

const backgroundStatus = computed(() => dataStore.getBackgroundStatus);

//開場動畫
const openAnimation = () => {
  dataStore.actionBackgroundStatus();

  //轉盤
  gsap.to(turnTableCenter.value, {
    rotate: "+=2160",
    duration: 4,
    ease: "Power4.easeOut",
    onComplete: () => {
      dataStore.actionBackgroundStatus();
    },
  });
  //指針動畫
  gsap.to(pointer.value, {
    rotation: 30,
    duration: 0.5,
    repeat: 5,
    yoyo: true,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(pointer.value, {
        rotation: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    },
  });
};

//轉盤執行
const raiseAnimation = () => {
  dataStore.actionBackgroundStatus();
  //轉盤
  gsap.to(turnTableCenter.value, {
    rotate: "+=2160",
    duration: 4,
    ease: "Power4.easeOut",
    onComplete: () => {
      dataStore.actionAnimationStatus();
      dataStore.actionBackgroundStatus();
    },
  });
  //指針動畫
  gsap.to(pointer.value, {
    rotation: 30,
    duration: 0.5,
    repeat: 5,
    yoyo: true,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(pointer.value, {
        rotation: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    },
  });
};

watch(animationStatus, (newVal) => {
  if (newVal) {
    raiseAnimation();
  }
});

onMounted(() => {
  openAnimation(); //開場執行動畫
});
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
