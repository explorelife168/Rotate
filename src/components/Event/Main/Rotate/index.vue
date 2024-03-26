<template>
  <div class="rotate-wrap">
    <div
      class="award"
      v-show="getShowAwardStatus"
      ref="award"
      :style="{
        'background-image': `url(${require('@/assets/award.png')})`,
      }"
    >
      <div class="award-list" v-text="`${showAward}`"></div>
      <div class="font-map-container">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="font-map"
          @click="showMapStatus"
        />
        <div class="text" v-text="`${showAwardStoreName}`"></div>
      </div>
      <div
        class="close"
        @click="closeShowAward"
        :style="{ 'background-image': `url(${require('@/assets/close.png')})` }"
      ></div>
    </div>
    <div class="AwardBackgroundStatus" v-if="getShowAwardStatus"></div>
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
          'background-image': `url(${require('@/assets/turntable_center3.png')})`,
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
    <div class="map" v-show="getShowMapStatus">
      <Map />
    </div>
  </div>
</template>
<script lang="ts" setup>
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref, computed, watch } from "vue";
import useDataStore from "@/stores/useDataStore";
import Map from "../Map/index.vue";

const dataStore = useDataStore();

const turnTableCenter = ref(null);

const pointer = ref(null);

const award = ref(null);

const showAward = ref();

const showAwardStoreName = ref();

const awardList = computed(() => dataStore.getAwardList);

const animationStatus = computed(() => dataStore.getAnimationStatus);

const backgroundStatus = computed(() => dataStore.getBackgroundStatus);

const getRandomAngle = computed(() => dataStore.getRandomAngle);

const getAwardPosition = computed(() => dataStore.getAwardPosition);

const getShowAwardStatus = computed(() => dataStore.getShowAwardStatus);

const getShowMapStatus = computed(() => dataStore.getShowMapStatus);

// 開獎畫面關閉
const closeShowAward = () => {
  dataStore.actionShowAwardStatus();
};

const showMapStatus = () => {
  dataStore.actionShowMapStatus();
};

// 開場動畫;
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
  return { randomIndex, randomAngle }; //指針角度
};

// 隨機店名
const randomAwardStoreName = (idx: number) => {
  let randomStore = getAwardPosition.value[idx];
  let randomIdx = Math.floor(Math.random() * randomStore.length);
  let randomStoreName = randomStore[randomIdx].name;
  let lat = randomStore[randomIdx].position[0]; // 地圖座標
  let lng = randomStore[randomIdx].position[1]; // 地圖座標
  dataStore.actionMapLatLng(lat, lng, randomStoreName);
  showAwardStoreName.value = randomStoreName;
};
//轉盤執行
const closeRaiseAnimation = () => {
  let reduceAngle = 0;

  const animation = () => {
    const { randomIndex, randomAngle } = randomAngleFn();
    if (reduceAngle === 0) {
      reduceAngle = 0;
    }
    showAward.value = awardList.value[randomIndex]; // 顯示得獎內容
    randomAwardStoreName(randomIndex); // 隨機得獎店名
    //轉盤動畫
    gsap.to(turnTableCenter.value, {
      rotate: `+=${2160 + randomAngle + reduceAngle - 22.5}`,
      duration: 4,
      ease: "Power4.easeOut",
      onComplete: () => {
        reduceAngle = 360 - randomAngle + 22.5;
        dataStore.actionShowAwardStatus();
        dataStore.actionAnimationStatus();
        dataStore.actionBackgroundStatus();
        // //得獎彈窗動畫
        gsap.set(award.value, { y: -200, opacity: 1 });
        gsap.to(award.value, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "Power4.easeOut",
          // onComplete: () => {},
        });
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
