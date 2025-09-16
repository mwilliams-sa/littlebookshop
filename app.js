import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import router from "./router.js"; // must match the renamed file

const App = { template: `<router-view></router-view>` };
createApp(App).use(router).mount("#app");
