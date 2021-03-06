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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 202);
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

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 202:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _main = __webpack_require__(203);

      const _main2 = _interopRequireDefault(_main);

      const _directive = __webpack_require__(206);

      const _directive2 = _interopRequireDefault(_directive);

      const _vue = __webpack_require__(4);

      const _vue2 = _interopRequireDefault(_vue);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      _vue2.default.directive('popover', _directive2.default);

      /* istanbul ignore next */
      _main2.default.install = function (Vue) {
        Vue.directive('popover', _directive2.default);
        Vue.component(_main2.default.name, _main2.default);
      };
      _main2.default.directive = _directive2.default;

      exports.default = _main2.default;
      /** */ }),

    /** */ 203:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(204);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16d0194f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(205);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16d0194f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 204:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _vuePopper = __webpack_require__(7);

      const _vuePopper2 = _interopRequireDefault(_vuePopper);

      const _dom = __webpack_require__(3);

      const _util = __webpack_require__(2);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      exports.default = {
        name: 'ElPopover',

        mixins: [_vuePopper2.default],

        props: {
          trigger: {
            type: String,
            default: 'click',
            validator: function validator(value) {
              return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
            },
          },
          openDelay: {
            type: Number,
            default: 0,
          },
          title: String,
          disabled: Boolean,
          content: String,
          reference: {},
          popperClass: String,
          width: {},
          visibleArrow: {
            default: true,
          },
          arrowOffset: {
            type: Number,
            default: 0,
          },
          transition: {
            type: String,
            default: 'fade-in-linear',
          },
        },

        computed: {
          tooltipId: function tooltipId() {
            return `el-popover-${(0, _util.generateId)()}`;
          },
        },
        watch: {
          showPopper: function showPopper(val) {
            if (this.disabled) {
              return;
            }
            val ? this.$emit('show') : this.$emit('hide');
          },
        },

        mounted: function mounted() {
          const _this = this;

          let reference = this.referenceElm = this.reference || this.$refs.reference;
          const popper = this.popper || this.$refs.popper;

          if (!reference && this.$slots.reference && this.$slots.reference[0]) {
            reference = this.referenceElm = this.$slots.reference[0].elm;
          }
          // 可访问性
          if (reference) {
            (0, _dom.addClass)(reference, 'el-popover__reference');
            reference.setAttribute('aria-describedby', this.tooltipId);
            reference.setAttribute('tabindex', 0); // tab序列
            popper.setAttribute('tabindex', 0);

            if (this.trigger !== 'click') {
              (0, _dom.on)(reference, 'focusin', () => {
                _this.handleFocus();
                const instance = reference.__vue__;
                if (instance && typeof instance.focus === 'function') {
                  instance.focus();
                }
              });
              (0, _dom.on)(popper, 'focusin', this.handleFocus);
              (0, _dom.on)(reference, 'focusout', this.handleBlur);
              (0, _dom.on)(popper, 'focusout', this.handleBlur);
            }
            (0, _dom.on)(reference, 'keydown', this.handleKeydown);
            (0, _dom.on)(reference, 'click', this.handleClick);
          }
          if (this.trigger === 'click') {
            (0, _dom.on)(reference, 'click', this.doToggle);
            (0, _dom.on)(document, 'click', this.handleDocumentClick);
          } else if (this.trigger === 'hover') {
            (0, _dom.on)(reference, 'mouseenter', this.handleMouseEnter);
            (0, _dom.on)(popper, 'mouseenter', this.handleMouseEnter);
            (0, _dom.on)(reference, 'mouseleave', this.handleMouseLeave);
            (0, _dom.on)(popper, 'mouseleave', this.handleMouseLeave);
          } else if (this.trigger === 'focus') {
            if (reference.querySelector('input, textarea')) {
              (0, _dom.on)(reference, 'focusin', this.doShow);
              (0, _dom.on)(reference, 'focusout', this.doClose);
            } else {
              (0, _dom.on)(reference, 'mousedown', this.doShow);
              (0, _dom.on)(reference, 'mouseup', this.doClose);
            }
          }
        },


        methods: {
          doToggle: function doToggle() {
            this.showPopper = !this.showPopper;
          },
          doShow: function doShow() {
            this.showPopper = true;
          },
          doClose: function doClose() {
            this.showPopper = false;
          },
          handleFocus: function handleFocus() {
            (0, _dom.addClass)(this.referenceElm, 'focusing');
            if (this.trigger !== 'manual') this.showPopper = true;
          },
          handleClick: function handleClick() {
            (0, _dom.removeClass)(this.referenceElm, 'focusing');
          },
          handleBlur: function handleBlur() {
            (0, _dom.removeClass)(this.referenceElm, 'focusing');
            if (this.trigger !== 'manual') this.showPopper = false;
          },
          handleMouseEnter: function handleMouseEnter() {
            const _this2 = this;

            clearTimeout(this._timer);
            if (this.openDelay) {
              this._timer = setTimeout(() => {
                _this2.showPopper = true;
              }, this.openDelay);
            } else {
              this.showPopper = true;
            }
          },
          handleKeydown: function handleKeydown(ev) {
            if (ev.keyCode === 27 && this.trigger !== 'manual') {
              // esc
              this.doClose();
            }
          },
          handleMouseLeave: function handleMouseLeave() {
            const _this3 = this;

            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
              _this3.showPopper = false;
            }, 200);
          },
          handleDocumentClick: function handleDocumentClick(e) {
            let reference = this.reference || this.$refs.reference;
            const popper = this.popper || this.$refs.popper;

            if (!reference && this.$slots.reference && this.$slots.reference[0]) {
              reference = this.referenceElm = this.$slots.reference[0].elm;
            }
            if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
            this.showPopper = false;
          },
          handleAfterEnter: function handleAfterEnter() {
            this.$emit('after-enter');
          },
          handleAfterLeave: function handleAfterLeave() {
            this.$emit('after-leave');
            this.doDestroy();
          },
        },

        destroyed: function destroyed() {
          const reference = this.reference;

          (0, _dom.off)(reference, 'click', this.doToggle);
          (0, _dom.off)(reference, 'mouseup', this.doClose);
          (0, _dom.off)(reference, 'mousedown', this.doShow);
          (0, _dom.off)(reference, 'focusin', this.doShow);
          (0, _dom.off)(reference, 'focusout', this.doClose);
          (0, _dom.off)(reference, 'mousedown', this.doShow);
          (0, _dom.off)(reference, 'mouseup', this.doClose);
          (0, _dom.off)(reference, 'mouseleave', this.handleMouseLeave);
          (0, _dom.off)(reference, 'mouseenter', this.handleMouseEnter);
          (0, _dom.off)(document, 'click', this.handleDocumentClick);
        },
      };
      /** */ }),

    /** */ 205:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('span', [_c('transition', { attrs: { name: _vm.transition }, on: { 'after-enter': _vm.handleAfterEnter, 'after-leave': _vm.handleAfterLeave } }, [_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (!_vm.disabled && _vm.showPopper), expression: '!disabled && showPopper',
          }],
          ref: 'popper',
          staticClass: 'el-popover el-popper',
          class: [_vm.popperClass, _vm.content && 'el-popover--plain'],
          style: ({ width: `${_vm.width}px` }),
          attrs: { role: 'tooltip', id: _vm.tooltipId, 'aria-hidden': (_vm.disabled || !_vm.showPopper) ? 'true' : 'false' },
        }, [(_vm.title)?_c('div', { staticClass: 'el-popover__title', domProps: { textContent: _vm._s(_vm.title) } }):_vm._e(), _vm._t('default', [_vm._v(_vm._s(_vm.content))])], 2)]), _vm._t('reference')], 2);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 206:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      const getReference = function getReference(el, binding, vnode) {
        const _ref = binding.expression ? binding.value : binding.arg;
        const popper = vnode.context.$refs[_ref];
        if (popper) {
          if (Array.isArray(popper)) {
            popper[0].$refs.reference = el;
          } else {
            popper.$refs.reference = el;
          }
        }
      };

      exports.default = {
        bind: function bind(el, binding, vnode) {
          getReference(el, binding, vnode);
        },
        inserted: function inserted(el, binding, vnode) {
          getReference(el, binding, vnode);
        },
      };
      /** */ }),

    /** */ 3:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/dom');
      /** */ }),

    /** */ 4:
    /** */ (function (module, exports) {
      module.exports = require('vue');
      /** */ }),

    /** */ 7:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/vue-popper');
      /** */ }),

    /** *** */ }));
