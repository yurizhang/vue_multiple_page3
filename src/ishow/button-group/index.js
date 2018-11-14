import ElButtonGroup from '../button/src/button-group.vue';
import '../css/button-group.css';

// 在我们使用Vue.use()时，自动调用的是install，而install导出的必须是的组件
// eslint-disable-next-line
ElButtonGroup.install = function (Vue) {
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};
export default ElButtonGroup;
