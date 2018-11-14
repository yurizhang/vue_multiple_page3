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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 340);
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

    /** */ 340:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _item = __webpack_require__(341);

      const _item2 = _interopRequireDefault(_item);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _item2.default.install = function (Vue) {
        Vue.component(_item2.default.name, _item2.default);
      };

      exports.default = _item2.default;
      /** */ }),

    /** */ 341:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__ = __webpack_require__(342);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270b1a48_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__ = __webpack_require__(343);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_270b1a48_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 342:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
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

      const CARD_SCALE = 0.83;
      exports.default = {
        name: 'ElCarouselItem',

        props: {
          name: String,
          label: {
            type: [String, Number],
            default: '',
          },
        },

        data: function data() {
          return {
            hover: false,
            translate: 0,
            scale: 1,
            active: false,
            ready: false,
            inStage: false,
            animating: false,
          };
        },


        methods: {
          processIndex: function processIndex(index, activeIndex, length) {
            if (activeIndex === 0 && index === length - 1) {
              return -1;
            } if (activeIndex === length - 1 && index === 0) {
              return length;
            } if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
              return length + 1;
            } if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
              return -2;
            }
            return index;
          },
          calculateTranslate: function calculateTranslate(index, activeIndex, parentWidth) {
            if (this.inStage) {
              return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
            } if (index < activeIndex) {
              return -(1 + CARD_SCALE) * parentWidth / 4;
            }
            return (3 + CARD_SCALE) * parentWidth / 4;
          },
          translateItem: function translateItem(index, activeIndex, oldIndex) {
            const parentWidth = this.$parent.$el.offsetWidth;
            const length = this.$parent.items.length;
            if (this.$parent.type !== 'card' && oldIndex !== undefined) {
              this.animating = index === activeIndex || index === oldIndex;
            }
            if (index !== activeIndex && length > 2) {
              index = this.processIndex(index, activeIndex, length);
            }
            if (this.$parent.type === 'card') {
              this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
              this.active = index === activeIndex;
              this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
              this.scale = this.active ? 1 : CARD_SCALE;
            } else {
              this.active = index === activeIndex;
              this.translate = parentWidth * (index - activeIndex);
            }
            this.ready = true;
          },
          handleItemClick: function handleItemClick() {
            const parent = this.$parent;
            if (parent && parent.type === 'card') {
              const index = parent.items.indexOf(this);
              parent.setActiveItem(index);
            }
          },
        },

        created: function created() {
          this.$parent && this.$parent.updateItems();
        },
        destroyed: function destroyed() {
          this.$parent && this.$parent.updateItems();
        },
      };
      /** */ }),

    /** */ 343:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.ready), expression: 'ready',
          }],
          staticClass: 'el-carousel__item',
          class: {
            'is-active': _vm.active,
            'el-carousel__item--card': _vm.$parent.type === 'card',
            'is-in-stage': _vm.inStage,
            'is-hover': _vm.hover,
            'is-animating': _vm.animating,
          },
          style: ({
            msTransform: (`translateX(${_vm.translate}px) scale(${_vm.scale})`),
            webkitTransform: (`translateX(${_vm.translate}px) scale(${_vm.scale})`),
            transform: (`translateX(${_vm.translate}px) scale(${_vm.scale})`),
          }),
          on: { click: _vm.handleItemClick },
        }, [(_vm.$parent.type === 'card')?_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (!_vm.active), expression: '!active',
          }],
          staticClass: 'el-carousel__mask',
        }):_vm._e(), _vm._t('default')], 2);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** *** */ }));
