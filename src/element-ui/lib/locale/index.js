'use strict';

exports.__esModule = true;
exports.i18n = exports.use = exports.t = undefined;

const _zhCN = require('element-ui/lib/locale/lang/zh-CN');

const _zhCN2 = _interopRequireDefault(_zhCN);

const _vue = require('vue');

const _vue2 = _interopRequireDefault(_vue);

const _deepmerge = require('deepmerge');

const _deepmerge2 = _interopRequireDefault(_deepmerge);

const _format = require('./format');

const _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const format = (0, _format2.default)(_vue2.default);
let lang = _zhCN2.default;
let merged = false;
let i18nHandler = function i18nHandler() {
  const vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
  if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
    if (!merged) {
      merged = true;
      _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
    }
    return vuei18n.apply(this, arguments);
  }
};

const t = exports.t = function t(path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

const use = exports.use = function use(l) {
  lang = l || lang;
};

const i18n = exports.i18n = function i18n(fn) {
  i18nHandler = fn || i18nHandler;
};

exports.default = { use, t, i18n };
