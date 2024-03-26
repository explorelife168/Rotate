import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

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

library.add(fas, fab, far);
const app = createApp(App);
const pinia = createPinia();
app
  .use(store)
  .use(router)
  .use(pinia)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
