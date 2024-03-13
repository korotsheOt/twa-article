import { createApp } from "vue/dist/vue.esm-bundler";
import { router } from "./router.js";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
