import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";

// router.beforeEach(async (to, from, next) => {
//     if (to.meta.requireAuth) {

//       try {

//         }
//       } catch (error) {
//         console.error("Error checking user authentication:", error);
//       }
//     } else {
//       next();
//     }
//   });

const app = createApp(App);
const pinia = createPinia();
app.use(store).use(router).use(pinia).mount("#app");
