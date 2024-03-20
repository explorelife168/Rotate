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
  animationStatus: boolean;
  backgroundStatus: boolean;
  randomAngle: number[][];
};

const useDataStore = defineStore({
  id: "Data",
  state: (): UseDataStore => ({
    info: [],
    loginStatus: false,
    awardList: [
      "Rice",
      "Noodles",
      "Fried Chicken",
      "Vegetarian Diet",
      "Soup",
      "Dessert",
      "Steak",
      "Drink",
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
  },
});

export default useDataStore;
