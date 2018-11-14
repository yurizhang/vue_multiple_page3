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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 336);
    /** *** */ }({

    /** */ 18:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/resize-event');
      /** */ }),

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 3:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/dom');
      /** */ }),

    /** */ 336:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _main = __webpack_require__(337);

      const _main2 = _interopRequireDefault(_main);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _main2.default.install = function (Vue) {
        Vue.component(_main2.default.name, _main2.default);
      };

      exports.default = _main2.default;
      /** */ }),

    /** */ 337:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _resizeEvent = __webpack_require__(18);

      const _scrollbarWidth = __webpack_require__(38);

      const _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

      const _util = __webpack_require__(2);

      const _bar = __webpack_require__(338);

      const _bar2 = _interopRequireDefault(_bar);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      // reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

      exports.default = {
        name: 'ElScrollbar',

        components: { Bar: _bar2.default },

        props: {
          native: Boolean,
          wrapStyle: {},
          wrapClass: {},
          viewClass: {},
          viewStyle: {},
          noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
          tag: {
            type: String,
            default: 'div',
          },
        },

        data: function data() {
          return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0,
          };
        },


        computed: {
          wrap: function wrap() {
            return this.$refs.wrap;
          },
        },

        render: function render(h) {
          const gutter = (0, _scrollbarWidth2.default)();
          let style = this.wrapStyle;

          if (gutter) {
            const gutterWith = `-${gutter}px`;
            const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;

            if (Array.isArray(this.wrapStyle)) {
              style = (0, _util.toObject)(this.wrapStyle);
              style.marginRight = style.marginBottom = gutterWith;
            } else if (typeof this.wrapStyle === 'string') {
              style += gutterStyle;
            } else {
              style = gutterStyle;
            }
          }
          const view = h(this.tag, {
            class: ['el-scrollbar__view', this.viewClass],
            style: this.viewStyle,
            ref: 'resize',
          }, this.$slots.default);
          const wrap = h(
            'div',
            {
              ref: 'wrap',
              style,
              on: {
                scroll: this.handleScroll,
              },

              class: [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'],
            },
            [[view]],
          );
          let nodes = void 0;

          if (!this.native) {
            nodes = [wrap, h(
              _bar2.default,
              {
                attrs: {
                  move: this.moveX,
                  size: this.sizeWidth,
                },
              },
              [],
            ), h(
              _bar2.default,
              {
                attrs: {
                  vertical: true,
                  move: this.moveY,
                  size: this.sizeHeight,
                },
              },
              [],
            )];
          } else {
            nodes = [h(
              'div',
              {
                ref: 'wrap',
                class: [this.wrapClass, 'el-scrollbar__wrap'],
                style,
              },
              [[view]],
            )];
          }
          return h('div', { class: 'el-scrollbar' }, nodes);
        },


        methods: {
          handleScroll: function handleScroll() {
            const wrap = this.wrap;

            this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
            this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
          },
          update: function update() {
            let heightPercentage = void 0;


            let widthPercentage = void 0;
            const wrap = this.wrap;
            if (!wrap) return;

            heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
            widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

            this.sizeHeight = heightPercentage < 100 ? `${heightPercentage}%` : '';
            this.sizeWidth = widthPercentage < 100 ? `${widthPercentage}%` : '';
          },
        },

        mounted: function mounted() {
          if (this.native) return;
          this.$nextTick(this.update);
          !this.noresize && (0, _resizeEvent.addResizeListener)(this.$refs.resize, this.update);
        },
        beforeDestroy: function beforeDestroy() {
          if (this.native) return;
          !this.noresize && (0, _resizeEvent.removeResizeListener)(this.$refs.resize, this.update);
        },
      };
      /** */ }),

    /** */ 338:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _dom = __webpack_require__(3);

      const _util = __webpack_require__(339);

      /* istanbul ignore next */
      exports.default = {
        name: 'Bar',

        props: {
          vertical: Boolean,
          size: String,
          move: Number,
        },

        computed: {
          bar: function bar() {
            return _util.BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
          },
          wrap: function wrap() {
            return this.$parent.wrap;
          },
        },

        render: function render(h) {
          const size = this.size;


          const move = this.move;


          const bar = this.bar;


          return h(
            'div',
            {
              class: ['el-scrollbar__bar', `is-${bar.key}`],
              on: {
                mousedown: this.clickTrackHandler,
              },
            },
            [h(
              'div',
              {
                ref: 'thumb',
                class: 'el-scrollbar__thumb',
                on: {
                  mousedown: this.clickThumbHandler,
                },

                style: (0, _util.renderThumbStyle)({ size, move, bar }),
              },
              [],
            )],
          );
        },


        methods: {
          clickThumbHandler: function clickThumbHandler(e) {
            this.startDrag(e);
            this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
          },
          clickTrackHandler: function clickTrackHandler(e) {
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
            const thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
            const thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

            this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
          },
          startDrag: function startDrag(e) {
            e.stopImmediatePropagation();
            this.cursorDown = true;

            (0, _dom.on)(document, 'mousemove', this.mouseMoveDocumentHandler);
            (0, _dom.on)(document, 'mouseup', this.mouseUpDocumentHandler);
            document.onselectstart = function () {
              return false;
            };
          },
          mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
            if (this.cursorDown === false) return;
            const prevPage = this[this.bar.axis];

            if (!prevPage) return;

            const offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
            const thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
            const thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

            this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
          },
          mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
            this.cursorDown = false;
            this[this.bar.axis] = 0;
            (0, _dom.off)(document, 'mousemove', this.mouseMoveDocumentHandler);
            document.onselectstart = null;
          },
        },

        destroyed: function destroyed() {
          (0, _dom.off)(document, 'mouseup', this.mouseUpDocumentHandler);
        },
      };
      /** */ }),

    /** */ 339:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      exports.renderThumbStyle = renderThumbStyle;
      const BAR_MAP = exports.BAR_MAP = {
        vertical: {
          offset: 'offsetHeight',
          scroll: 'scrollTop',
          scrollSize: 'scrollHeight',
          size: 'height',
          key: 'vertical',
          axis: 'Y',
          client: 'clientY',
          direction: 'top',
        },
        horizontal: {
          offset: 'offsetWidth',
          scroll: 'scrollLeft',
          scrollSize: 'scrollWidth',
          size: 'width',
          key: 'horizontal',
          axis: 'X',
          client: 'clientX',
          direction: 'left',
        },
      };

      function renderThumbStyle(_ref) {
        const move = _ref.move;


        const size = _ref.size;


        const bar = _ref.bar;

        const style = {};
        const translate = `translate${bar.axis}(${move}%)`;

        style[bar.size] = size;
        style.transform = translate;
        style.msTransform = translate;
        style.webkitTransform = translate;

        return style;
      }
      /** */ }),

    /** */ 38:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/scrollbar-width');
      /** */ }),

    /** *** */ }));
