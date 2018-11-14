'use strict';

exports.__esModule = true;

const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

exports.isVNode = isVNode;
exports.getFirstComponentChild = getFirstComponentChild;

const _util = require('element-ui/lib/utils/util');

function isVNode(node) {
  return node !== null && (typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object' && (0, _util.hasOwn)(node, 'componentOptions');
}

function getFirstComponentChild(children) {
  return children && children.filter(c => c && c.tag)[0];
}
