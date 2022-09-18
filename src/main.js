import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { initI18n } from "./locales";

import "./assets/main.css";

// locales
dayjs.locale("fr");
const i18n = initI18n("fr");

// vue app
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
