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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 358);
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

    /** */ 10:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/clickoutside');
      /** */ }),

    /** */ 15:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/button');
      /** */ }),

    /** */ 358:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _main = __webpack_require__(359);

      const _main2 = _interopRequireDefault(_main);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _main2.default.install = function (Vue) {
        Vue.component(_main2.default.name, _main2.default);
      };

      exports.default = _main2.default;
      /** */ }),

    /** */ 359:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(360);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02fb592a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(376);
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
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02fb592a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 360:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _color = __webpack_require__(53);

      const _color2 = _interopRequireDefault(_color);

      const _pickerDropdown = __webpack_require__(361);

      const _pickerDropdown2 = _interopRequireDefault(_pickerDropdown);

      const _clickoutside = __webpack_require__(10);

      const _clickoutside2 = _interopRequireDefault(_clickoutside);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElColorPicker',

        props: {
          value: String,
          showAlpha: Boolean,
          colorFormat: String,
          disabled: Boolean,
          size: String,
          popperClass: String,
          predefine: Array,
        },

        inject: {
          elForm: {
            default: '',
          },
          elFormItem: {
            default: '',
          },
        },

        directives: { Clickoutside: _clickoutside2.default },

        computed: {
          displayedColor: function displayedColor() {
            if (!this.value && !this.showPanelColor) {
              return 'transparent';
            }

            return this.displayedRgb(this.color, this.showAlpha);
          },
          _elFormItemSize: function _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
          },
          colorSize: function colorSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
          },
          colorDisabled: function colorDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
          },
        },

        watch: {
          value: function value(val) {
            if (!val) {
              this.showPanelColor = false;
            } else if (val && val !== this.color.value) {
              this.color.fromString(val);
            }
          },

          color: {
            deep: true,
            handler: function handler() {
              this.showPanelColor = true;
            },
          },
          displayedColor: function displayedColor(val) {
            if (!this.showPicker) return;
            const currentValueColor = new _color2.default({
              enableAlpha: this.showAlpha,
              format: this.colorFormat,
            });
            currentValueColor.fromString(this.value);

            const currentValueColorRgb = this.displayedRgb(currentValueColor, this.showAlpha);
            if (val !== currentValueColorRgb) {
              this.$emit('active-change', val);
            }
          },
        },

        methods: {
          handleTrigger: function handleTrigger() {
            if (this.colorDisabled) return;
            this.showPicker = !this.showPicker;
          },
          confirmValue: function confirmValue(value) {
            this.$emit('input', this.color.value);
            this.$emit('change', this.color.value);
            this.showPicker = false;
          },
          clearValue: function clearValue() {
            this.$emit('input', null);
            this.$emit('change', null);
            this.showPanelColor = false;
            this.showPicker = false;
            this.resetColor();
          },
          hide: function hide() {
            this.showPicker = false;
            this.resetColor();
          },
          resetColor: function resetColor() {
            const _this = this;

            this.$nextTick((_) => {
              if (_this.value) {
                _this.color.fromString(_this.value);
              } else {
                _this.showPanelColor = false;
              }
            });
          },
          displayedRgb: function displayedRgb(color, showAlpha) {
            if (!(color instanceof _color2.default)) {
              throw Error('color should be instance of Color Class');
            }

            const _color$toRgb = color.toRgb();


            const r = _color$toRgb.r;


            const g = _color$toRgb.g;


            const b = _color$toRgb.b;

            return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})` : `rgb(${r}, ${g}, ${b})`;
          },
        },

        mounted: function mounted() {
          const value = this.value;
          if (value) {
            this.color.fromString(value);
          }
          this.popperElm = this.$refs.dropdown.$el;
        },
        data: function data() {
          const color = new _color2.default({
            enableAlpha: this.showAlpha,
            format: this.colorFormat,
          });
          return {
            color,
            showPicker: false,
            showPanelColor: false,
          };
        },


        components: {
          PickerDropdown: _pickerDropdown2.default,
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
      /** */ }),

    /** */ 361:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__ = __webpack_require__(362);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e6b9d28_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__ = __webpack_require__(375);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e6b9d28_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 362:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _svPanel = __webpack_require__(363);

      const _svPanel2 = _interopRequireDefault(_svPanel);

      const _hueSlider = __webpack_require__(366);

      const _hueSlider2 = _interopRequireDefault(_hueSlider);

      const _alphaSlider = __webpack_require__(369);

      const _alphaSlider2 = _interopRequireDefault(_alphaSlider);

      const _predefine = __webpack_require__(372);

      const _predefine2 = _interopRequireDefault(_predefine);

      const _vuePopper = __webpack_require__(7);

      const _vuePopper2 = _interopRequireDefault(_vuePopper);

      const _locale = __webpack_require__(5);

      const _locale2 = _interopRequireDefault(_locale);

      const _input = __webpack_require__(6);

      const _input2 = _interopRequireDefault(_input);

      const _button = __webpack_require__(15);

      const _button2 = _interopRequireDefault(_button);

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

      exports.default = {
        name: 'el-color-picker-dropdown',

        mixins: [_vuePopper2.default, _locale2.default],

        components: {
          SvPanel: _svPanel2.default,
          HueSlider: _hueSlider2.default,
          AlphaSlider: _alphaSlider2.default,
          ElInput: _input2.default,
          ElButton: _button2.default,
          Predefine: _predefine2.default,
        },

        props: {
          color: {
            required: true,
          },
          showAlpha: Boolean,
          predefine: Array,
        },

        data: function data() {
          return {
            customInput: '',
          };
        },


        computed: {
          currentColor: function currentColor() {
            const parent = this.$parent;
            return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
          },
        },

        methods: {
          confirmValue: function confirmValue() {
            this.$emit('pick');
          },
          handleConfirm: function handleConfirm() {
            this.color.fromString(this.customInput);
          },
        },

        mounted: function mounted() {
          this.$parent.popperElm = this.popperElm = this.$el;
          this.referenceElm = this.$parent.$el;
        },


        watch: {
          showPopper: function showPopper(val) {
            const _this = this;

            if (val === true) {
              this.$nextTick(() => {
                const _$refs = _this.$refs;


                const sl = _$refs.sl;


                const hue = _$refs.hue;


                const alpha = _$refs.alpha;

                sl && sl.update();
                hue && hue.update();
                alpha && alpha.update();
              });
            }
          },
          currentColor: function currentColor(val) {
            this.customInput = val;
          },
        },
      };
      /** */ }),

    /** */ 363:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__ = __webpack_require__(364);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c2eb92_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__ = __webpack_require__(365);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c2eb92_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 364:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _draggable = __webpack_require__(46);

      const _draggable2 = _interopRequireDefault(_draggable);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'el-sl-panel',

        props: {
          color: {
            required: true,
          },
        },

        computed: {
          colorValue: function colorValue() {
            const hue = this.color.get('hue');
            const value = this.color.get('value');
            return { hue, value };
          },
        },

        watch: {
          colorValue: function colorValue() {
            this.update();
          },
        },

        methods: {
          update: function update() {
            const saturation = this.color.get('saturation');
            const value = this.color.get('value');

            const el = this.$el;
            const width = el.clientWidth;


            const height = el.clientHeight;


            this.cursorLeft = saturation * width / 100;
            this.cursorTop = (100 - value) * height / 100;

            this.background = `hsl(${this.color.get('hue')}, 100%, 50%)`;
          },
          handleDrag: function handleDrag(event) {
            const el = this.$el;
            const rect = el.getBoundingClientRect();

            let left = event.clientX - rect.left;
            let top = event.clientY - rect.top;
            left = Math.max(0, left);
            left = Math.min(left, rect.width);

            top = Math.max(0, top);
            top = Math.min(top, rect.height);

            this.cursorLeft = left;
            this.cursorTop = top;
            this.color.set({
              saturation: left / rect.width * 100,
              value: 100 - top / rect.height * 100,
            });
          },
        },

        mounted: function mounted() {
          const _this = this;

          (0, _draggable2.default)(this.$el, {
            drag: function drag(event) {
              _this.handleDrag(event);
            },
            end: function end(event) {
              _this.handleDrag(event);
            },
          });

          this.update();
        },
        data: function data() {
          return {
            cursorTop: 0,
            cursorLeft: 0,
            background: 'hsl(0, 100%, 50%)',
          };
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
      /** */ }),

    /** */ 365:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          staticClass: 'el-color-svpanel',
          style: ({
            backgroundColor: _vm.background,
          }),
        }, [_c('div', { staticClass: 'el-color-svpanel__white' }), _c('div', { staticClass: 'el-color-svpanel__black' }), _c('div', {
          staticClass: 'el-color-svpanel__cursor',
          style: ({
            top: `${_vm.cursorTop}px`,
            left: `${_vm.cursorLeft}px`,
          }),
        }, [_c('div')])]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 366:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__ = __webpack_require__(367);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e2326ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__ = __webpack_require__(368);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e2326ce_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 367:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _draggable = __webpack_require__(46);

      const _draggable2 = _interopRequireDefault(_draggable);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'el-color-hue-slider',

        props: {
          color: {
            required: true,
          },

          vertical: Boolean,
        },

        data: function data() {
          return {
            thumbLeft: 0,
            thumbTop: 0,
          };
        },


        computed: {
          hueValue: function hueValue() {
            const hue = this.color.get('hue');
            return hue;
          },
        },

        watch: {
          hueValue: function hueValue() {
            this.update();
          },
        },

        methods: {
          handleClick: function handleClick(event) {
            const thumb = this.$refs.thumb;
            const target = event.target;

            if (target !== thumb) {
              this.handleDrag(event);
            }
          },
          handleDrag: function handleDrag(event) {
            const rect = this.$el.getBoundingClientRect();
            const thumb = this.$refs.thumb;

            let hue = void 0;

            if (!this.vertical) {
              let left = event.clientX - rect.left;
              left = Math.min(left, rect.width - thumb.offsetWidth / 2);
              left = Math.max(thumb.offsetWidth / 2, left);

              hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
            } else {
              let top = event.clientY - rect.top;
              top = Math.min(top, rect.height - thumb.offsetHeight / 2);
              top = Math.max(thumb.offsetHeight / 2, top);

              hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
            }

            this.color.set('hue', hue);
          },
          getThumbLeft: function getThumbLeft() {
            if (this.vertical) return 0;
            const el = this.$el;
            const hue = this.color.get('hue');

            if (!el) return 0;
            const thumb = this.$refs.thumb;
            return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
          },
          getThumbTop: function getThumbTop() {
            if (!this.vertical) return 0;
            const el = this.$el;
            const hue = this.color.get('hue');

            if (!el) return 0;
            const thumb = this.$refs.thumb;
            return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
          },
          update: function update() {
            this.thumbLeft = this.getThumbLeft();
            this.thumbTop = this.getThumbTop();
          },
        },

        mounted: function mounted() {
          const _this = this;

          const _$refs = this.$refs;


          const bar = _$refs.bar;


          const thumb = _$refs.thumb;


          const dragConfig = {
            drag: function drag(event) {
              _this.handleDrag(event);
            },
            end: function end(event) {
              _this.handleDrag(event);
            },
          };

          (0, _draggable2.default)(bar, dragConfig);
          (0, _draggable2.default)(thumb, dragConfig);
          this.update();
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
      /** */ }),

    /** */ 368:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', { staticClass: 'el-color-hue-slider', class: { 'is-vertical': _vm.vertical } }, [_c('div', { ref: 'bar', staticClass: 'el-color-hue-slider__bar', on: { click: _vm.handleClick } }), _c('div', {
          ref: 'thumb',
          staticClass: 'el-color-hue-slider__thumb',
          style: ({
            left: `${_vm.thumbLeft}px`,
            top: `${_vm.thumbTop}px`,
          }),
        })]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 369:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__ = __webpack_require__(370);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cb212b0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__ = __webpack_require__(371);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5cb212b0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 370:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _draggable = __webpack_require__(46);

      const _draggable2 = _interopRequireDefault(_draggable);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'el-color-alpha-slider',

        props: {
          color: {
            required: true,
          },
          vertical: Boolean,
        },

        watch: {
          'color._alpha': function color_alpha() {
            this.update();
          },
          'color.value': function colorValue() {
            this.update();
          },
        },

        methods: {
          handleClick: function handleClick(event) {
            const thumb = this.$refs.thumb;
            const target = event.target;

            if (target !== thumb) {
              this.handleDrag(event);
            }
          },
          handleDrag: function handleDrag(event) {
            const rect = this.$el.getBoundingClientRect();
            const thumb = this.$refs.thumb;


            if (!this.vertical) {
              let left = event.clientX - rect.left;
              left = Math.max(thumb.offsetWidth / 2, left);
              left = Math.min(left, rect.width - thumb.offsetWidth / 2);

              this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
            } else {
              let top = event.clientY - rect.top;
              top = Math.max(thumb.offsetHeight / 2, top);
              top = Math.min(top, rect.height - thumb.offsetHeight / 2);

              this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
            }
          },
          getThumbLeft: function getThumbLeft() {
            if (this.vertical) return 0;
            const el = this.$el;
            const alpha = this.color._alpha;

            if (!el) return 0;
            const thumb = this.$refs.thumb;
            return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
          },
          getThumbTop: function getThumbTop() {
            if (!this.vertical) return 0;
            const el = this.$el;
            const alpha = this.color._alpha;

            if (!el) return 0;
            const thumb = this.$refs.thumb;
            return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
          },
          getBackground: function getBackground() {
            if (this.color && this.color.value) {
              const _color$toRgb = this.color.toRgb();


              const r = _color$toRgb.r;


              const g = _color$toRgb.g;


              const b = _color$toRgb.b;

              return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
            }
            return null;
          },
          update: function update() {
            this.thumbLeft = this.getThumbLeft();
            this.thumbTop = this.getThumbTop();
            this.background = this.getBackground();
          },
        },

        data: function data() {
          return {
            thumbLeft: 0,
            thumbTop: 0,
            background: null,
          };
        },
        mounted: function mounted() {
          const _this = this;

          const _$refs = this.$refs;


          const bar = _$refs.bar;


          const thumb = _$refs.thumb;


          const dragConfig = {
            drag: function drag(event) {
              _this.handleDrag(event);
            },
            end: function end(event) {
              _this.handleDrag(event);
            },
          };

          (0, _draggable2.default)(bar, dragConfig);
          (0, _draggable2.default)(thumb, dragConfig);
          this.update();
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
      /** */ }),

    /** */ 371:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', { staticClass: 'el-color-alpha-slider', class: { 'is-vertical': _vm.vertical } }, [_c('div', {
          ref: 'bar',
          staticClass: 'el-color-alpha-slider__bar',
          style: ({
            background: _vm.background,
          }),
          on: { click: _vm.handleClick },
        }), _c('div', {
          ref: 'thumb',
          staticClass: 'el-color-alpha-slider__thumb',
          style: ({
            left: `${_vm.thumbLeft}px`,
            top: `${_vm.thumbTop}px`,
          }),
        })]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 372:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_predefine_vue__ = __webpack_require__(373);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_predefine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_predefine_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b85c1454_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_predefine_vue__ = __webpack_require__(374);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_predefine_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b85c1454_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_predefine_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 373:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _color = __webpack_require__(53);

      const _color2 = _interopRequireDefault(_color);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        props: {
          colors: { type: Array, required: true },
          color: { required: true },
        },
        data: function data() {
          return {
            rgbaColors: this.parseColors(this.colors, this.color),
          };
        },

        methods: {
          handleSelect: function handleSelect(index) {
            this.color.fromString(this.colors[index]);
          },
          parseColors: function parseColors(colors, color) {
            return colors.map((value) => {
              const c = new _color2.default();
              c.enableAlpha = true;
              c.format = 'rgba';
              c.fromString(value);
              c.selected = c.value === color.value;
              return c;
            });
          },
        },
        watch: {
          '$parent.currentColor': function $parentCurrentColor(val) {
            const color = new _color2.default();
            color.fromString(val);

            this.rgbaColors.forEach((item) => {
              item.selected = color.compare(item);
            });
          },
          colors: function colors(newVal) {
            this.rgbaColors = this.parseColors(newVal, this.color);
          },
          color: function color(newVal) {
            this.rgbaColors = this.parseColors(this.colors, newVal);
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
      /** */ }),

    /** */ 374:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', { staticClass: 'el-color-predefine' }, [_c('div', { staticClass: 'el-color-predefine__colors' }, _vm._l((_vm.rgbaColors), (item, index) => _c('div', {
          key: _vm.colors[index], staticClass: 'el-color-predefine__color-selector', class: { selected: item.selected, 'is-alpha': item._alpha < 100 }, on: { click($event) { _vm.handleSelect(index); } },
        }, [_c('div', { style: ({ 'background-color': item.value }) })])))]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 375:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('transition', { attrs: { name: 'el-zoom-in-top' }, on: { 'after-leave': _vm.doDestroy } }, [_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.showPopper), expression: 'showPopper',
          }],
          staticClass: 'el-color-dropdown',
        }, [_c('div', { staticClass: 'el-color-dropdown__main-wrapper' }, [_c('hue-slider', { ref: 'hue', staticStyle: { float: 'right' }, attrs: { color: _vm.color, vertical: '' } }), _c('sv-panel', { ref: 'sl', attrs: { color: _vm.color } })], 1), (_vm.showAlpha)?_c('alpha-slider', { ref: 'alpha', attrs: { color: _vm.color } }):_vm._e(), (_vm.predefine)?_c('predefine', { attrs: { color: _vm.color, colors: _vm.predefine } }):_vm._e(), _c('div', { staticClass: 'el-color-dropdown__btns' }, [_c('span', { staticClass: 'el-color-dropdown__value' }, [_c('el-input', {
          attrs: { size: 'mini' }, on: { blur: _vm.handleConfirm }, nativeOn: { keyup($event) { if (!('button' in $event)&&_vm._k($event.keyCode, 'enter', 13, $event.key)) { return null; }_vm.handleConfirm($event); } }, model: { value: (_vm.customInput), callback($$v) { _vm.customInput=$$v; }, expression: 'customInput' },
        })], 1), _c('el-button', { staticClass: 'el-color-dropdown__link-btn', attrs: { size: 'mini', type: 'text' }, on: { click($event) { _vm.$emit('clear'); } } }, [_vm._v(`\n        ${_vm._s(_vm.t('el.colorpicker.clear'))}\n      `)]), _c('el-button', { staticClass: 'el-color-dropdown__btn', attrs: { plain: '', size: 'mini' }, on: { click: _vm.confirmValue } }, [_vm._v(`\n        ${_vm._s(_vm.t('el.colorpicker.confirm'))}\n      `)])], 1)], 1)]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 376:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          directives: [{
            name: 'clickoutside', rawName: 'v-clickoutside', value: (_vm.hide), expression: 'hide',
          }],
          class: [
            'el-color-picker',
            _vm.colorDisabled ? 'is-disabled' : '',
            _vm.colorSize ? (`el-color-picker--${_vm.colorSize}`) : '',
          ],
        }, [(_vm.colorDisabled)?_c('div', { staticClass: 'el-color-picker__mask' }):_vm._e(), _c('div', { staticClass: 'el-color-picker__trigger', on: { click: _vm.handleTrigger } }, [_c('span', { staticClass: 'el-color-picker__color', class: { 'is-alpha': _vm.showAlpha } }, [_c('span', {
          staticClass: 'el-color-picker__color-inner',
          style: ({
            backgroundColor: _vm.displayedColor,
          }),
        }), (!_vm.value && !_vm.showPanelColor)?_c('span', { staticClass: 'el-color-picker__empty el-icon-close' }):_vm._e()]), _c('span', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.value || _vm.showPanelColor), expression: 'value || showPanelColor',
          }],
          staticClass: 'el-color-picker__icon el-icon-arrow-down',
        })]), _c('picker-dropdown', {
          ref: 'dropdown', class: ['el-color-picker__panel', _vm.popperClass || ''], attrs: { color: _vm.color, 'show-alpha': _vm.showAlpha, predefine: _vm.predefine }, on: { pick: _vm.confirmValue, clear: _vm.clearValue }, model: { value: (_vm.showPicker), callback($$v) { _vm.showPicker=$$v; }, expression: 'showPicker' },
        })], 1);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 4:
    /** */ (function (module, exports) {
      module.exports = require('vue');
      /** */ }),

    /** */ 46:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      exports.default = function (element, options) {
        if (_vue2.default.prototype.$isServer) return;
        const moveFn = function moveFn(event) {
          if (options.drag) {
            options.drag(event);
          }
        };
        const upFn = function upFn(event) {
          document.removeEventListener('mousemove', moveFn);
          document.removeEventListener('mouseup', upFn);
          document.onselectstart = null;
          document.ondragstart = null;

          isDragging = false;

          if (options.end) {
            options.end(event);
          }
        };
        element.addEventListener('mousedown', (event) => {
          if (isDragging) return;
          document.onselectstart = function () {
            return false;
          };
          document.ondragstart = function () {
            return false;
          };

          document.addEventListener('mousemove', moveFn);
          document.addEventListener('mouseup', upFn);
          isDragging = true;

          if (options.start) {
            options.start(event);
          }
        });
      };

      const _vue = __webpack_require__(4);

      var _vue2 = _interopRequireDefault(_vue);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      var isDragging = false;
      /** */ }),

    /** */ 5:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/mixins/locale');
      /** */ }),

    /** */ 53:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const hsv2hsl = function hsv2hsl(hue, sat, val) {
        return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
      };

      // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
      // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
      const isOnePointZero = function isOnePointZero(n) {
        return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
      };

      const isPercentage = function isPercentage(n) {
        return typeof n === 'string' && n.indexOf('%') !== -1;
      };

      // Take input from [0, n] and return it as [0, 1]
      const bound01 = function bound01(value, max) {
        if (isOnePointZero(value)) value = '100%';

        const processPercent = isPercentage(value);
        value = Math.min(max, Math.max(0, parseFloat(value)));

        // Automatically convert percentage into number
        if (processPercent) {
          value = parseInt(value * max, 10) / 100;
        }

        // Handle floating point rounding errors
        if (Math.abs(value - max) < 0.000001) {
          return 1;
        }

        // Convert into [0, 1] range if it isn't already
        return value % max / parseFloat(max);
      };

      const INT_HEX_MAP = {
        10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F',
      };

      const toHex = function toHex(_ref) {
        const r = _ref.r;


        const g = _ref.g;


        const b = _ref.b;

        const hexOne = function hexOne(value) {
          value = Math.min(Math.round(value), 255);
          const high = Math.floor(value / 16);
          const low = value % 16;
          return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`;
        };

        if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

        return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`;
      };

      const HEX_INT_MAP = {
        A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
      };

      const parseHexChannel = function parseHexChannel(hex) {
        if (hex.length === 2) {
          return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
        }

        return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
      };

      const hsl2hsv = function hsl2hsv(hue, sat, light) {
        sat /= 100;
        light /= 100;
        let smin = sat;
        const lmin = Math.max(light, 0.01);
        let sv = void 0;
        let v = void 0;

        light *= 2;
        sat *= light <= 1 ? light : 2 - light;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        v = (light + sat) / 2;
        sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);

        return {
          h: hue,
          s: sv * 100,
          v: v * 100,
        };
      };

      // `rgbToHsv`
      // Converts an RGB color value to HSV
      // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
      // *Returns:* { h, s, v } in [0,1]
      const rgb2hsv = function rgb2hsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = void 0;


        let s = void 0;
        const v = max;

        const d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
          h = 0; // achromatic
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }

        return { h: h * 360, s: s * 100, v: v * 100 };
      };

      // `hsvToRgb`
      // Converts an HSV color value to RGB.
      // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
      // *Returns:* { r, g, b } in the set [0, 255]
      const hsv2rgb = function hsv2rgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);

        const i = Math.floor(h);
        const f = h - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        const mod = i % 6;
        const r = [v, q, p, p, t, v][mod];
        const g = [t, v, v, q, p, p][mod];
        const b = [p, p, t, v, v, q][mod];

        return {
          r: Math.round(r * 255),
          g: Math.round(g * 255),
          b: Math.round(b * 255),
        };
      };

      const Color = (function () {
        function Color(options) {
          _classCallCheck(this, Color);

          this._hue = 0;
          this._saturation = 100;
          this._value = 100;
          this._alpha = 100;

          this.enableAlpha = false;
          this.format = 'hex';
          this.value = '';

          options = options || {};

          for (const option in options) {
            if (options.hasOwnProperty(option)) {
              this[option] = options[option];
            }
          }

          this.doOnChange();
        }

        Color.prototype.set = function set(prop, value) {
          if (arguments.length === 1 && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
            for (const p in prop) {
              if (prop.hasOwnProperty(p)) {
                this.set(p, prop[p]);
              }
            }

            return;
          }

          this[`_${prop}`] = value;
          this.doOnChange();
        };

        Color.prototype.get = function get(prop) {
          return this[`_${prop}`];
        };

        Color.prototype.toRgb = function toRgb() {
          return hsv2rgb(this._hue, this._saturation, this._value);
        };

        Color.prototype.fromString = function fromString(value) {
          const _this = this;

          if (!value) {
            this._hue = 0;
            this._saturation = 100;
            this._value = 100;

            this.doOnChange();
            return;
          }

          const fromHSV = function fromHSV(h, s, v) {
            _this._hue = Math.max(0, Math.min(360, h));
            _this._saturation = Math.max(0, Math.min(100, s));
            _this._value = Math.max(0, Math.min(100, v));

            _this.doOnChange();
          };

          if (value.indexOf('hsl') !== -1) {
            const parts = value.replace(/hsla|hsl|\(|\)/gm, '').split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

            if (parts.length === 4) {
              this._alpha = Math.floor(parseFloat(parts[3]) * 100);
            } else if (parts.length === 3) {
              this._alpha = 100;
            }
            if (parts.length >= 3) {
              const _hsl2hsv = hsl2hsv(parts[0], parts[1], parts[2]);


              const h = _hsl2hsv.h;


              const s = _hsl2hsv.s;


              const v = _hsl2hsv.v;

              fromHSV(h, s, v);
            }
          } else if (value.indexOf('hsv') !== -1) {
            const _parts = value.replace(/hsva|hsv|\(|\)/gm, '').split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

            if (_parts.length === 4) {
              this._alpha = Math.floor(parseFloat(_parts[3]) * 100);
            } else if (_parts.length === 3) {
              this._alpha = 100;
            }
            if (_parts.length >= 3) {
              fromHSV(_parts[0], _parts[1], _parts[2]);
            }
          } else if (value.indexOf('rgb') !== -1) {
            const _parts2 = value.replace(/rgba|rgb|\(|\)/gm, '').split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

            if (_parts2.length === 4) {
              this._alpha = Math.floor(parseFloat(_parts2[3]) * 100);
            } else if (_parts2.length === 3) {
              this._alpha = 100;
            }
            if (_parts2.length >= 3) {
              const _rgb2hsv = rgb2hsv(_parts2[0], _parts2[1], _parts2[2]);


              const _h = _rgb2hsv.h;


              const _s = _rgb2hsv.s;


              const _v = _rgb2hsv.v;

              fromHSV(_h, _s, _v);
            }
          } else if (value.indexOf('#') !== -1) {
            const hex = value.replace('#', '').trim();
            let r = void 0;


            let g = void 0;


            let b = void 0;

            if (hex.length === 3) {
              r = parseHexChannel(hex[0] + hex[0]);
              g = parseHexChannel(hex[1] + hex[1]);
              b = parseHexChannel(hex[2] + hex[2]);
            } else if (hex.length === 6 || hex.length === 8) {
              r = parseHexChannel(hex.substring(0, 2));
              g = parseHexChannel(hex.substring(2, 4));
              b = parseHexChannel(hex.substring(4, 6));
            }

            if (hex.length === 8) {
              this._alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
            } else if (hex.length === 3 || hex.length === 6) {
              this._alpha = 100;
            }

            const _rgb2hsv2 = rgb2hsv(r, g, b);


            const _h2 = _rgb2hsv2.h;


            const _s2 = _rgb2hsv2.s;


            const _v2 = _rgb2hsv2.v;

            fromHSV(_h2, _s2, _v2);
          }
        };

        Color.prototype.compare = function compare(color) {
          return Math.abs(color._hue - this._hue) < 2 && Math.abs(color._saturation - this._saturation) < 1 && Math.abs(color._value - this._value) < 1 && Math.abs(color._alpha - this._alpha) < 1;
        };

        Color.prototype.doOnChange = function doOnChange() {
          const _hue = this._hue;


          const _saturation = this._saturation;


          const _value = this._value;


          const _alpha = this._alpha;


          const format = this.format;


          if (this.enableAlpha) {
            switch (format) {
              case 'hsl':
                var hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
                this.value = `hsla(${_hue}, ${Math.round(hsl[1] * 100)}%, ${Math.round(hsl[2] * 100)}%, ${_alpha / 100})`;
                break;
              case 'hsv':
                this.value = `hsva(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%, ${_alpha / 100})`;
                break;
              default:
                var _hsv2rgb = hsv2rgb(_hue, _saturation, _value);


                var r = _hsv2rgb.r;


                var g = _hsv2rgb.g;


                var b = _hsv2rgb.b;

                this.value = `rgba(${r}, ${g}, ${b}, ${_alpha / 100})`;
            }
          } else {
            switch (format) {
              case 'hsl':
                var _hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
                this.value = `hsl(${_hue}, ${Math.round(_hsl[1] * 100)}%, ${Math.round(_hsl[2] * 100)}%)`;
                break;
              case 'hsv':
                this.value = `hsv(${_hue}, ${Math.round(_saturation)}%, ${Math.round(_value)}%)`;
                break;
              case 'rgb':
                var _hsv2rgb2 = hsv2rgb(_hue, _saturation, _value);


                var _r = _hsv2rgb2.r;


                var _g = _hsv2rgb2.g;


                var _b = _hsv2rgb2.b;

                this.value = `rgb(${_r}, ${_g}, ${_b})`;
                break;
              default:
                this.value = toHex(hsv2rgb(_hue, _saturation, _value));
            }
          }
        };

        return Color;
      }());

      exports.default = Color;
      /** */ }),

    /** */ 6:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/input');
      /** */ }),

    /** */ 7:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/vue-popper');
      /** */ }),

    /** *** */ }));
