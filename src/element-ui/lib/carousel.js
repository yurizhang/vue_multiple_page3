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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 331);
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

    /** */ 18:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/resize-event');
      /** */ }),

    /** */ 331:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _main = __webpack_require__(332);

      const _main2 = _interopRequireDefault(_main);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _main2.default.install = function (Vue) {
        Vue.component(_main2.default.name, _main2.default);
      };

      exports.default = _main2.default;
      /** */ }),

    /** */ 332:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(333);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b46b8afc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(335);
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
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b46b8afc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 333:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _throttle = __webpack_require__(334);

      const _throttle2 = _interopRequireDefault(_throttle);

      const _resizeEvent = __webpack_require__(18);

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

      exports.default = {
        name: 'ElCarousel',

        props: {
          initialIndex: {
            type: Number,
            default: 0,
          },
          height: String,
          trigger: {
            type: String,
            default: 'hover',
          },
          autoplay: {
            type: Boolean,
            default: true,
          },
          interval: {
            type: Number,
            default: 3000,
          },
          indicatorPosition: String,
          indicator: {
            type: Boolean,
            default: true,
          },
          arrow: {
            type: String,
            default: 'hover',
          },
          type: String,
        },

        data: function data() {
          return {
            items: [],
            activeIndex: -1,
            containerWidth: 0,
            timer: null,
            hover: false,
          };
        },


        computed: {
          hasLabel: function hasLabel() {
            return this.items.some(item => item.label.toString().length > 0);
          },
        },

        watch: {
          items: function items(val) {
            if (val.length > 0) this.setActiveItem(this.initialIndex);
          },
          activeIndex: function activeIndex(val, oldVal) {
            this.resetItemPosition(oldVal);
            this.$emit('change', val, oldVal);
          },
          autoplay: function autoplay(val) {
            val ? this.startTimer() : this.pauseTimer();
          },
        },

        methods: {
          handleMouseEnter: function handleMouseEnter() {
            this.hover = true;
            this.pauseTimer();
          },
          handleMouseLeave: function handleMouseLeave() {
            this.hover = false;
            this.startTimer();
          },
          itemInStage: function itemInStage(item, index) {
            const length = this.items.length;
            if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
              return 'left';
            } if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
              return 'right';
            }
            return false;
          },
          handleButtonEnter: function handleButtonEnter(arrow) {
            const _this = this;

            this.items.forEach((item, index) => {
              if (arrow === _this.itemInStage(item, index)) {
                item.hover = true;
              }
            });
          },
          handleButtonLeave: function handleButtonLeave() {
            this.items.forEach((item) => {
              item.hover = false;
            });
          },
          updateItems: function updateItems() {
            this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
          },
          resetItemPosition: function resetItemPosition(oldIndex) {
            const _this2 = this;

            this.items.forEach((item, index) => {
              item.translateItem(index, _this2.activeIndex, oldIndex);
            });
          },
          playSlides: function playSlides() {
            if (this.activeIndex < this.items.length - 1) {
              this.activeIndex++;
            } else {
              this.activeIndex = 0;
            }
          },
          pauseTimer: function pauseTimer() {
            clearInterval(this.timer);
          },
          startTimer: function startTimer() {
            if (this.interval <= 0 || !this.autoplay) return;
            this.timer = setInterval(this.playSlides, this.interval);
          },
          setActiveItem: function setActiveItem(index) {
            if (typeof index === 'string') {
              const filteredItems = this.items.filter(item => item.name === index);
              if (filteredItems.length > 0) {
                index = this.items.indexOf(filteredItems[0]);
              }
            }
            index = Number(index);
            if (isNaN(index) || index !== Math.floor(index)) {
              'production' !== 'production' && console.warn('[Element Warn][Carousel]index must be an integer.');
              return;
            }
            const length = this.items.length;
            const oldIndex = this.activeIndex;
            if (index < 0) {
              this.activeIndex = length - 1;
            } else if (index >= length) {
              this.activeIndex = 0;
            } else {
              this.activeIndex = index;
            }
            if (oldIndex === this.activeIndex) {
              this.resetItemPosition(oldIndex);
            }
          },
          prev: function prev() {
            this.setActiveItem(this.activeIndex - 1);
          },
          next: function next() {
            this.setActiveItem(this.activeIndex + 1);
          },
          handleIndicatorClick: function handleIndicatorClick(index) {
            this.activeIndex = index;
          },
          handleIndicatorHover: function handleIndicatorHover(index) {
            if (this.trigger === 'hover' && index !== this.activeIndex) {
              this.activeIndex = index;
            }
          },
        },

        created: function created() {
          const _this3 = this;

          this.throttledArrowClick = (0, _throttle2.default)(300, true, (index) => {
            _this3.setActiveItem(index);
          });
          this.throttledIndicatorHover = (0, _throttle2.default)(300, (index) => {
            _this3.handleIndicatorHover(index);
          });
        },
        mounted: function mounted() {
          const _this4 = this;

          this.updateItems();
          this.$nextTick(() => {
            (0, _resizeEvent.addResizeListener)(_this4.$el, _this4.resetItemPosition);
            if (_this4.initialIndex < _this4.items.length && _this4.initialIndex >= 0) {
              _this4.activeIndex = _this4.initialIndex;
            }
            _this4.startTimer();
          });
        },
        beforeDestroy: function beforeDestroy() {
          if (this.$el) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetItemPosition);
        },
      };
      /** */ }),

    /** */ 334:
    /** */ (function (module, exports) {
      module.exports = require('throttle-debounce/throttle');
      /** */ }),

    /** */ 335:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', { staticClass: 'el-carousel', class: { 'el-carousel--card': _vm.type === 'card' }, on: { mouseenter($event) { $event.stopPropagation(); _vm.handleMouseEnter($event); }, mouseleave($event) { $event.stopPropagation(); _vm.handleMouseLeave($event); } } }, [_c('div', { staticClass: 'el-carousel__container', style: ({ height: _vm.height }) }, [_c('transition', { attrs: { name: 'carousel-arrow-left' } }, [(_vm.arrow !== 'never')?_c('button', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.arrow === 'always' || _vm.hover), expression: "arrow === 'always' || hover",
          }],
          staticClass: 'el-carousel__arrow el-carousel__arrow--left',
          attrs: { type: 'button' },
          on: { mouseenter($event) { _vm.handleButtonEnter('left'); }, mouseleave: _vm.handleButtonLeave, click($event) { $event.stopPropagation(); _vm.throttledArrowClick(_vm.activeIndex - 1); } },
        }, [_c('i', { staticClass: 'el-icon-arrow-left' })]):_vm._e()]), _c('transition', { attrs: { name: 'carousel-arrow-right' } }, [(_vm.arrow !== 'never')?_c('button', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.arrow === 'always' || _vm.hover), expression: "arrow === 'always' || hover",
          }],
          staticClass: 'el-carousel__arrow el-carousel__arrow--right',
          attrs: { type: 'button' },
          on: { mouseenter($event) { _vm.handleButtonEnter('right'); }, mouseleave: _vm.handleButtonLeave, click($event) { $event.stopPropagation(); _vm.throttledArrowClick(_vm.activeIndex + 1); } },
        }, [_c('i', { staticClass: 'el-icon-arrow-right' })]):_vm._e()]), _vm._t('default')], 2), (_vm.indicatorPosition !== 'none')?_c('ul', { staticClass: 'el-carousel__indicators', class: { 'el-carousel__indicators--labels': _vm.hasLabel, 'el-carousel__indicators--outside': _vm.indicatorPosition === 'outside' || _vm.type === 'card' } }, _vm._l((_vm.items), (item, index) => _c('li', { staticClass: 'el-carousel__indicator', class: { 'is-active': index === _vm.activeIndex }, on: { mouseenter($event) { _vm.throttledIndicatorHover(index); }, click($event) { $event.stopPropagation(); _vm.handleIndicatorClick(index); } } }, [_c('button', { staticClass: 'el-carousel__button' }, [(_vm.hasLabel)?_c('span', [_vm._v(_vm._s(item.label))]):_vm._e()])]))):_vm._e()]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** *** */ }));
