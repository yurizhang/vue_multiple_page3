import Vue from 'vue';
import Popover from './src/main';
import directive from './src/directive';

Vue.directive('popover', directive);

/* istanbul ignore next */
Popover.install = function (Vue) {
  Vue.directive('popover', directive);
  Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;
