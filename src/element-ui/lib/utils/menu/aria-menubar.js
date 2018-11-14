'use strict';

exports.__esModule = true;

const _ariaMenuitem = require('./aria-menuitem');

const _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Menu = function Menu(domNode) {
  this.domNode = domNode;
  this.init();
};

Menu.prototype.init = function () {
  const menuChildren = this.domNode.childNodes;
  [].filter.call(menuChildren, child => child.nodeType === 1).forEach((child) => {
    new _ariaMenuitem2.default(child); // eslint-disable-line
  });
};
exports.default = Menu;
