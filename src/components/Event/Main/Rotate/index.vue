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

const awardList = computed(() => dataStore.getAwardList);

const animationStatus = computed(() => dataStore.getAnimationStatus);

const backgroundStatus = computed(() => dataStore.getBackgroundStatus);

const getRandomAngle = computed(() => dataStore.getRandomAngle);

//開場動畫
const openAnimation = () => {
  dataStore.actionBackgroundStatus();

  //轉盤
  gsap.to(turnTableCenter.value, {
    rotate: "2160",
    duration: 4,
    ease: "Power4.easeOut",
    onComplete: () => {
      dataStore.actionBackgroundStatus();
    },
  });
  //指針動畫
  gsap.to(pointer.value, {
    rotation: -30,
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

//隨機角度
const randomAngleFn = () => {
  const randomIndex = Math.floor(Math.random() * getRandomAngle.value.length);
  const randomAngle = Math.floor(
    Math.random() * 18 + getRandomAngle.value[randomIndex][0]
  );
  console.log("randomAngle:", randomAngle);
  return randomAngle; //指針角度
};

const randomAwardList = (ang: number) => {
  let Angle = 45;
  let newAng = ang - 2160;
  for (let i = 0; i < awardList.value.length; i++) {
    if (Angle < newAng) {
      Angle += 45;
    } else if (Angle > newAng) {
      return console.log(awardList.value[i]);
    }
  }
};

//轉盤執行
const closeRaiseAnimation = () => {
  let totalAngle = 2160;
  // let reduceAngle = 0;

  const animation = () => {
    console.log("totalAngle:", totalAngle);
    //轉盤

    let randomAngle = randomAngleFn();

    // if (reduceAngle === 0) {
    //   reduceAngle = 0;
    // } else {
    //   reduceAngle = 360 - randomAngle;
    // }
    totalAngle = totalAngle + randomAngle;
    gsap.to(turnTableCenter.value, {
      rotate: `+=${totalAngle - 22.5}`,
      duration: 4,
      ease: "Power4.easeOut",
      onComplete: () => {
        randomAwardList(totalAngle);
        dataStore.actionAnimationStatus();
        dataStore.actionBackgroundStatus();
        totalAngle = 2160;
      },
    });
    //指針動畫
    gsap.to(pointer.value, {
      rotation: -30,
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

  return animation;
};
const raiseAnimation = closeRaiseAnimation();

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
