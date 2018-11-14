'use strict';

exports.__esModule = true;

const _dom = require('element-ui/lib/utils/dom');

exports.default = {
  bind: function bind(el, binding, vnode) {
    let interval = null;
    let startTime = void 0;
    const handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    const clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = new Date();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  },
};
