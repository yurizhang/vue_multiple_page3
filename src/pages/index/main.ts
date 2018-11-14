import Vue from 'vue';
// import { Button, Select } from 'element-ui';
import App from './App.vue';
import router from './router';
import '@/plugins/ishow_adapter'; // ishow_adapter适配器

import '@/assets/css.css';
// Vue.use(Button);
//Vue.use(Select);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
