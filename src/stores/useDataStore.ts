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
  }),
  getters: {},
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
  },
});

export default useDataStore;
