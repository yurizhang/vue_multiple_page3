module.exports =
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, {
          /** *** */ 				configurable: false,
          /** *** */ 				enumerable: true,
          /** *** */ 				get: getter,
          /** *** */ 			});
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '/dist/';
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 72);
    /** *** */ }({

    /** */ 0:
    /** */ (function (module, exports) {
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file.
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      module.exports = function normalizeComponent(
        rawScriptExports,
        compiledTemplate,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier, /* server only */
      ) {
        let esModule;
        let scriptExports = rawScriptExports = rawScriptExports || {};

        // ES6 modules interop
        const type = typeof rawScriptExports.default;
        if (type === 'object' || type === 'function') {
          esModule = rawScriptExports;
          scriptExports = rawScriptExports.default;
        }

        // Vue.extend constructor export interop
        const options = typeof scriptExports === 'function'
          ? scriptExports.options
          : scriptExports;

        // render functions
        if (compiledTemplate) {
          options.render = compiledTemplate.render;
          options.staticRenderFns = compiledTemplate.staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = scopeId;
        }

        let hook;
        if (moduleIdentifier) { // server build
          hook = function (context) {
            // 2.3 injection
            context = context // cached call
        || (this.$vnode && this.$vnode.ssrContext) // stateful
        || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = injectStyles;
        }

        if (hook) {
          const functional = options.functional;
          const existing = functional
            ? options.render
            : options.beforeCreate;

          if (!functional) {
            // inject component registration as beforeCreate hook
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          } else {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return existing(h, context);
            };
          }
        }

        return {
          esModule,
          exports: scriptExports,
          options,
        };
      };
      /** */ }),

    /** */ 1:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/mixins/emitter');
      /** */ }),

    /** */ 10:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/clickoutside');
      /** */ }),

    /** */ 15:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/button');
      /** */ }),

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 72:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _dropdown = __webpack_require__(73);

      const _dropdown2 = _interopRequireDefault(_dropdown);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _dropdown2.default.install = function (Vue) {
        Vue.component(_dropdown2.default.name, _dropdown2.default);
      };

      exports.default = _dropdown2.default;
      /** */ }),

    /** */ 73:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(74);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
      const normalizeComponent = __webpack_require__(0);
      /* script */

      /* template */
      const __vue_template__ = null;
      /* template functional */
      const __vue_template_functional__ = false;
      /* styles */
      const __vue_styles__ = null;
      /* scopeId */
      const __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      const __vue_module_identifier__ = null;
      const Component = normalizeComponent(
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
        __vue_template__,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 74:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _clickoutside = __webpack_require__(10);

      const _clickoutside2 = _interopRequireDefault(_clickoutside);

      const _emitter = __webpack_require__(1);

      const _emitter2 = _interopRequireDefault(_emitter);

      const _migrating = __webpack_require__(8);

      const _migrating2 = _interopRequireDefault(_migrating);

      const _button = __webpack_require__(15);

      const _button2 = _interopRequireDefault(_button);

      const _buttonGroup = __webpack_require__(75);

      const _buttonGroup2 = _interopRequireDefault(_buttonGroup);

      const _util = __webpack_require__(2);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElDropdown',

        componentName: 'ElDropdown',

        mixins: [_emitter2.default, _migrating2.default],

        directives: { Clickoutside: _clickoutside2.default },

        components: {
          ElButton: _button2.default,
          ElButtonGroup: _buttonGroup2.default,
        },

        provide: function provide() {
          return {
            dropdown: this,
          };
        },


        props: {
          trigger: {
            type: String,
            default: 'hover',
          },
          type: String,
          size: {
            type: String,
            default: '',
          },
          splitButton: Boolean,
          hideOnClick: {
            type: Boolean,
            default: true,
          },
          placement: {
            type: String,
            default: 'bottom-end',
          },
          visibleArrow: {
            default: true,
          },
          showTimeout: {
            type: Number,
            default: 250,
          },
          hideTimeout: {
            type: Number,
            default: 150,
          },
        },

        data: function data() {
          return {
            timeout: null,
            visible: false,
            triggerElm: null,
            menuItems: null,
            menuItemsArray: null,
            dropdownElm: null,
            focusing: false,
            listId: `dropdown-menu-${(0, _util.generateId)()}`,
          };
        },


        computed: {
          dropdownSize: function dropdownSize() {
            return this.size || (this.$ELEMENT || {}).size;
          },
        },

        mounted: function mounted() {
          this.$on('menu-item-click', this.handleMenuItemClick);
          this.initEvent();
          this.initAria();
        },


        watch: {
          visible: function visible(val) {
            this.broadcast('ElDropdownMenu', 'visible', val);
            this.$emit('visible-change', val);
          },
          focusing: function focusing(val) {
            const selfDefine = this.$el.querySelector('.el-dropdown-selfdefine');
            if (selfDefine) {
              // 自定义
              if (val) {
                selfDefine.className += ' focusing';
              } else {
                selfDefine.className = selfDefine.className.replace('focusing', '');
              }
            }
          },
        },

        methods: {
          getMigratingConfig: function getMigratingConfig() {
            return {
              props: {
                'menu-align': 'menu-align is renamed to placement.',
              },
            };
          },
          show: function show() {
            const _this = this;

            if (this.triggerElm.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              _this.visible = true;
            }, this.trigger === 'click' ? 0 : this.showTimeout);
          },
          hide: function hide() {
            const _this2 = this;

            if (this.triggerElm.disabled) return;
            this.removeTabindex();
            this.resetTabindex(this.triggerElm);
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              _this2.visible = false;
            }, this.trigger === 'click' ? 0 : this.hideTimeout);
          },
          handleClick: function handleClick() {
            if (this.triggerElm.disabled) return;
            if (this.visible) {
              this.hide();
            } else {
              this.show();
            }
          },
          handleTriggerKeyDown: function handleTriggerKeyDown(ev) {
            const keyCode = ev.keyCode;
            if ([38, 40].indexOf(keyCode) > -1) {
              // up/down
              this.removeTabindex();
              this.resetTabindex(this.menuItems[0]);
              this.menuItems[0].focus();
              ev.preventDefault();
              ev.stopPropagation();
            } else if (keyCode === 13) {
              // space enter选中
              this.handleClick();
            } else if ([9, 27].indexOf(keyCode) > -1) {
              // tab || esc
              this.hide();
            }
          },
          handleItemKeyDown: function handleItemKeyDown(ev) {
            const keyCode = ev.keyCode;
            const target = ev.target;
            const currentIndex = this.menuItemsArray.indexOf(target);
            const max = this.menuItemsArray.length - 1;
            let nextIndex = void 0;
            if ([38, 40].indexOf(keyCode) > -1) {
              // up/down
              if (keyCode === 38) {
                // up
                nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
              } else {
                // down
                nextIndex = currentIndex < max ? currentIndex + 1 : max;
              }
              this.removeTabindex();
              this.resetTabindex(this.menuItems[nextIndex]);
              this.menuItems[nextIndex].focus();
              ev.preventDefault();
              ev.stopPropagation();
            } else if (keyCode === 13) {
              // enter选中
              this.triggerElm.focus();
              target.click();
              if (this.hideOnClick) {
                // click关闭
                this.visible = false;
              }
            } else if ([9, 27].indexOf(keyCode) > -1) {
              // tab // esc
              this.hide();
              this.triggerElm.focus();
            }
          },
          resetTabindex: function resetTabindex(ele) {
            // 下次tab时组件聚焦元素
            this.removeTabindex();
            ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
          },
          removeTabindex: function removeTabindex() {
            this.triggerElm.setAttribute('tabindex', '-1');
            this.menuItemsArray.forEach((item) => {
              item.setAttribute('tabindex', '-1');
            });
          },
          initAria: function initAria() {
            this.dropdownElm.setAttribute('id', this.listId);
            this.triggerElm.setAttribute('aria-haspopup', 'list');
            this.triggerElm.setAttribute('aria-controls', this.listId);
            this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']");
            this.menuItemsArray = Array.prototype.slice.call(this.menuItems);

            if (!this.splitButton) {
              // 自定义
              this.triggerElm.setAttribute('role', 'button');
              this.triggerElm.setAttribute('tabindex', '0');
              this.triggerElm.setAttribute('class', `${this.triggerElm.getAttribute('class') || ''} el-dropdown-selfdefine`); // 控制
            }
          },
          initEvent: function initEvent() {
            const _this3 = this;

            const trigger = this.trigger;


            const show = this.show;


            const hide = this.hide;


            const handleClick = this.handleClick;


            const splitButton = this.splitButton;


            const handleTriggerKeyDown = this.handleTriggerKeyDown;


            const handleItemKeyDown = this.handleItemKeyDown;

            this.triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

            const dropdownElm = this.dropdownElm = this.$slots.dropdown[0].elm;

            this.triggerElm.addEventListener('keydown', handleTriggerKeyDown); // triggerElm keydown
            dropdownElm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
            // 控制自定义元素的样式
            if (!splitButton) {
              this.triggerElm.addEventListener('focus', () => {
                _this3.focusing = true;
              });
              this.triggerElm.addEventListener('blur', () => {
                _this3.focusing = false;
              });
              this.triggerElm.addEventListener('click', () => {
                _this3.focusing = false;
              });
            }
            if (trigger === 'hover') {
              this.triggerElm.addEventListener('mouseenter', show);
              this.triggerElm.addEventListener('mouseleave', hide);
              dropdownElm.addEventListener('mouseenter', show);
              dropdownElm.addEventListener('mouseleave', hide);
            } else if (trigger === 'click') {
              this.triggerElm.addEventListener('click', handleClick);
            }
          },
          handleMenuItemClick: function handleMenuItemClick(command, instance) {
            if (this.hideOnClick) {
              this.visible = false;
            }
            this.$emit('command', command, instance);
          },
          focus: function focus() {
            this.triggerElm.focus && this.triggerElm.focus();
          },
        },

        render: function render(h) {
          const _this4 = this;

          const hide = this.hide;


          const splitButton = this.splitButton;


          const type = this.type;


          const dropdownSize = this.dropdownSize;


          const handleMainButtonClick = function handleMainButtonClick(event) {
            _this4.$emit('click', event);
            hide();
          };

          const triggerElm = !splitButton ? this.$slots.default : h(
            'el-button-group',
            null,
            [h(
              'el-button',
              {
                attrs: { type, size: dropdownSize },
                nativeOn: {
                  click: handleMainButtonClick,
                },
              },
              [this.$slots.default],
            ), h(
              'el-button',
              {
                ref: 'trigger',
                attrs: { type, size: dropdownSize },
                class: 'el-dropdown__caret-button',
              },
              [h(
                'i',
                { class: 'el-dropdown__icon el-icon-arrow-down' },
                [],
              )],
            )],
          );

          return h(
            'div',
            {
              class: 'el-dropdown',
              directives: [{
                name: 'clickoutside',
                value: hide,
              }],
            },
            [triggerElm, this.$slots.dropdown],
          );
        },
      };
      /** */ }),

    /** */ 75:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/button-group');
      /** */ }),

    /** */ 8:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/mixins/migrating');
      /** */ }),

    /** *** */ }));
