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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 348);
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

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 21:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/transitions/collapse-transition');
      /** */ }),

    /** */ 348:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _collapseItem = __webpack_require__(349);

      const _collapseItem2 = _interopRequireDefault(_collapseItem);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _collapseItem2.default.install = function (Vue) {
        Vue.component(_collapseItem2.default.name, _collapseItem2.default);
      };

      exports.default = _collapseItem2.default;
      /** */ }),

    /** */ 349:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__ = __webpack_require__(350);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2adc2d72_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__ = __webpack_require__(351);
      const normalizeComponent = __webpack_require__(0);
      /* script */

      /* template */

      /* template functional */
      const __vue_template_functional__ = false;
      /* styles */
      const __vue_styles__ = null;
      /* scopeId */
      const __vue_scopeId__ = null;
      /* moduleIdentifier (server only) */
      const __vue_module_identifier__ = null;
      const Component = normalizeComponent(
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2adc2d72_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 350:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _collapseTransition = __webpack_require__(21);

      const _collapseTransition2 = _interopRequireDefault(_collapseTransition);

      const _emitter = __webpack_require__(1);

      const _emitter2 = _interopRequireDefault(_emitter);

      const _util = __webpack_require__(2);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElCollapseItem',

        componentName: 'ElCollapseItem',

        mixins: [_emitter2.default],

        components: { ElCollapseTransition: _collapseTransition2.default },

        data: function data() {
          return {
            contentWrapStyle: {
              height: 'auto',
              display: 'block',
            },
            contentHeight: 0,
            focusing: false,
            isClick: false,
          };
        },


        inject: ['collapse'],

        props: {
          title: String,
          name: {
            type: [String, Number],
            default: function _default() {
              return this._uid;
            },
          },
        },

        computed: {
          isActive: function isActive() {
            return this.collapse.activeNames.indexOf(this.name) > -1;
          },
          id: function id() {
            return (0, _util.generateId)();
          },
        },

        methods: {
          handleFocus: function handleFocus() {
            const _this = this;

            setTimeout(() => {
              if (!_this.isClick) {
                _this.focusing = true;
              } else {
                _this.isClick = false;
              }
            }, 50);
          },
          handleHeaderClick: function handleHeaderClick() {
            this.dispatch('ElCollapse', 'item-click', this);
            this.focusing = false;
            this.isClick = true;
          },
          handleEnterClick: function handleEnterClick() {
            this.dispatch('ElCollapse', 'item-click', this);
          },
        },
      }; //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      /** */ }),

    /** */ 351:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', { staticClass: 'el-collapse-item', class: { 'is-active': _vm.isActive } }, [_c('div', {
          attrs: {
            role: 'tab', 'aria-expanded': _vm.isActive, 'aria-controls': (`el-collapse-content-${_vm.id}`), 'aria-describedby': (`el-collapse-content-${_vm.id}`),
          },
        }, [_c('div', {
          staticClass: 'el-collapse-item__header',
          class: {
            focusing: _vm.focusing,
            'is-active': _vm.isActive,
          },
          attrs: { role: 'button', id: (`el-collapse-head-${_vm.id}`), tabindex: '0' },
          on: {
            click: _vm.handleHeaderClick, keyup($event) { if (!('button' in $event)&&_vm._k($event.keyCode, 'space', 32, $event.key)&&_vm._k($event.keyCode, 'enter', 13, $event.key)) { return null; }$event.stopPropagation(); _vm.handleEnterClick($event); }, focus: _vm.handleFocus, blur($event) { _vm.focusing = false; },
          },
        }, [_c('i', { staticClass: 'el-collapse-item__arrow el-icon-arrow-right', class: { 'is-active': _vm.isActive } }), _vm._t('title', [_vm._v(_vm._s(_vm.title))])], 2)]), _c('el-collapse-transition', [_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.isActive), expression: 'isActive',
          }],
          staticClass: 'el-collapse-item__wrap',
          attrs: {
            role: 'tabpanel', 'aria-hidden': !_vm.isActive, 'aria-labelledby': (`el-collapse-head-${_vm.id}`), id: (`el-collapse-content-${_vm.id}`),
          },
        }, [_c('div', { staticClass: 'el-collapse-item__content' }, [_vm._t('default')], 2)])])], 1);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** *** */ }));
