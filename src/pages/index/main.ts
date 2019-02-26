import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/plugins/ishow_adapter'; // ishow_adapter适配器
import Trend from '@/plugins/handle';
import '@/assets/css.css';

Vue.prototype.Trend=Trend;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
