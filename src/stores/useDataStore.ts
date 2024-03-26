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
  mapLat: number;
  mapLng: number;
  storeName: string;
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
          position: [25.024555372433937, 121.52902287926298],
        },
        {
          name: "洪家回春堂鹽酥雞",
          position: [24.147540599749682, 120.66041338696358],
        },
        {
          name: "紅帽炸物",
          position: [24.136426391183637, 120.64399490591265],
        },
        {
          name: "龍哥鹹酥雞",
          position: [24.14180110808625, 120.67152126489925],
        },
      ],
      [
        {
          name: "50嵐 ",
          position: [24.147156648081097, 120.65576588107403],
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
          position: [24.151128940928484, 120.65404118942851],
        },
        {
          name: "老四川巴蜀麻辣燙",
          position: [24.15077862768997, 120.65532742352207],
        },
        {
          name: "鼎王麻辣鍋",
          position: [24.150999297783684, 120.65118805580191],
        },
        {
          name: "無老鍋",
          position: [24.150989035548083, 120.65051576544255],
        },
      ],
      [
        {
          name: "小王煮瓜",
          position: [25.03921777934086, 121.49860527686563],
        },
        {
          name: "金峰魯肉飯",
          position: [25.032025382557613, 121.51849996739602],
        },
        {
          name: "黃記魯肉飯",
          position: [25.063668562973234, 121.52414266719362],
        },
        {
          name: "今大魯肉飯",
          position: [25.064429434647632, 121.49162493792261],
        },
      ],
      [
        {
          name: "松村煙燻滷味",
          position: [24.15032767074465, 120.65283119295054],
        },
        {
          name: "小赤佬干鍋",
          position: [22.99466391768045, 120.20336888358678],
        },
        {
          name: "GAI AA LOBI(蓋阿洛比)麻辣滷味",
          position: [24.14465403852001, 120.66252001157065],
        },
        {
          name: "鼎記滷味",
          position: [25.13018268002704, 121.74646708170427],
        },
      ],
      [
        {
          name: "老龐家傳牛肉麵 ",
          position: [22.990328087608003, 120.19711760062913],
        },
        {
          name: "癮自在",
          position: [24.817996016795135, 120.97208461481341],
        },
        {
          name: "竣師父牛肉麵",
          position: [25.04300899088556, 121.54512564717375],
        },
        {
          name: "廖家牛肉麵",
          position: [25.056891235341393, 121.52895095937544],
        },
      ],
      [
        {
          name: "帕克炸蛋蔥油餅",
          position: [25.01683796726264, 121.46111741170216],
        },
        {
          name: "北投炸彈蔥油餅",
          position: [25.136221015836828, 121.50424621508638],
        },
        {
          name: "金珠蔥油餅",
          position: [24.673772499418963, 121.76168878870145],
        },
        {
          name: "黃記蔥油餅",
          position: [22.748970178463146, 121.15675341642364],
        },
      ],
      [
        {
          name: "油庫口蚵仔麵線",
          position: [25.01893119599628, 121.4668645925086],
        },
        {
          name: "同安街麵線羹",
          position: [25.02299081425193, 121.52097640378953],
        },
        {
          name: "樂業麵線",
          position: [25.020316524514893, 121.55255525091415],
        },
        {
          name: "阿川蚵仔麵線",
          position: [25.056976998396184, 121.51628277325287],
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
    mapLat: 0,
    mapLng: 0,
    storeName: "",
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
    getMapLat(state) {
      return state.mapLat;
    },
    getMapLng(state) {
      return state.mapLng;
    },
    getStoreName(state) {
      return state.storeName;
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
    actionMapLatLng(lat: number, lng: number, name: string) {
      this.mapLat = lat;
      this.mapLng = lng;
      this.storeName = name;
    },
  },
});

export default useDataStore;
