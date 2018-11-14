'use strict';

exports.__esModule = true;

const _normalizeWheel = require('normalize-wheel');

const _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      const normalized = (0, _normalizeWheel2.default)(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

exports.default = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  },
};
