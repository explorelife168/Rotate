import { defineStore } from "pinia";

type UseDataStore = {
  info: {
    chineseName: string;
    englishName: string;
    email: string;
    password: string;
  }[];
  loginStatus: boolean;
  awardList: string[];
  awardPosition: { name: string; position: number[] }[][];
  animationStatus: boolean;
  backgroundStatus: boolean;
  randomAngle: number[][];
  showAwardStatus: boolean;
  showMapStatus: boolean;
};

const useDataStore = defineStore({
  id: "Data",
  state: (): UseDataStore => ({
    info: [],
    loginStatus: false,
    awardList: [
      "鹽酥雞",
      "手搖飲",
      "火鍋",
      "滷肉飯",
      "滷味",
      "牛肉麵",
      "蔥抓餅",
      "蚵仔麵線",
    ],
    awardPosition: [
      [
        {
          name: "師園鹽酥雞 ",
          position: [25.030161483038416, 121.55137446271895],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.991606183731292, 121.54473606057157],
        },
        { name: "紅帽炸物", position: [24.13940408702781, 120.64296532734927] },
        {
          name: "龍哥鹹酥雞",
          position: [24.142195481395184, 120.67222578269501],
        },
      ],
      [
        {
          name: "50嵐 ",
          position: [24.14721862218091, 120.65167506091791],
        },
        {
          name: "清心福全",
          position: [24.136093894512378, 120.66403466557476],
        },
        {
          name: "可不可熟成紅茶",
          position: [24.14744805360611, 120.66163139267533],
        },
        {
          name: "麻古茶坊",
          position: [24.152274050247645, 120.66181585871028],
        },
      ],
      [
        {
          name: "輕井澤 ",
          position: [24.151286197264664, 120.65407604205103],
        },
        {
          name: "老四川巴蜀麻辣燙",
          position: [24.151021874478005, 120.65544933298655],
        },
        {
          name: "鼎王麻辣鍋",
          position: [224.1512335946849, 120.6512085573928],
        },
        {
          name: "無老鍋",
          position: [24.151204225501292, 120.65051118308966],
        },
      ],
      [
        {
          name: "小王煮瓜",
          position: [25.039365085549036, 121.49891543204177],
        },
        {
          name: "金峰魯肉飯",
          position: [25.03219163626178, 121.5187885743706],
        },
        {
          name: "黃記魯肉飯",
          position: [25.063864149300077, 121.52428147067566],
        },
        {
          name: "今大魯肉飯",
          position: [25.06471997017691, 121.49166441300476],
        },
      ],
      [
        {
          name: "松村煙燻滷味 ",
          position: [22.99684430763235, 120.20289233992658],
        },
        {
          name: "小赤佬干鍋",
          position: [22.994865182096266, 120.20347578410379],
        },
        {
          name: "GAI AA LOBI(蓋阿洛比)麻辣滷味",
          position: [24.144860273083246, 120.66247658044358],
        },
        {
          name: "鼎記滷味",
          position: [25.130329619808705, 121.74650888776043],
        },
      ],
      [
        {
          name: "老龐家傳牛肉麵 ",
          position: [22.990457475623288, 120.19714948225555],
        },
        {
          name: "癮自在",
          position: [24.81819884752796, 120.97219941114874],
        },
        {
          name: "竣師父牛肉麵",
          position: [25.043223522488105, 121.5451247958142],
        },
        {
          name: "廖家牛肉麵",
          position: [25.05868040511093, 121.52950252572137],
        },
      ],
      [
        {
          name: "師園鹽酥雞 ",
          position: [25.030161483038416, 121.55137446271895],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.991606183731292, 121.54473606057157],
        },
        { name: "紅帽炸物", position: [24.13940408702781, 120.64296532734927] },
        {
          name: "龍哥鹹酥雞",
          position: [24.142195481395184, 120.67222578269501],
        },
      ],
      [
        {
          name: "師園鹽酥雞 ",
          position: [25.030161483038416, 121.55137446271895],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.991606183731292, 121.54473606057157],
        },
        { name: "紅帽炸物", position: [24.13940408702781, 120.64296532734927] },
        {
          name: "龍哥鹹酥雞",
          position: [24.142195481395184, 120.67222578269501],
        },
      ],
      [
        {
          name: "師園鹽酥雞 ",
          position: [25.030161483038416, 121.55137446271895],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.991606183731292, 121.54473606057157],
        },
        { name: "紅帽炸物", position: [24.13940408702781, 120.64296532734927] },
        {
          name: "龍哥鹹酥雞",
          position: [24.142195481395184, 120.67222578269501],
        },
      ],
      [
        {
          name: "師園鹽酥雞 ",
          position: [25.030161483038416, 121.55137446271895],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.991606183731292, 121.54473606057157],
        },
        { name: "紅帽炸物", position: [24.13940408702781, 120.64296532734927] },
        {
          name: "龍哥鹹酥雞",
          position: [24.142195481395184, 120.67222578269501],
        },
      ],
    ],
    animationStatus: false,
    backgroundStatus: false,
    randomAngle: [
      [12.5, 32.5], //45
      [57.5, 87.5], //90
      [102.5, 122.5], //135
      [147.5, 167.5], //180
      [192.5, 212.5], //225
      [237.5, 257.5], //270
      [282.5, 302.5], //315
      [327.5, 347.5], //360
    ],
    showAwardStatus: false,
    showMapStatus: false,
  }),
  getters: {
    getAwardList(state) {
      return state.awardList;
    },
    getAnimationStatus(state) {
      return state.animationStatus;
    },
    getBackgroundStatus(state) {
      return state.backgroundStatus;
    },
    getRandomAngle(state) {
      return state.randomAngle;
    },
    getAwardPosition(state) {
      return state.awardPosition;
    },
    getShowAwardStatus(state) {
      return state.showAwardStatus;
    },
    getShowMapStatus(state) {
      return state.showMapStatus;
    },
  },
  actions: {
    // 產品畫面更新
    register(data1: string, data2: string, data3: string, data4: string) {
      this.info.push({
        chineseName: data1,
        englishName: data2,
        email: data3,
        password: data4,
      });
    },
    actionAnimationStatus() {
      this.animationStatus = !this.animationStatus;
    },
    actionBackgroundStatus() {
      this.backgroundStatus = !this.backgroundStatus;
    },
    actionShowAwardStatus() {
      this.showAwardStatus = !this.showAwardStatus;
    },
    actionShowMapStatus() {
      this.showMapStatus = !this.showMapStatus;
    },
  },
});

export default useDataStore;
