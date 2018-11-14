import ElButton from './src/button.vue';
import '../css/button.css';

// 在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
// eslint-disable-next-line
ElButton.install = function (Vue) {
  Vue.component(ElButton.name, ElButton);
};
export default ElButton;
