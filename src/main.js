import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Pinia Config
import { createPinia } from "pinia";

// Emitter Config
import mitt from "mitt";
const Emitter = mitt();

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(createPinia())
  .provide("Emitter", Emitter)
  .use(vuetify)
  .use(router)
  .mount("#app");
