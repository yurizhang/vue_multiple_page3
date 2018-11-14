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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 159);
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

    /** */ 13:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/popup');
      /** */ }),

    /** */ 14:
    /** */ (function (module, exports) {
      module.exports = require('throttle-debounce/debounce');
      /** */ }),

    /** */ 159:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _table = __webpack_require__(160);

      const _table2 = _interopRequireDefault(_table);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _table2.default.install = function (Vue) {
        Vue.component(_table2.default.name, _table2.default);
      };

      exports.default = _table2.default;
      /** */ }),

    /** */ 16:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/checkbox');
      /** */ }),

    /** */ 160:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__ = __webpack_require__(161);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f98fcd1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__ = __webpack_require__(173);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f98fcd1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 161:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _debounce = __webpack_require__(14);

      const _debounce2 = _interopRequireDefault(_debounce);

      const _resizeEvent = __webpack_require__(18);

      const _mousewheel = __webpack_require__(162);

      const _mousewheel2 = _interopRequireDefault(_mousewheel);

      const _locale = __webpack_require__(5);

      const _locale2 = _interopRequireDefault(_locale);

      const _migrating = __webpack_require__(8);

      const _migrating2 = _interopRequireDefault(_migrating);

      const _tableStore = __webpack_require__(164);

      const _tableStore2 = _interopRequireDefault(_tableStore);

      const _tableLayout = __webpack_require__(165);

      const _tableLayout2 = _interopRequireDefault(_tableLayout);

      const _tableBody = __webpack_require__(166);

      const _tableBody2 = _interopRequireDefault(_tableBody);

      const _tableHeader = __webpack_require__(167);

      const _tableHeader2 = _interopRequireDefault(_tableHeader);

      const _tableFooter = __webpack_require__(172);

      const _tableFooter2 = _interopRequireDefault(_tableFooter);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      let tableIdSeed = 1; //
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
        name: 'ElTable',

        mixins: [_locale2.default, _migrating2.default],

        directives: {
          Mousewheel: _mousewheel2.default,
        },

        props: {
          data: {
            type: Array,
            default: function _default() {
              return [];
            },
          },

          size: String,

          width: [String, Number],

          height: [String, Number],

          maxHeight: [String, Number],

          fit: {
            type: Boolean,
            default: true,
          },

          stripe: Boolean,

          border: Boolean,

          rowKey: [String, Function],

          context: {},

          showHeader: {
            type: Boolean,
            default: true,
          },

          showSummary: Boolean,

          sumText: String,

          summaryMethod: Function,

          rowClassName: [String, Function],

          rowStyle: [Object, Function],

          cellClassName: [String, Function],

          cellStyle: [Object, Function],

          headerRowClassName: [String, Function],

          headerRowStyle: [Object, Function],

          headerCellClassName: [String, Function],

          headerCellStyle: [Object, Function],

          highlightCurrentRow: Boolean,

          currentRowKey: [String, Number],

          emptyText: String,

          expandRowKeys: Array,

          defaultExpandAll: Boolean,

          defaultSort: Object,

          tooltipEffect: String,

          spanMethod: Function,

          selectOnIndeterminate: {
            type: Boolean,
            default: true,
          },
        },

        components: {
          TableHeader: _tableHeader2.default,
          TableFooter: _tableFooter2.default,
          TableBody: _tableBody2.default,
          ElCheckbox: _checkbox2.default,
        },

        methods: {
          getMigratingConfig: function getMigratingConfig() {
            return {
              events: {
                expand: 'expand is renamed to expand-change',
              },
            };
          },
          setCurrentRow: function setCurrentRow(row) {
            this.store.commit('setCurrentRow', row);
          },
          toggleRowSelection: function toggleRowSelection(row, selected) {
            this.store.toggleRowSelection(row, selected);
            this.store.updateAllSelected();
          },
          toggleRowExpansion: function toggleRowExpansion(row, expanded) {
            this.store.toggleRowExpansion(row, expanded);
          },
          clearSelection: function clearSelection() {
            this.store.clearSelection();
          },
          clearFilter: function clearFilter() {
            this.store.clearFilter();
          },
          clearSort: function clearSort() {
            this.store.clearSort();
          },
          handleMouseLeave: function handleMouseLeave() {
            this.store.commit('setHoverRow', null);
            if (this.hoverState) this.hoverState = null;
          },
          updateScrollY: function updateScrollY() {
            this.layout.updateScrollY();
            this.layout.updateColumnsWidth();
          },
          handleFixedMousewheel: function handleFixedMousewheel(event, data) {
            const bodyWrapper = this.bodyWrapper;
            if (Math.abs(data.spinY) > 0) {
              const currentScrollTop = bodyWrapper.scrollTop;
              if (data.pixelY < 0 && currentScrollTop !== 0) {
                event.preventDefault();
              }
              if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
                event.preventDefault();
              }
              bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
            } else {
              bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
            }
          },
          handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
            const pixelX = data.pixelX;


            const pixelY = data.pixelY;

            if (Math.abs(pixelX) >= Math.abs(pixelY)) {
              event.preventDefault();
              this.bodyWrapper.scrollLeft += data.pixelX / 5;
            }
          },
          bindEvents: function bindEvents() {
            const _$refs = this.$refs;


            const headerWrapper = _$refs.headerWrapper;


            const footerWrapper = _$refs.footerWrapper;

            const refs = this.$refs;
            const self = this;

            this.bodyWrapper.addEventListener('scroll', function () {
              if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
              if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
              if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
              if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
              const maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
              const scrollLeft = this.scrollLeft;
              if (scrollLeft >= maxScrollLeftPosition) {
                self.scrollPosition = 'right';
              } else if (scrollLeft === 0) {
                self.scrollPosition = 'left';
              } else {
                self.scrollPosition = 'middle';
              }
            });

            if (this.fit) {
              (0, _resizeEvent.addResizeListener)(this.$el, this.resizeListener);
            }
          },
          resizeListener: function resizeListener() {
            if (!this.$ready) return;
            let shouldUpdateLayout = false;
            const el = this.$el;
            const _resizeState = this.resizeState;


            const oldWidth = _resizeState.width;


            const oldHeight = _resizeState.height;


            const width = el.offsetWidth;
            if (oldWidth !== width) {
              shouldUpdateLayout = true;
            }

            const height = el.offsetHeight;
            if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
              shouldUpdateLayout = true;
            }

            if (shouldUpdateLayout) {
              this.resizeState.width = width;
              this.resizeState.height = height;
              this.doLayout();
            }
          },
          doLayout: function doLayout() {
            this.layout.updateColumnsWidth();
            if (this.shouldUpdateHeight) {
              this.layout.updateElsHeight();
            }
          },
          sort: function sort(prop, order) {
            this.store.commit('sort', { prop, order });
          },
          toggleAllSelection: function toggleAllSelection() {
            this.store.commit('toggleAllSelection');
          },
        },

        created: function created() {
          const _this = this;

          this.tableId = `el-table_${tableIdSeed++}`;
          this.debouncedUpdateLayout = (0, _debounce2.default)(50, () => _this.doLayout());
        },


        computed: {
          tableSize: function tableSize() {
            return this.size || (this.$ELEMENT || {}).size;
          },
          bodyWrapper: function bodyWrapper() {
            return this.$refs.bodyWrapper;
          },
          shouldUpdateHeight: function shouldUpdateHeight() {
            return this.height || this.maxHeight || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
          },
          selection: function selection() {
            return this.store.states.selection;
          },
          columns: function columns() {
            return this.store.states.columns;
          },
          tableData: function tableData() {
            return this.store.states.data;
          },
          fixedColumns: function fixedColumns() {
            return this.store.states.fixedColumns;
          },
          rightFixedColumns: function rightFixedColumns() {
            return this.store.states.rightFixedColumns;
          },
          bodyWidth: function bodyWidth() {
            const _layout = this.layout;


            const bodyWidth = _layout.bodyWidth;


            const scrollY = _layout.scrollY;


            const gutterWidth = _layout.gutterWidth;

            return bodyWidth ? `${bodyWidth - (scrollY ? gutterWidth : 0)}px` : '';
          },
          bodyHeight: function bodyHeight() {
            if (this.height) {
              return {
                height: this.layout.bodyHeight ? `${this.layout.bodyHeight}px` : '',
              };
            } if (this.maxHeight) {
              return {
                'max-height': `${this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight}px`,
              };
            }
            return {};
          },
          fixedBodyHeight: function fixedBodyHeight() {
            if (this.height) {
              return {
                height: this.layout.fixedBodyHeight ? `${this.layout.fixedBodyHeight}px` : '',
              };
            } if (this.maxHeight) {
              let maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

              if (this.showHeader) {
                maxHeight -= this.layout.headerHeight;
              }

              maxHeight -= this.layout.footerHeight;

              return {
                'max-height': `${maxHeight}px`,
              };
            }

            return {};
          },
          fixedHeight: function fixedHeight() {
            if (this.maxHeight) {
              if (this.showSummary) {
                return {
                  bottom: 0,
                };
              }
              return {
                bottom: this.layout.scrollX && this.data.length ? `${this.layout.gutterWidth}px` : '',
              };
            }
            if (this.showSummary) {
              return {
                height: this.layout.tableHeight ? `${this.layout.tableHeight}px` : '',
              };
            }
            return {
              height: this.layout.viewportHeight ? `${this.layout.viewportHeight}px` : '',
            };
          },
        },

        watch: {
          height: {
            immediate: true,
            handler: function handler(value) {
              this.layout.setHeight(value);
            },
          },

          maxHeight: {
            immediate: true,
            handler: function handler(value) {
              this.layout.setMaxHeight(value);
            },
          },

          currentRowKey: function currentRowKey(newVal) {
            this.store.setCurrentRowKey(newVal);
          },


          data: {
            immediate: true,
            handler: function handler(value) {
              const _this2 = this;

              this.store.commit('setData', value);
              if (this.$ready) {
                this.$nextTick(() => {
                  _this2.doLayout();
                });
              }
            },
          },

          expandRowKeys: {
            immediate: true,
            handler: function handler(newVal) {
              if (newVal) {
                this.store.setExpandRowKeys(newVal);
              }
            },
          },
        },

        destroyed: function destroyed() {
          if (this.resizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.resizeListener);
        },
        mounted: function mounted() {
          const _this3 = this;

          this.bindEvents();
          this.store.updateColumns();
          this.doLayout();

          this.resizeState = {
            width: this.$el.offsetWidth,
            height: this.$el.offsetHeight,
          };

          // init filters
          this.store.states.columns.forEach((column) => {
            if (column.filteredValue && column.filteredValue.length) {
              _this3.store.commit('filterChange', {
                column,
                values: column.filteredValue,
                silent: true,
              });
            }
          });

          this.$ready = true;
        },
        data: function data() {
          const store = new _tableStore2.default(this, {
            rowKey: this.rowKey,
            defaultExpandAll: this.defaultExpandAll,
            selectOnIndeterminate: this.selectOnIndeterminate,
          });
          const layout = new _tableLayout2.default({
            store,
            table: this,
            fit: this.fit,
            showHeader: this.showHeader,
          });
          return {
            layout,
            store,
            isHidden: false,
            renderExpanded: null,
            resizeProxyVisible: false,
            resizeState: {
              width: null,
              height: null,
            },
            // 是否拥有多级表头
            isGroup: false,
            scrollPosition: 'left',
          };
        },
      };
      /** */ }),

    /** */ 162:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _normalizeWheel = __webpack_require__(163);

      const _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      const mousewheel = function mousewheel(element, callback) {
        if (element && element.addEventListener) {
          element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
            const normalized = (0, _normalizeWheel2.default)(event);
            callback && callback.apply(this, [event, normalized]);
          });
        }
      };

      exports.default = {
        bind: function bind(el, binding) {
          mousewheel(el, binding.value);
        },
      };
      /** */ }),

    /** */ 163:
    /** */ (function (module, exports) {
      module.exports = require('normalize-wheel');
      /** */ }),

    /** */ 164:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _vue = __webpack_require__(4);

      const _vue2 = _interopRequireDefault(_vue);

      const _debounce = __webpack_require__(14);

      const _debounce2 = _interopRequireDefault(_debounce);

      const _merge = __webpack_require__(9);

      const _merge2 = _interopRequireDefault(_merge);

      const _dom = __webpack_require__(3);

      const _util = __webpack_require__(48);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const sortData = function sortData(data, states) {
        const sortingColumn = states.sortingColumn;
        if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
          return data;
        }
        return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
      };

      const getKeysMap = function getKeysMap(array, rowKey) {
        const arrayMap = {};
        (array || []).forEach((row, index) => {
          arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row, index };
        });
        return arrayMap;
      };

      const toggleRowSelection = function toggleRowSelection(states, row, selected) {
        let changed = false;
        const selection = states.selection;
        const index = selection.indexOf(row);
        if (typeof selected === 'undefined') {
          if (index === -1) {
            selection.push(row);
            changed = true;
          } else {
            selection.splice(index, 1);
            changed = true;
          }
        } else if (selected && index === -1) {
          selection.push(row);
          changed = true;
        } else if (!selected && index > -1) {
          selection.splice(index, 1);
          changed = true;
        }

        return changed;
      };

      const toggleRowExpansion = function toggleRowExpansion(states, row, expanded) {
        let changed = false;
        const expandRows = states.expandRows;
        if (typeof expanded !== 'undefined') {
          const index = expandRows.indexOf(row);
          if (expanded) {
            if (index === -1) {
              expandRows.push(row);
              changed = true;
            }
          } else if (index !== -1) {
            expandRows.splice(index, 1);
            changed = true;
          }
        } else {
          const _index = expandRows.indexOf(row);
          if (_index === -1) {
            expandRows.push(row);
            changed = true;
          } else {
            expandRows.splice(_index, 1);
            changed = true;
          }
        }

        return changed;
      };

      const TableStore = function TableStore(table) {
        const initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!table) {
          throw new Error('Table is required.');
        }
        this.table = table;

        this.states = {
          rowKey: null,
          _columns: [],
          originColumns: [],
          columns: [],
          fixedColumns: [],
          rightFixedColumns: [],
          leafColumns: [],
          fixedLeafColumns: [],
          rightFixedLeafColumns: [],
          leafColumnsLength: 0,
          fixedLeafColumnsLength: 0,
          rightFixedLeafColumnsLength: 0,
          isComplex: false,
          filteredData: null,
          data: null,
          sortingColumn: null,
          sortProp: null,
          sortOrder: null,
          isAllSelected: false,
          selection: [],
          reserveSelection: false,
          selectable: null,
          currentRow: null,
          hoverRow: null,
          filters: {},
          expandRows: [],
          defaultExpandAll: false,
          selectOnIndeterminate: false,
        };

        for (const prop in initialState) {
          if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
            this.states[prop] = initialState[prop];
          }
        }
      };

      TableStore.prototype.mutations = {
        setData: function setData(states, data) {
          const _this = this;

          const dataInstanceChanged = states._data !== data;
          states._data = data;

          Object.keys(states.filters).forEach((columnId) => {
            const values = states.filters[columnId];
            if (!values || values.length === 0) return;
            const column = (0, _util.getColumnById)(_this.states, columnId);
            if (column && column.filterMethod) {
              data = data.filter(row => values.some(value => column.filterMethod.call(null, value, row, column)));
            }
          });

          states.filteredData = data;
          states.data = sortData(data || [], states);

          this.updateCurrentRow();

          const rowKey = states.rowKey;

          if (!states.reserveSelection) {
            if (dataInstanceChanged) {
              this.clearSelection();
            } else {
              this.cleanSelection();
            }
            this.updateAllSelected();
          } else if (rowKey) {
            (function () {
              const selection = states.selection;
              const selectedMap = getKeysMap(selection, rowKey);

              states.data.forEach((row) => {
                const rowId = (0, _util.getRowIdentity)(row, rowKey);
                const rowInfo = selectedMap[rowId];
                if (rowInfo) {
                  selection[rowInfo.index] = row;
                }
              });

              _this.updateAllSelected();
            }());
          } else {
            console.warn('WARN: rowKey is required when reserve-selection is enabled.');
          }

          const defaultExpandAll = states.defaultExpandAll;
          if (defaultExpandAll) {
            this.states.expandRows = (states.data || []).slice(0);
          } else if (rowKey) {
            // update expandRows to new rows according to rowKey
            const ids = getKeysMap(this.states.expandRows, rowKey);
            const expandRows = [];
            for (var _iterator = states.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              const row = _ref;

              const rowId = (0, _util.getRowIdentity)(row, rowKey);
              if (ids[rowId]) {
                expandRows.push(row);
              }
            }
            this.states.expandRows = expandRows;
          } else {
            // clear the old rows
            this.states.expandRows = [];
          }

          _vue2.default.nextTick(() => _this.table.updateScrollY());
        },
        changeSortCondition: function changeSortCondition(states, options) {
          const _this2 = this;

          states.data = sortData(states.filteredData || states._data || [], states);

          const _table = this.table;


          const $el = _table.$el;


          const highlightCurrentRow = _table.highlightCurrentRow;

          if ($el && highlightCurrentRow) {
            const data = states.data;
            const tr = $el.querySelector('tbody').children;
            const rows = [].filter.call(tr, row => (0, _dom.hasClass)(row, 'el-table__row'));
            const row = rows[data.indexOf(states.currentRow)];

            [].forEach.call(rows, row => (0, _dom.removeClass)(row, 'current-row'));
            (0, _dom.addClass)(row, 'current-row');
          }

          if (!options || !options.silent) {
            this.table.$emit('sort-change', {
              column: this.states.sortingColumn,
              prop: this.states.sortProp,
              order: this.states.sortOrder,
            });
          }

          _vue2.default.nextTick(() => _this2.table.updateScrollY());
        },
        sort: function sort(states, options) {
          const _this3 = this;

          const prop = options.prop;


          const order = options.order;

          if (prop) {
            states.sortProp = prop;
            states.sortOrder = order || 'ascending';
            _vue2.default.nextTick(() => {
              for (let i = 0, length = states.columns.length; i < length; i++) {
                const column = states.columns[i];
                if (column.property === states.sortProp) {
                  column.order = states.sortOrder;
                  states.sortingColumn = column;
                  break;
                }
              }

              if (states.sortingColumn) {
                _this3.commit('changeSortCondition');
              }
            });
          }
        },
        filterChange: function filterChange(states, options) {
          const _this4 = this;

          const column = options.column;


          let values = options.values;


          const silent = options.silent;

          if (values && !Array.isArray(values)) {
            values = [values];
          }

          const prop = column.property;
          const filters = {};

          if (prop) {
            states.filters[column.id] = values;
            filters[column.columnKey || column.id] = values;
          }

          let data = states._data;

          Object.keys(states.filters).forEach((columnId) => {
            const values = states.filters[columnId];
            if (!values || values.length === 0) return;
            const column = (0, _util.getColumnById)(_this4.states, columnId);
            if (column && column.filterMethod) {
              data = data.filter(row => values.some(value => column.filterMethod.call(null, value, row, column)));
            }
          });

          states.filteredData = data;
          states.data = sortData(data, states);

          if (!silent) {
            this.table.$emit('filter-change', filters);
          }

          _vue2.default.nextTick(() => _this4.table.updateScrollY());
        },
        insertColumn: function insertColumn(states, column, index, parent) {
          let array = states._columns;
          if (parent) {
            array = parent.children;
            if (!array) array = parent.children = [];
          }

          if (typeof index !== 'undefined') {
            array.splice(index, 0, column);
          } else {
            array.push(column);
          }

          if (column.type === 'selection') {
            states.selectable = column.selectable;
            states.reserveSelection = column.reserveSelection;
          }

          if (this.table.$ready) {
            this.updateColumns(); // hack for dynamics insert column
            this.scheduleLayout();
          }
        },
        removeColumn: function removeColumn(states, column, parent) {
          let array = states._columns;
          if (parent) {
            array = parent.children;
            if (!array) array = parent.children = [];
          }
          if (array) {
            array.splice(array.indexOf(column), 1);
          }

          if (this.table.$ready) {
            this.updateColumns(); // hack for dynamics remove column
            this.scheduleLayout();
          }
        },
        setHoverRow: function setHoverRow(states, row) {
          states.hoverRow = row;
        },
        setCurrentRow: function setCurrentRow(states, row) {
          const oldCurrentRow = states.currentRow;
          states.currentRow = row;

          if (oldCurrentRow !== row) {
            this.table.$emit('current-change', row, oldCurrentRow);
          }
        },
        rowSelectedChanged: function rowSelectedChanged(states, row) {
          const changed = toggleRowSelection(states, row);
          const selection = states.selection;

          if (changed) {
            const table = this.table;
            table.$emit('selection-change', selection ? selection.slice() : []);
            table.$emit('select', selection, row);
          }

          this.updateAllSelected();
        },


        toggleAllSelection: (0, _debounce2.default)(10, function (states) {
          const data = states.data || [];
          if (data.length === 0) return;
          const selection = this.states.selection;
          // when only some rows are selected (but not all), select or deselect all of them
          // depending on the value of selectOnIndeterminate
          const value = states.selectOnIndeterminate ? !states.isAllSelected : !(states.isAllSelected || selection.length);
          let selectionChanged = false;

          data.forEach((item, index) => {
            if (states.selectable) {
              if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
                selectionChanged = true;
              }
            } else if (toggleRowSelection(states, item, value)) {
              selectionChanged = true;
            }
          });

          const table = this.table;
          if (selectionChanged) {
            table.$emit('selection-change', selection ? selection.slice() : []);
          }
          table.$emit('select-all', selection);
          states.isAllSelected = value;
        }),
      };

      const doFlattenColumns = function doFlattenColumns(columns) {
        const result = [];
        columns.forEach((column) => {
          if (column.children) {
            result.push(...doFlattenColumns(column.children));
          } else {
            result.push(column);
          }
        });
        return result;
      };

      TableStore.prototype.updateColumns = function () {
        const states = this.states;
        const _columns = states._columns || [];
        states.fixedColumns = _columns.filter(column => column.fixed === true || column.fixed === 'left');
        states.rightFixedColumns = _columns.filter(column => column.fixed === 'right');

        if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
          _columns[0].fixed = true;
          states.fixedColumns.unshift(_columns[0]);
        }

        const notFixedColumns = _columns.filter(column => !column.fixed);
        states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

        const leafColumns = doFlattenColumns(notFixedColumns);
        const fixedLeafColumns = doFlattenColumns(states.fixedColumns);
        const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

        states.leafColumnsLength = leafColumns.length;
        states.fixedLeafColumnsLength = fixedLeafColumns.length;
        states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

        states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
        states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
      };

      TableStore.prototype.isSelected = function (row) {
        return (this.states.selection || []).indexOf(row) > -1;
      };

      TableStore.prototype.clearSelection = function () {
        const states = this.states;
        states.isAllSelected = false;
        const oldSelection = states.selection;
        if (states.selection.length) {
          states.selection = [];
        }
        if (oldSelection.length > 0) {
          this.table.$emit('selection-change', states.selection ? states.selection.slice() : []);
        }
      };

      TableStore.prototype.setExpandRowKeys = function (rowKeys) {
        const expandRows = [];
        const data = this.states.data;
        const rowKey = this.states.rowKey;
        if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
        const keysMap = getKeysMap(data, rowKey);
        rowKeys.forEach((key) => {
          const info = keysMap[key];
          if (info) {
            expandRows.push(info.row);
          }
        });

        this.states.expandRows = expandRows;
      };

      TableStore.prototype.toggleRowSelection = function (row, selected) {
        const changed = toggleRowSelection(this.states, row, selected);
        if (changed) {
          this.table.$emit('selection-change', this.states.selection ? this.states.selection.slice() : []);
        }
      };

      TableStore.prototype.toggleRowExpansion = function (row, expanded) {
        const changed = toggleRowExpansion(this.states, row, expanded);
        if (changed) {
          this.table.$emit('expand-change', row, this.states.expandRows);
          this.scheduleLayout();
        }
      };

      TableStore.prototype.isRowExpanded = function (row) {
        const _states = this.states;


        const _states$expandRows = _states.expandRows;


        const expandRows = _states$expandRows === undefined ? [] : _states$expandRows;


        const rowKey = _states.rowKey;

        if (rowKey) {
          const expandMap = getKeysMap(expandRows, rowKey);
          return !!expandMap[(0, _util.getRowIdentity)(row, rowKey)];
        }
        return expandRows.indexOf(row) !== -1;
      };

      TableStore.prototype.cleanSelection = function () {
        const selection = this.states.selection || [];
        const data = this.states.data;
        const rowKey = this.states.rowKey;
        let deleted = void 0;
        if (rowKey) {
          deleted = [];
          const selectedMap = getKeysMap(selection, rowKey);
          const dataMap = getKeysMap(data, rowKey);
          for (const key in selectedMap) {
            if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
              deleted.push(selectedMap[key].row);
            }
          }
        } else {
          deleted = selection.filter(item => data.indexOf(item) === -1);
        }

        deleted.forEach((deletedItem) => {
          selection.splice(selection.indexOf(deletedItem), 1);
        });

        if (deleted.length) {
          this.table.$emit('selection-change', selection ? selection.slice() : []);
        }
      };

      TableStore.prototype.clearFilter = function () {
        const states = this.states;
        const _table$$refs = this.table.$refs;


        const tableHeader = _table$$refs.tableHeader;


        const fixedTableHeader = _table$$refs.fixedTableHeader;


        const rightFixedTableHeader = _table$$refs.rightFixedTableHeader;

        let panels = {};

        if (tableHeader) panels = (0, _merge2.default)(panels, tableHeader.filterPanels);
        if (fixedTableHeader) panels = (0, _merge2.default)(panels, fixedTableHeader.filterPanels);
        if (rightFixedTableHeader) panels = (0, _merge2.default)(panels, rightFixedTableHeader.filterPanels);

        const keys = Object.keys(panels);
        if (!keys.length) return;

        keys.forEach((key) => {
          panels[key].filteredValue = [];
        });

        states.filters = {};

        this.commit('filterChange', {
          column: {},
          values: [],
          silent: true,
        });
      };

      TableStore.prototype.clearSort = function () {
        const states = this.states;
        if (!states.sortingColumn) return;
        states.sortingColumn.order = null;
        states.sortProp = null;
        states.sortOrder = null;

        this.commit('changeSortCondition', {
          silent: true,
        });
      };

      TableStore.prototype.updateAllSelected = function () {
        const states = this.states;
        const selection = states.selection;


        const rowKey = states.rowKey;


        const selectable = states.selectable;


        const data = states.data;

        if (!data || data.length === 0) {
          states.isAllSelected = false;
          return;
        }

        let selectedMap = void 0;
        if (rowKey) {
          selectedMap = getKeysMap(states.selection, rowKey);
        }

        const isSelected = function isSelected(row) {
          if (selectedMap) {
            return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
          }
          return selection.indexOf(row) !== -1;
        };

        let isAllSelected = true;
        let selectedCount = 0;
        for (let i = 0, j = data.length; i < j; i++) {
          const item = data[i];
          const isRowSelectable = selectable && selectable.call(null, item, i);
          if (!isSelected(item)) {
            if (!selectable || isRowSelectable) {
              isAllSelected = false;
              break;
            }
          } else {
            selectedCount++;
          }
        }

        if (selectedCount === 0) isAllSelected = false;

        states.isAllSelected = isAllSelected;
      };

      TableStore.prototype.scheduleLayout = function (updateColumns) {
        if (updateColumns) {
          this.updateColumns();
        }
        this.table.debouncedUpdateLayout();
      };

      TableStore.prototype.setCurrentRowKey = function (key) {
        const states = this.states;
        const rowKey = states.rowKey;
        if (!rowKey) throw new Error('[Table] row-key should not be empty.');
        const data = states.data || [];
        const keysMap = getKeysMap(data, rowKey);
        const info = keysMap[key];
        states.currentRow = info ? info.row : null;
      };

      TableStore.prototype.updateCurrentRow = function () {
        const states = this.states;
        const table = this.table;
        const data = states.data || [];
        const oldCurrentRow = states.currentRow;

        if (data.indexOf(oldCurrentRow) === -1) {
          states.currentRow = null;

          if (states.currentRow !== oldCurrentRow) {
            table.$emit('current-change', null, oldCurrentRow);
          }
        }
      };

      TableStore.prototype.commit = function (name) {
        const mutations = this.mutations;
        if (mutations[name]) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          mutations[name].apply(this, [this.states].concat(args));
        } else {
          throw new Error(`Action not found: ${name}`);
        }
      };

      exports.default = TableStore;
      /** */ }),

    /** */ 165:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _scrollbarWidth = __webpack_require__(38);

      const _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

      const _vue = __webpack_require__(4);

      const _vue2 = _interopRequireDefault(_vue);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const TableLayout = (function () {
        function TableLayout(options) {
          _classCallCheck(this, TableLayout);

          this.observers = [];
          this.table = null;
          this.store = null;
          this.columns = null;
          this.fit = true;
          this.showHeader = true;

          this.height = null;
          this.scrollX = false;
          this.scrollY = false;
          this.bodyWidth = null;
          this.fixedWidth = null;
          this.rightFixedWidth = null;
          this.tableHeight = null;
          this.headerHeight = 44; // Table Header Height
          this.appendHeight = 0; // Append Slot Height
          this.footerHeight = 44; // Table Footer Height
          this.viewportHeight = null; // Table Height - Scroll Bar Height
          this.bodyHeight = null; // Table Height - Table Header Height
          this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
          this.gutterWidth = (0, _scrollbarWidth2.default)();

          for (const name in options) {
            if (options.hasOwnProperty(name)) {
              this[name] = options[name];
            }
          }

          if (!this.table) {
            throw new Error('table is required for Table Layout');
          }
          if (!this.store) {
            throw new Error('store is required for Table Layout');
          }
        }

        TableLayout.prototype.updateScrollY = function updateScrollY() {
          const height = this.height;
          if (typeof height !== 'string' && typeof height !== 'number') return;
          const bodyWrapper = this.table.bodyWrapper;
          if (this.table.$el && bodyWrapper) {
            const body = bodyWrapper.querySelector('.el-table__body');
            this.scrollY = body.offsetHeight > this.bodyHeight;
          }
        };

        TableLayout.prototype.setHeight = function setHeight(value) {
          const _this = this;

          const prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

          if (_vue2.default.prototype.$isServer) return;
          const el = this.table.$el;
          if (typeof value === 'string' && /^\d+$/.test(value)) {
            value = Number(value);
          }
          this.height = value;

          if (!el && (value || value === 0)) {
            return _vue2.default.nextTick(() => _this.setHeight(value, prop));
          }

          if (typeof value === 'number') {
            el.style[prop] = `${value}px`;

            this.updateElsHeight();
          } else if (typeof value === 'string') {
            el.style[prop] = value;
            this.updateElsHeight();
          }
        };

        TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
          return this.setHeight(value, 'max-height');
        };

        TableLayout.prototype.updateElsHeight = function updateElsHeight() {
          const _this2 = this;

          if (!this.table.$ready) {
            return _vue2.default.nextTick(() => _this2.updateElsHeight());
          }
          const _table$$refs = this.table.$refs;


          const headerWrapper = _table$$refs.headerWrapper;


          const appendWrapper = _table$$refs.appendWrapper;


          const footerWrapper = _table$$refs.footerWrapper;

          this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

          if (this.showHeader && !headerWrapper) return;
          const headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
          if (this.showHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
            return _vue2.default.nextTick(() => _this2.updateElsHeight());
          }
          const tableHeight = this.tableHeight = this.table.$el.clientHeight;
          if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
            const footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
            this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
          }
          this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

          const noData = !this.table.data || this.table.data.length === 0;
          this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;

          this.updateScrollY();
          this.notifyObservers('scrollable');
        };

        TableLayout.prototype.getFlattenColumns = function getFlattenColumns() {
          const flattenColumns = [];
          const columns = this.table.columns;
          columns.forEach((column) => {
            if (column.isColumnGroup) {
              flattenColumns.push(...column.columns);
            } else {
              flattenColumns.push(column);
            }
          });

          return flattenColumns;
        };

        TableLayout.prototype.updateColumnsWidth = function updateColumnsWidth() {
          if (_vue2.default.prototype.$isServer) return;
          const fit = this.fit;
          const bodyWidth = this.table.$el.clientWidth;
          let bodyMinWidth = 0;

          const flattenColumns = this.getFlattenColumns();
          const flexColumns = flattenColumns.filter(column => typeof column.width !== 'number');

          flattenColumns.forEach((column) => {
            // Clean those columns whose width changed from flex to unflex
            if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
          });

          if (flexColumns.length > 0 && fit) {
            flattenColumns.forEach((column) => {
              bodyMinWidth += column.width || column.minWidth || 80;
            });

            const scrollYWidth = this.scrollY ? this.gutterWidth : 0;

            if (bodyMinWidth <= bodyWidth - scrollYWidth) {
              // DON'T HAVE SCROLL BAR
              this.scrollX = false;

              const totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

              if (flexColumns.length === 1) {
                flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
              } else {
                (function () {
                  const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
                  const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                  let noneFirstWidth = 0;

                  flexColumns.forEach((column, index) => {
                    if (index === 0) return;
                    const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
                    noneFirstWidth += flexWidth;
                    column.realWidth = (column.minWidth || 80) + flexWidth;
                  });

                  flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
                }());
              }
            } else {
              // HAVE HORIZONTAL SCROLL BAR
              this.scrollX = true;
              flexColumns.forEach((column) => {
                column.realWidth = column.minWidth;
              });
            }

            this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
            this.table.resizeState.width = this.bodyWidth;
          } else {
            flattenColumns.forEach((column) => {
              if (!column.width && !column.minWidth) {
                column.realWidth = 80;
              } else {
                column.realWidth = column.width || column.minWidth;
              }

              bodyMinWidth += column.realWidth;
            });
            this.scrollX = bodyMinWidth > bodyWidth;

            this.bodyWidth = bodyMinWidth;
          }

          const fixedColumns = this.store.states.fixedColumns;

          if (fixedColumns.length > 0) {
            let fixedWidth = 0;
            fixedColumns.forEach((column) => {
              fixedWidth += column.realWidth || column.width;
            });

            this.fixedWidth = fixedWidth;
          }

          const rightFixedColumns = this.store.states.rightFixedColumns;
          if (rightFixedColumns.length > 0) {
            let rightFixedWidth = 0;
            rightFixedColumns.forEach((column) => {
              rightFixedWidth += column.realWidth || column.width;
            });

            this.rightFixedWidth = rightFixedWidth;
          }

          this.notifyObservers('columns');
        };

        TableLayout.prototype.addObserver = function addObserver(observer) {
          this.observers.push(observer);
        };

        TableLayout.prototype.removeObserver = function removeObserver(observer) {
          const index = this.observers.indexOf(observer);
          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        };

        TableLayout.prototype.notifyObservers = function notifyObservers(event) {
          const _this3 = this;

          const observers = this.observers;
          observers.forEach((observer) => {
            switch (event) {
              case 'columns':
                observer.onColumnsChange(_this3);
                break;
              case 'scrollable':
                observer.onScrollableChange(_this3);
                break;
              default:
                throw new Error(`Table Layout don't have event ${event}.`);
            }
          });
        };

        return TableLayout;
      }());

      exports.default = TableLayout;
      /** */ }),

    /** */ 166:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _util = __webpack_require__(48);

      const _dom = __webpack_require__(3);

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _tooltip = __webpack_require__(22);

      const _tooltip2 = _interopRequireDefault(_tooltip);

      const _debounce = __webpack_require__(14);

      const _debounce2 = _interopRequireDefault(_debounce);

      const _layoutObserver = __webpack_require__(39);

      const _layoutObserver2 = _interopRequireDefault(_layoutObserver);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElTableBody',

        mixins: [_layoutObserver2.default],

        components: {
          ElCheckbox: _checkbox2.default,
          ElTooltip: _tooltip2.default,
        },

        props: {
          store: {
            required: true,
          },
          stripe: Boolean,
          context: {},
          rowClassName: [String, Function],
          rowStyle: [Object, Function],
          fixed: String,
          highlight: Boolean,
        },

        render: function render(h) {
          const _this = this;

          const columnsHidden = this.columns.map((column, index) => _this.isColumnHidden(index));
          return h(
            'table',
            {
              class: 'el-table__body',
              attrs: {
                cellspacing: '0',
                cellpadding: '0',
                border: '0',
              },
            },
            [h(
              'colgroup',
              null,
              [this._l(this.columns, column => h(
                'col',
                {
                  attrs: { name: column.id },
                },
                [],
              ))],
            ), h(
              'tbody',
              null,
              [this._l(this.data, (row, $index) => [h(
                'tr',
                {
                  style: _this.rowStyle ? _this.getRowStyle(row, $index) : null,
                  key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
                  on: {
                    dblclick: function dblclick($event) {
                      return _this.handleDoubleClick($event, row);
                    },
                    click: function click($event) {
                      return _this.handleClick($event, row);
                    },
                    contextmenu: function contextmenu($event) {
                      return _this.handleContextMenu($event, row);
                    },
                    mouseenter: function mouseenter(_) {
                      return _this.handleMouseEnter($index);
                    },
                    mouseleave: function mouseleave(_) {
                      return _this.handleMouseLeave();
                    },
                  },

                  class: [_this.getRowClass(row, $index)],
                },
                [_this._l(_this.columns, (column, cellIndex) => {
                  const _getSpan = _this.getSpan(row, column, $index, cellIndex);


                  const rowspan = _getSpan.rowspan;


                  const colspan = _getSpan.colspan;

                  if (!rowspan || !colspan) {
                    return '';
                  }
                  return h(
                    'td',
                    {
                      style: _this.getCellStyle($index, cellIndex, row, column),
                      class: _this.getCellClass($index, cellIndex, row, column),
                      attrs: {
                        rowspan,
                        colspan,
                      },
                      on: {
                        mouseenter: function mouseenter($event) {
                          return _this.handleCellMouseEnter($event, row);
                        },
                        mouseleave: _this.handleCellMouseLeave,
                      },
                    },
                    [column.renderCell.call(_this._renderProxy, h, {
                      row,
                      column,
                      $index,
                      store: _this.store,
                      _self: _this.context || _this.table.$vnode.context,
                    }, columnsHidden[cellIndex])],
                  );
                })],
              ), _this.store.isRowExpanded(row) ? h(
                'tr',
                null,
                [h(
                  'td',
                  {
                    attrs: { colspan: _this.columns.length },
                    class: 'el-table__expanded-cell',
                  },
                  [_this.table.renderExpanded ? _this.table.renderExpanded(h, { row, $index, store: _this.store }) : ''],
                )],
              ) : '']).concat(h(
                'el-tooltip',
                {
                  attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
                  ref: 'tooltip',
                },
                [],
              ))],
            )],
          );
        },


        watch: {
          'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
            if (!this.store.states.isComplex) return;
            const el = this.$el;
            if (!el) return;
            const tr = el.querySelector('tbody').children;
            const rows = [].filter.call(tr, row => (0, _dom.hasClass)(row, 'el-table__row'));
            const oldRow = rows[oldVal];
            const newRow = rows[newVal];
            if (oldRow) {
              (0, _dom.removeClass)(oldRow, 'hover-row');
            }
            if (newRow) {
              (0, _dom.addClass)(newRow, 'hover-row');
            }
          },
          'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
            if (!this.highlight) return;
            const el = this.$el;
            if (!el) return;
            const data = this.store.states.data;
            const tr = el.querySelector('tbody').children;
            const rows = [].filter.call(tr, row => (0, _dom.hasClass)(row, 'el-table__row'));
            const oldRow = rows[data.indexOf(oldVal)];
            const newRow = rows[data.indexOf(newVal)];
            if (oldRow) {
              (0, _dom.removeClass)(oldRow, 'current-row');
            } else {
              [].forEach.call(rows, row => (0, _dom.removeClass)(row, 'current-row'));
            }
            if (newRow) {
              (0, _dom.addClass)(newRow, 'current-row');
            }
          },
        },

        computed: {
          table: function table() {
            return this.$parent;
          },
          data: function data() {
            return this.store.states.data;
          },
          columnsCount: function columnsCount() {
            return this.store.states.columns.length;
          },
          leftFixedLeafCount: function leftFixedLeafCount() {
            return this.store.states.fixedLeafColumnsLength;
          },
          rightFixedLeafCount: function rightFixedLeafCount() {
            return this.store.states.rightFixedLeafColumnsLength;
          },
          leftFixedCount: function leftFixedCount() {
            return this.store.states.fixedColumns.length;
          },
          rightFixedCount: function rightFixedCount() {
            return this.store.states.rightFixedColumns.length;
          },
          columns: function columns() {
            return this.store.states.columns;
          },
        },

        data: function data() {
          return {
            tooltipContent: '',
          };
        },
        created: function created() {
          this.activateTooltip = (0, _debounce2.default)(50, tooltip => tooltip.handleShowPopper());
        },


        methods: {
          getKeyOfRow: function getKeyOfRow(row, index) {
            const rowKey = this.table.rowKey;
            if (rowKey) {
              return (0, _util.getRowIdentity)(row, rowKey);
            }
            return index;
          },
          isColumnHidden: function isColumnHidden(index) {
            if (this.fixed === true || this.fixed === 'left') {
              return index >= this.leftFixedLeafCount;
            } if (this.fixed === 'right') {
              return index < this.columnsCount - this.rightFixedLeafCount;
            }
            return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
          },
          getSpan: function getSpan(row, column, rowIndex, columnIndex) {
            let rowspan = 1;
            let colspan = 1;

            const fn = this.table.spanMethod;
            if (typeof fn === 'function') {
              const result = fn({
                row,
                column,
                rowIndex,
                columnIndex,
              });

              if (Array.isArray(result)) {
                rowspan = result[0];
                colspan = result[1];
              } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
                rowspan = result.rowspan;
                colspan = result.colspan;
              }
            }

            return {
              rowspan,
              colspan,
            };
          },
          getRowStyle: function getRowStyle(row, rowIndex) {
            const rowStyle = this.table.rowStyle;
            if (typeof rowStyle === 'function') {
              return rowStyle.call(null, {
                row,
                rowIndex,
              });
            }
            return rowStyle;
          },
          getRowClass: function getRowClass(row, rowIndex) {
            const classes = ['el-table__row'];
            if (this.table.highlightCurrentRow && row === this.store.states.currentRow) {
              classes.push('current-row');
            }

            if (this.stripe && rowIndex % 2 === 1) {
              classes.push('el-table__row--striped');
            }
            const rowClassName = this.table.rowClassName;
            if (typeof rowClassName === 'string') {
              classes.push(rowClassName);
            } else if (typeof rowClassName === 'function') {
              classes.push(rowClassName.call(null, {
                row,
                rowIndex,
              }));
            }

            if (this.store.states.expandRows.indexOf(row) > -1) {
              classes.push('expanded');
            }

            return classes.join(' ');
          },
          getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
            const cellStyle = this.table.cellStyle;
            if (typeof cellStyle === 'function') {
              return cellStyle.call(null, {
                rowIndex,
                columnIndex,
                row,
                column,
              });
            }
            return cellStyle;
          },
          getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
            const classes = [column.id, column.align, column.className];

            if (this.isColumnHidden(columnIndex)) {
              classes.push('is-hidden');
            }

            const cellClassName = this.table.cellClassName;
            if (typeof cellClassName === 'string') {
              classes.push(cellClassName);
            } else if (typeof cellClassName === 'function') {
              classes.push(cellClassName.call(null, {
                rowIndex,
                columnIndex,
                row,
                column,
              }));
            }

            return classes.join(' ');
          },
          handleCellMouseEnter: function handleCellMouseEnter(event, row) {
            const table = this.table;
            const cell = (0, _util.getCell)(event);

            if (cell) {
              const column = (0, _util.getColumnByCell)(table, cell);
              const hoverState = table.hoverState = { cell, column, row };
              table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
            }

            // 判断是否text-overflow, 如果是就显示tooltip
            const cellChild = event.target.querySelector('.cell');
            if (!(0, _dom.hasClass)(cellChild, 'el-tooltip')) {
              return;
            }
            // use range width instead of scrollWidth to determine whether the text is overflowing
            // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
            const range = document.createRange();
            range.setStart(cellChild, 0);
            range.setEnd(cellChild, cellChild.childNodes.length);
            const rangeWidth = range.getBoundingClientRect().width;
            const padding = (parseInt((0, _dom.getStyle)(cellChild, 'paddingLeft'), 10) || 0) + (parseInt((0, _dom.getStyle)(cellChild, 'paddingRight'), 10) || 0);
            if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
              const tooltip = this.$refs.tooltip;
              // TODO 会引起整个 Table 的重新渲染，需要优化
              this.tooltipContent = cell.innerText || cell.textContent;
              tooltip.referenceElm = cell;
              tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
              tooltip.doDestroy();
              tooltip.setExpectedState(true);
              this.activateTooltip(tooltip);
            }
          },
          handleCellMouseLeave: function handleCellMouseLeave(event) {
            const tooltip = this.$refs.tooltip;
            if (tooltip) {
              tooltip.setExpectedState(false);
              tooltip.handleClosePopper();
            }
            const cell = (0, _util.getCell)(event);
            if (!cell) return;

            const oldHoverState = this.table.hoverState || {};
            this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
          },
          handleMouseEnter: function handleMouseEnter(index) {
            this.store.commit('setHoverRow', index);
          },
          handleMouseLeave: function handleMouseLeave() {
            this.store.commit('setHoverRow', null);
          },
          handleContextMenu: function handleContextMenu(event, row) {
            this.handleEvent(event, row, 'contextmenu');
          },
          handleDoubleClick: function handleDoubleClick(event, row) {
            this.handleEvent(event, row, 'dblclick');
          },
          handleClick: function handleClick(event, row) {
            this.store.commit('setCurrentRow', row);
            this.handleEvent(event, row, 'click');
          },
          handleEvent: function handleEvent(event, row, name) {
            const table = this.table;
            const cell = (0, _util.getCell)(event);
            let column = void 0;
            if (cell) {
              column = (0, _util.getColumnByCell)(table, cell);
              if (column) {
                table.$emit(`cell-${name}`, row, column, cell, event);
              }
            }
            table.$emit(`row-${name}`, row, event, column);
          },
          handleExpandClick: function handleExpandClick(row, e) {
            e.stopPropagation();
            this.store.toggleRowExpansion(row);
          },
        },
      };
      /** */ }),

    /** */ 167:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _dom = __webpack_require__(3);

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _tag = __webpack_require__(25);

      const _tag2 = _interopRequireDefault(_tag);

      const _vue = __webpack_require__(4);

      const _vue2 = _interopRequireDefault(_vue);

      const _filterPanel = __webpack_require__(168);

      const _filterPanel2 = _interopRequireDefault(_filterPanel);

      const _layoutObserver = __webpack_require__(39);

      const _layoutObserver2 = _interopRequireDefault(_layoutObserver);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const getAllColumns = function getAllColumns(columns) {
        const result = [];
        columns.forEach((column) => {
          if (column.children) {
            result.push(column);
            result.push(...getAllColumns(column.children));
          } else {
            result.push(column);
          }
        });
        return result;
      };

      const convertToRows = function convertToRows(originColumns) {
        let maxLevel = 1;
        const traverse = function traverse(column, parent) {
          if (parent) {
            column.level = parent.level + 1;
            if (maxLevel < column.level) {
              maxLevel = column.level;
            }
          }
          if (column.children) {
            let colSpan = 0;
            column.children.forEach((subColumn) => {
              traverse(subColumn, column);
              colSpan += subColumn.colSpan;
            });
            column.colSpan = colSpan;
          } else {
            column.colSpan = 1;
          }
        };

        originColumns.forEach((column) => {
          column.level = 1;
          traverse(column);
        });

        const rows = [];
        for (let i = 0; i < maxLevel; i++) {
          rows.push([]);
        }

        const allColumns = getAllColumns(originColumns);

        allColumns.forEach((column) => {
          if (!column.children) {
            column.rowSpan = maxLevel - column.level + 1;
          } else {
            column.rowSpan = 1;
          }
          rows[column.level - 1].push(column);
        });

        return rows;
      };

      exports.default = {
        name: 'ElTableHeader',

        mixins: [_layoutObserver2.default],

        render: function render(h) {
          const _this = this;

          const originColumns = this.store.states.originColumns;
          const columnRows = convertToRows(originColumns, this.columns);
          // 是否拥有多级表头
          const isGroup = columnRows.length > 1;
          if (isGroup) this.$parent.isGroup = true;
          return h(
            'table',
            {
              class: 'el-table__header',
              attrs: {
                cellspacing: '0',
                cellpadding: '0',
                border: '0',
              },
            },
            [h(
              'colgroup',
              null,
              [this._l(this.columns, column => h(
                'col',
                {
                  attrs: { name: column.id },
                },
                [],
              )), this.hasGutter ? h(
                'col',
                {
                  attrs: { name: 'gutter' },
                },
                [],
              ) : ''],
            ), h(
              'thead',
              { class: [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
              [this._l(columnRows, (columns, rowIndex) => h(
                'tr',
                {
                  style: _this.getHeaderRowStyle(rowIndex),
                  class: _this.getHeaderRowClass(rowIndex),
                },
                [_this._l(columns, (column, cellIndex) => h(
                  'th',
                  {
                    attrs: {
                      colspan: column.colSpan,
                      rowspan: column.rowSpan,
                    },
                    on: {
                      mousemove: function mousemove($event) {
                        return _this.handleMouseMove($event, column);
                      },
                      mouseout: _this.handleMouseOut,
                      mousedown: function mousedown($event) {
                        return _this.handleMouseDown($event, column);
                      },
                      click: function click($event) {
                        return _this.handleHeaderClick($event, column);
                      },
                      contextmenu: function contextmenu($event) {
                        return _this.handleHeaderContextMenu($event, column);
                      },
                    },

                    style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                    class: _this.getHeaderCellClass(rowIndex, cellIndex, columns, column),
                    key: column.id,
                  },
                  [h(
                    'div',
                    { class: ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                    [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, {
                      column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context,
                    }) : column.label, column.sortable ? h(
                      'span',
                      {
                        class: 'caret-wrapper',
                        on: {
                          click: function click($event) {
                            return _this.handleSortClick($event, column);
                          },
                        },
                      },
                      [h(
                        'i',
                        {
                          class: 'sort-caret ascending',
                          on: {
                            click: function click($event) {
                              return _this.handleSortClick($event, column, 'ascending');
                            },
                          },
                        },
                        [],
                      ), h(
                        'i',
                        {
                          class: 'sort-caret descending',
                          on: {
                            click: function click($event) {
                              return _this.handleSortClick($event, column, 'descending');
                            },
                          },
                        },
                        [],
                      )],
                    ) : '', column.filterable ? h(
                      'span',
                      {
                        class: 'el-table__column-filter-trigger',
                        on: {
                          click: function click($event) {
                            return _this.handleFilterClick($event, column);
                          },
                        },
                      },
                      [h(
                        'i',
                        { class: ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] },
                        [],
                      )],
                    ) : ''],
                  )],
                )), _this.hasGutter ? h(
                  'th',
                  { class: 'gutter' },
                  [],
                ) : ''],
              ))],
            )],
          );
        },


        props: {
          fixed: String,
          store: {
            required: true,
          },
          border: Boolean,
          defaultSort: {
            type: Object,
            default: function _default() {
              return {
                prop: '',
                order: '',
              };
            },
          },
        },

        components: {
          ElCheckbox: _checkbox2.default,
          ElTag: _tag2.default,
        },

        computed: {
          table: function table() {
            return this.$parent;
          },
          isAllSelected: function isAllSelected() {
            return this.store.states.isAllSelected;
          },
          columnsCount: function columnsCount() {
            return this.store.states.columns.length;
          },
          leftFixedCount: function leftFixedCount() {
            return this.store.states.fixedColumns.length;
          },
          rightFixedCount: function rightFixedCount() {
            return this.store.states.rightFixedColumns.length;
          },
          leftFixedLeafCount: function leftFixedLeafCount() {
            return this.store.states.fixedLeafColumnsLength;
          },
          rightFixedLeafCount: function rightFixedLeafCount() {
            return this.store.states.rightFixedLeafColumnsLength;
          },
          columns: function columns() {
            return this.store.states.columns;
          },
          hasGutter: function hasGutter() {
            return !this.fixed && this.tableLayout.gutterWidth;
          },
        },

        created: function created() {
          this.filterPanels = {};
        },
        mounted: function mounted() {
          const _defaultSort = this.defaultSort;


          const prop = _defaultSort.prop;


          const order = _defaultSort.order;

          this.store.commit('sort', { prop, order });
        },
        beforeDestroy: function beforeDestroy() {
          const panels = this.filterPanels;
          for (const prop in panels) {
            if (panels.hasOwnProperty(prop) && panels[prop]) {
              panels[prop].$destroy(true);
            }
          }
        },


        methods: {
          isCellHidden: function isCellHidden(index, columns) {
            let start = 0;
            for (let i = 0; i < index; i++) {
              start += columns[i].colSpan;
            }
            const after = start + columns[index].colSpan - 1;
            if (this.fixed === true || this.fixed === 'left') {
              return after >= this.leftFixedLeafCount;
            } if (this.fixed === 'right') {
              return start < this.columnsCount - this.rightFixedLeafCount;
            }
            return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
          },
          getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
            const headerRowStyle = this.table.headerRowStyle;
            if (typeof headerRowStyle === 'function') {
              return headerRowStyle.call(null, { rowIndex });
            }
            return headerRowStyle;
          },
          getHeaderRowClass: function getHeaderRowClass(rowIndex) {
            const classes = [];

            const headerRowClassName = this.table.headerRowClassName;
            if (typeof headerRowClassName === 'string') {
              classes.push(headerRowClassName);
            } else if (typeof headerRowClassName === 'function') {
              classes.push(headerRowClassName.call(null, { rowIndex }));
            }

            return classes.join(' ');
          },
          getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
            const headerCellStyle = this.table.headerCellStyle;
            if (typeof headerCellStyle === 'function') {
              return headerCellStyle.call(null, {
                rowIndex,
                columnIndex,
                row,
                column,
              });
            }
            return headerCellStyle;
          },
          getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
            const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

            if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
              classes.push('is-hidden');
            }

            if (!column.children) {
              classes.push('is-leaf');
            }

            if (column.sortable) {
              classes.push('is-sortable');
            }

            const headerCellClassName = this.table.headerCellClassName;
            if (typeof headerCellClassName === 'string') {
              classes.push(headerCellClassName);
            } else if (typeof headerCellClassName === 'function') {
              classes.push(headerCellClassName.call(null, {
                rowIndex,
                columnIndex,
                row,
                column,
              }));
            }

            return classes.join(' ');
          },
          toggleAllSelection: function toggleAllSelection() {
            this.store.commit('toggleAllSelection');
          },
          handleFilterClick: function handleFilterClick(event, column) {
            event.stopPropagation();
            const target = event.target;
            let cell = target.tagName === 'TH' ? target : target.parentNode;
            cell = cell.querySelector('.el-table__column-filter-trigger') || cell;
            const table = this.$parent;

            let filterPanel = this.filterPanels[column.id];

            if (filterPanel && column.filterOpened) {
              filterPanel.showPopper = false;
              return;
            }

            if (!filterPanel) {
              filterPanel = new _vue2.default(_filterPanel2.default);
              this.filterPanels[column.id] = filterPanel;
              if (column.filterPlacement) {
                filterPanel.placement = column.filterPlacement;
              }
              filterPanel.table = table;
              filterPanel.cell = cell;
              filterPanel.column = column;
              !this.$isServer && filterPanel.$mount(document.createElement('div'));
            }

            setTimeout(() => {
              filterPanel.showPopper = true;
            }, 16);
          },
          handleHeaderClick: function handleHeaderClick(event, column) {
            if (!column.filters && column.sortable) {
              this.handleSortClick(event, column);
            } else if (column.filterable && !column.sortable) {
              this.handleFilterClick(event, column);
            }

            this.$parent.$emit('header-click', column, event);
          },
          handleHeaderContextMenu: function handleHeaderContextMenu(event, column) {
            this.$parent.$emit('header-contextmenu', column, event);
          },
          handleMouseDown: function handleMouseDown(event, column) {
            const _this2 = this;

            if (this.$isServer) return;
            if (column.children && column.children.length > 0) return;
            /* istanbul ignore if */
            if (this.draggingColumn && this.border) {
              (function () {
                _this2.dragging = true;

                _this2.$parent.resizeProxyVisible = true;

                const table = _this2.$parent;
                const tableEl = table.$el;
                const tableLeft = tableEl.getBoundingClientRect().left;
                const columnEl = _this2.$el.querySelector(`th.${column.id}`);
                const columnRect = columnEl.getBoundingClientRect();
                const minLeft = columnRect.left - tableLeft + 30;

                (0, _dom.addClass)(columnEl, 'noclick');

                _this2.dragState = {
                  startMouseLeft: event.clientX,
                  startLeft: columnRect.right - tableLeft,
                  startColumnLeft: columnRect.left - tableLeft,
                  tableLeft,
                };

                const resizeProxy = table.$refs.resizeProxy;
                resizeProxy.style.left = `${_this2.dragState.startLeft}px`;

                document.onselectstart = function () {
                  return false;
                };
                document.ondragstart = function () {
                  return false;
                };

                const handleMouseMove = function handleMouseMove(event) {
                  const deltaLeft = event.clientX - _this2.dragState.startMouseLeft;
                  const proxyLeft = _this2.dragState.startLeft + deltaLeft;

                  resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
                };

                const handleMouseUp = function handleMouseUp() {
                  if (_this2.dragging) {
                    const _dragState = _this2.dragState;


                    const startColumnLeft = _dragState.startColumnLeft;


                    const startLeft = _dragState.startLeft;

                    const finalLeft = parseInt(resizeProxy.style.left, 10);
                    const columnWidth = finalLeft - startColumnLeft;
                    column.width = column.realWidth = columnWidth;
                    table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

                    _this2.store.scheduleLayout();

                    document.body.style.cursor = '';
                    _this2.dragging = false;
                    _this2.draggingColumn = null;
                    _this2.dragState = {};

                    table.resizeProxyVisible = false;
                  }

                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                  document.onselectstart = null;
                  document.ondragstart = null;

                  setTimeout(() => {
                    (0, _dom.removeClass)(columnEl, 'noclick');
                  }, 0);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }());
            }
          },
          handleMouseMove: function handleMouseMove(event, column) {
            if (column.children && column.children.length > 0) return;
            let target = event.target;
            while (target && target.tagName !== 'TH') {
              target = target.parentNode;
            }

            if (!column || !column.resizable) return;

            if (!this.dragging && this.border) {
              const rect = target.getBoundingClientRect();

              const bodyStyle = document.body.style;
              if (rect.width > 12 && rect.right - event.pageX < 8) {
                bodyStyle.cursor = 'col-resize';
                if ((0, _dom.hasClass)(target, 'is-sortable')) {
                  target.style.cursor = 'col-resize';
                }
                this.draggingColumn = column;
              } else if (!this.dragging) {
                bodyStyle.cursor = '';
                if ((0, _dom.hasClass)(target, 'is-sortable')) {
                  target.style.cursor = 'pointer';
                }
                this.draggingColumn = null;
              }
            }
          },
          handleMouseOut: function handleMouseOut() {
            if (this.$isServer) return;
            document.body.style.cursor = '';
          },
          toggleOrder: function toggleOrder(_ref) {
            const order = _ref.order;


            const sortOrders = _ref.sortOrders;

            if (order === '') return sortOrders[0];
            const index = sortOrders.indexOf(order || null);
            return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
          },
          handleSortClick: function handleSortClick(event, column, givenOrder) {
            event.stopPropagation();
            const order = givenOrder || this.toggleOrder(column);

            let target = event.target;
            while (target && target.tagName !== 'TH') {
              target = target.parentNode;
            }

            if (target && target.tagName === 'TH') {
              if ((0, _dom.hasClass)(target, 'noclick')) {
                (0, _dom.removeClass)(target, 'noclick');
                return;
              }
            }

            if (!column.sortable) return;

            const states = this.store.states;
            let sortProp = states.sortProp;
            let sortOrder = void 0;
            const sortingColumn = states.sortingColumn;

            if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
              if (sortingColumn) {
                sortingColumn.order = null;
              }
              states.sortingColumn = column;
              sortProp = column.property;
            }

            if (!order) {
              sortOrder = column.order = null;
              states.sortingColumn = null;
              sortProp = null;
            } else {
              sortOrder = column.order = order;
            }

            states.sortProp = sortProp;
            states.sortOrder = sortOrder;

            this.store.commit('changeSortCondition');
          },
        },

        data: function data() {
          return {
            draggingColumn: null,
            dragging: false,
            dragState: {},
          };
        },
      };
      /** */ }),

    /** */ 168:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__ = __webpack_require__(169);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784f4ebc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__ = __webpack_require__(171);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784f4ebc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 169:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _vuePopper = __webpack_require__(7);

      const _vuePopper2 = _interopRequireDefault(_vuePopper);

      const _popup = __webpack_require__(13);

      const _locale = __webpack_require__(5);

      const _locale2 = _interopRequireDefault(_locale);

      const _clickoutside = __webpack_require__(10);

      const _clickoutside2 = _interopRequireDefault(_clickoutside);

      const _dropdown = __webpack_require__(170);

      const _dropdown2 = _interopRequireDefault(_dropdown);

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _checkboxGroup = __webpack_require__(40);

      const _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElTableFilterPanel',

        mixins: [_vuePopper2.default, _locale2.default],

        directives: {
          Clickoutside: _clickoutside2.default,
        },

        components: {
          ElCheckbox: _checkbox2.default,
          ElCheckboxGroup: _checkboxGroup2.default,
        },

        props: {
          placement: {
            type: String,
            default: 'bottom-end',
          },
        },

        customRender: function customRender(h) {
          return h(
            'div',
            { class: 'el-table-filter' },
            [h(
              'div',
              { class: 'el-table-filter__content' },
              [],
            ), h(
              'div',
              { class: 'el-table-filter__bottom' },
              [h(
                'button',
                {
                  on: {
                    click: this.handleConfirm,
                  },
                },
                [this.t('el.table.confirmFilter')],
              ), h(
                'button',
                {
                  on: {
                    click: this.handleReset,
                  },
                },
                [this.t('el.table.resetFilter')],
              )],
            )],
          );
        },


        methods: {
          isActive: function isActive(filter) {
            return filter.value === this.filterValue;
          },
          handleOutsideClick: function handleOutsideClick() {
            const _this = this;

            setTimeout(() => {
              _this.showPopper = false;
            }, 16);
          },
          handleConfirm: function handleConfirm() {
            this.confirmFilter(this.filteredValue);
            this.handleOutsideClick();
          },
          handleReset: function handleReset() {
            this.filteredValue = [];
            this.confirmFilter(this.filteredValue);
            this.handleOutsideClick();
          },
          handleSelect: function handleSelect(filterValue) {
            this.filterValue = filterValue;

            if (typeof filterValue !== 'undefined' && filterValue !== null) {
              this.confirmFilter(this.filteredValue);
            } else {
              this.confirmFilter([]);
            }

            this.handleOutsideClick();
          },
          confirmFilter: function confirmFilter(filteredValue) {
            this.table.store.commit('filterChange', {
              column: this.column,
              values: filteredValue,
            });
            this.table.store.updateAllSelected();
          },
        },

        data: function data() {
          return {
            table: null,
            cell: null,
            column: null,
          };
        },


        computed: {
          filters: function filters() {
            return this.column && this.column.filters;
          },


          filterValue: {
            get: function get() {
              return (this.column.filteredValue || [])[0];
            },
            set: function set(value) {
              if (this.filteredValue) {
                if (typeof value !== 'undefined' && value !== null) {
                  this.filteredValue.splice(0, 1, value);
                } else {
                  this.filteredValue.splice(0, 1);
                }
              }
            },
          },

          filteredValue: {
            get: function get() {
              if (this.column) {
                return this.column.filteredValue || [];
              }
              return [];
            },
            set: function set(value) {
              if (this.column) {
                this.column.filteredValue = value;
              }
            },
          },

          multiple: function multiple() {
            if (this.column) {
              return this.column.filterMultiple;
            }
            return true;
          },
        },

        mounted: function mounted() {
          const _this2 = this;

          this.popperElm = this.$el;
          this.referenceElm = this.cell;
          this.table.bodyWrapper.addEventListener('scroll', () => {
            _this2.updatePopper();
          });

          this.$watch('showPopper', (value) => {
            if (_this2.column) _this2.column.filterOpened = value;
            if (value) {
              _dropdown2.default.open(_this2);
            } else {
              _dropdown2.default.close(_this2);
            }
          });
        },

        watch: {
          showPopper: function showPopper(val) {
            if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
              this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
            }
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
      /** */ }),

    /** */ 170:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _vue = __webpack_require__(4);

      const _vue2 = _interopRequireDefault(_vue);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      const dropdowns = [];

      !_vue2.default.prototype.$isServer && document.addEventListener('click', (event) => {
        dropdowns.forEach((dropdown) => {
          const target = event.target;
          if (!dropdown || !dropdown.$el) return;
          if (target === dropdown.$el || dropdown.$el.contains(target)) {
            return;
          }
          dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
        });
      });

      exports.default = {
        open: function open(instance) {
          if (instance) {
            dropdowns.push(instance);
          }
        },
        close: function close(instance) {
          const index = dropdowns.indexOf(instance);
          if (index !== -1) {
            dropdowns.splice(instance, 1);
          }
        },
      };
      /** */ }),

    /** */ 171:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('transition', { attrs: { name: 'el-zoom-in-top' } }, [(_vm.multiple)?_c('div', {
          directives: [{
            name: 'clickoutside', rawName: 'v-clickoutside', value: (_vm.handleOutsideClick), expression: 'handleOutsideClick',
          }, {
            name: 'show', rawName: 'v-show', value: (_vm.showPopper), expression: 'showPopper',
          }],
          staticClass: 'el-table-filter',
        }, [_c('div', { staticClass: 'el-table-filter__content' }, [_c('el-scrollbar', { attrs: { 'wrap-class': 'el-table-filter__wrap' } }, [_c('el-checkbox-group', { staticClass: 'el-table-filter__checkbox-group', model: { value: (_vm.filteredValue), callback($$v) { _vm.filteredValue=$$v; }, expression: 'filteredValue' } }, _vm._l((_vm.filters), filter => _c('el-checkbox', { key: filter.value, attrs: { label: filter.value } }, [_vm._v(_vm._s(filter.text))])))], 1)], 1), _c('div', { staticClass: 'el-table-filter__bottom' }, [_c('button', { class: { 'is-disabled': _vm.filteredValue.length === 0 }, attrs: { disabled: _vm.filteredValue.length === 0 }, on: { click: _vm.handleConfirm } }, [_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]), _c('button', { on: { click: _vm.handleReset } }, [_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]):_c('div', {
          directives: [{
            name: 'clickoutside', rawName: 'v-clickoutside', value: (_vm.handleOutsideClick), expression: 'handleOutsideClick',
          }, {
            name: 'show', rawName: 'v-show', value: (_vm.showPopper), expression: 'showPopper',
          }],
          staticClass: 'el-table-filter',
        }, [_c('ul', { staticClass: 'el-table-filter__list' }, [_c('li', { staticClass: 'el-table-filter__list-item', class: { 'is-active': _vm.filterValue === undefined || _vm.filterValue === null }, on: { click($event) { _vm.handleSelect(null); } } }, [_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]), _vm._l((_vm.filters), filter => _c('li', {
          key: filter.value, staticClass: 'el-table-filter__list-item', class: { 'is-active': _vm.isActive(filter) }, attrs: { label: filter.value }, on: { click($event) { _vm.handleSelect(filter.value); } },
        }, [_vm._v(_vm._s(filter.text))]))], 2)])]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 172:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _layoutObserver = __webpack_require__(39);

      const _layoutObserver2 = _interopRequireDefault(_layoutObserver);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      exports.default = {
        name: 'ElTableFooter',

        mixins: [_layoutObserver2.default],

        render: function render(h) {
          const _this = this;

          let sums = [];
          if (this.summaryMethod) {
            sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
          } else {
            this.columns.forEach((column, index) => {
              if (index === 0) {
                sums[index] = _this.sumText;
                return;
              }
              const values = _this.store.states.data.map(item => Number(item[column.property]));
              const precisions = [];
              let notNumber = true;
              values.forEach((value) => {
                if (!isNaN(value)) {
                  notNumber = false;
                  const decimal = (`${value}`).split('.')[1];
                  precisions.push(decimal ? decimal.length : 0);
                }
              });
              const precision = Math.max.apply(null, precisions);
              if (!notNumber) {
                sums[index] = values.reduce((prev, curr) => {
                  const value = Number(curr);
                  if (!isNaN(value)) {
                    return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
                  }
                  return prev;
                }, 0);
              } else {
                sums[index] = '';
              }
            });
          }

          return h(
            'table',
            {
              class: 'el-table__footer',
              attrs: {
                cellspacing: '0',
                cellpadding: '0',
                border: '0',
              },
            },
            [h(
              'colgroup',
              null,
              [this._l(this.columns, column => h(
                'col',
                {
                  attrs: { name: column.id },
                },
                [],
              )), this.hasGutter ? h(
                'col',
                {
                  attrs: { name: 'gutter' },
                },
                [],
              ) : ''],
            ), h(
              'tbody',
              { class: [{ 'has-gutter': this.hasGutter }] },
              [h(
                'tr',
                null,
                [this._l(this.columns, (column, cellIndex) => h(
                  'td',
                  {
                    attrs: {
                      colspan: column.colSpan,
                      rowspan: column.rowSpan,
                    },
                    class: [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName],
                  },
                  [h(
                    'div',
                    { class: ['cell', column.labelClassName] },
                    [sums[cellIndex]],
                  )],
                )), this.hasGutter ? h(
                  'th',
                  { class: 'gutter' },
                  [],
                ) : ''],
              )],
            )],
          );
        },


        props: {
          fixed: String,
          store: {
            required: true,
          },
          summaryMethod: Function,
          sumText: String,
          border: Boolean,
          defaultSort: {
            type: Object,
            default: function _default() {
              return {
                prop: '',
                order: '',
              };
            },
          },
        },

        computed: {
          table: function table() {
            return this.$parent;
          },
          isAllSelected: function isAllSelected() {
            return this.store.states.isAllSelected;
          },
          columnsCount: function columnsCount() {
            return this.store.states.columns.length;
          },
          leftFixedCount: function leftFixedCount() {
            return this.store.states.fixedColumns.length;
          },
          rightFixedCount: function rightFixedCount() {
            return this.store.states.rightFixedColumns.length;
          },
          columns: function columns() {
            return this.store.states.columns;
          },
          hasGutter: function hasGutter() {
            return !this.fixed && this.tableLayout.gutterWidth;
          },
        },

        methods: {
          isCellHidden: function isCellHidden(index, columns) {
            if (this.fixed === true || this.fixed === 'left') {
              return index >= this.leftFixedCount;
            } if (this.fixed === 'right') {
              let before = 0;
              for (let i = 0; i < index; i++) {
                before += columns[i].colSpan;
              }
              return before < this.columnsCount - this.rightFixedCount;
            }
            return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
          },
        },
      };
      /** */ }),

    /** */ 173:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          staticClass: 'el-table',
          class: [{
            'el-table--fit': _vm.fit,
            'el-table--striped': _vm.stripe,
            'el-table--border': _vm.border || _vm.isGroup,
            'el-table--hidden': _vm.isHidden,
            'el-table--group': _vm.isGroup,
            'el-table--fluid-height': _vm.maxHeight,
            'el-table--scrollable-x': _vm.layout.scrollX,
            'el-table--scrollable-y': _vm.layout.scrollY,
            'el-table--enable-row-hover': !_vm.store.states.isComplex,
            'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100,
          }, _vm.tableSize ? (`el-table--${_vm.tableSize}`) : ''],
          on: { mouseleave($event) { _vm.handleMouseLeave($event); } },
        }, [_c('div', { ref: 'hiddenColumns', staticClass: 'hidden-columns' }, [_vm._t('default')], 2), (_vm.showHeader)?_c('div', {
          directives: [{
            name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleHeaderFooterMousewheel), expression: 'handleHeaderFooterMousewheel',
          }],
          ref: 'headerWrapper',
          staticClass: 'el-table__header-wrapper',
        }, [_c('table-header', {
          ref: 'tableHeader',
          style: ({
            width: _vm.layout.bodyWidth ? `${_vm.layout.bodyWidth}px` : '',
          }),
          attrs: { store: _vm.store, border: _vm.border, 'default-sort': _vm.defaultSort },
        })], 1):_vm._e(), _c('div', {
          ref: 'bodyWrapper', staticClass: 'el-table__body-wrapper', class: [_vm.layout.scrollX ? (`is-scrolling-${_vm.scrollPosition}`) : 'is-scrolling-none'], style: ([_vm.bodyHeight]),
        }, [_c('table-body', {
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: {
            context: _vm.context, store: _vm.store, stripe: _vm.stripe, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle, highlight: _vm.highlightCurrentRow,
          },
        }), (!_vm.data || _vm.data.length === 0)?_c('div', {
          ref: 'emptyBlock',
          staticClass: 'el-table__empty-block',
          style: ({
            width: _vm.bodyWidth,
          }),
        }, [_c('span', { staticClass: 'el-table__empty-text' }, [_vm._t('empty', [_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])], 2)]):_vm._e(), (_vm.$slots.append)?_c('div', { ref: 'appendWrapper', staticClass: 'el-table__append-wrapper' }, [_vm._t('append')], 2):_vm._e()], 1), (_vm.showSummary)?_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0',
          }, {
            name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleHeaderFooterMousewheel), expression: 'handleHeaderFooterMousewheel',
          }],
          ref: 'footerWrapper',
          staticClass: 'el-table__footer-wrapper',
        }, [_c('table-footer', {
          style: ({
            width: _vm.layout.bodyWidth ? `${_vm.layout.bodyWidth}px` : '',
          }),
          attrs: {
            store: _vm.store, border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, 'default-sort': _vm.defaultSort,
          },
        })], 1):_vm._e(), (_vm.fixedColumns.length > 0)?_c('div', {
          directives: [{
            name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleFixedMousewheel), expression: 'handleFixedMousewheel',
          }],
          ref: 'fixedWrapper',
          staticClass: 'el-table__fixed',
          style: ([{
            width: _vm.layout.fixedWidth ? `${_vm.layout.fixedWidth}px` : '',
          },
          _vm.fixedHeight]),
        }, [(_vm.showHeader)?_c('div', { ref: 'fixedHeaderWrapper', staticClass: 'el-table__fixed-header-wrapper' }, [_c('table-header', {
          ref: 'fixedTableHeader',
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: { fixed: 'left', border: _vm.border, store: _vm.store },
        })], 1):_vm._e(), _c('div', {
          ref: 'fixedBodyWrapper',
          staticClass: 'el-table__fixed-body-wrapper',
          style: ([{
            top: `${_vm.layout.headerHeight}px`,
          },
          _vm.fixedBodyHeight]),
        }, [_c('table-body', {
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: {
            fixed: 'left', store: _vm.store, stripe: _vm.stripe, highlight: _vm.highlightCurrentRow, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle,
          },
        }), (_vm.$slots.append)?_c('div', {
          staticClass: 'el-table__append-gutter',
          style: ({
            height: `${_vm.layout.appendHeight}px`,
          }),
        }):_vm._e()], 1), (_vm.showSummary)?_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0',
          }],
          ref: 'fixedFooterWrapper',
          staticClass: 'el-table__fixed-footer-wrapper',
        }, [_c('table-footer', {
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: {
            fixed: 'left', border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, store: _vm.store,
          },
        })], 1):_vm._e()]):_vm._e(), (_vm.rightFixedColumns.length > 0)?_c('div', {
          directives: [{
            name: 'mousewheel', rawName: 'v-mousewheel', value: (_vm.handleFixedMousewheel), expression: 'handleFixedMousewheel',
          }],
          ref: 'rightFixedWrapper',
          staticClass: 'el-table__fixed-right',
          style: ([{
            width: _vm.layout.rightFixedWidth ? `${_vm.layout.rightFixedWidth}px` : '',
            right: _vm.layout.scrollY ? `${_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 0)}px` : '',
          },
          _vm.fixedHeight]),
        }, [(_vm.showHeader)?_c('div', { ref: 'rightFixedHeaderWrapper', staticClass: 'el-table__fixed-header-wrapper' }, [_c('table-header', {
          ref: 'rightFixedTableHeader',
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: { fixed: 'right', border: _vm.border, store: _vm.store },
        })], 1):_vm._e(), _c('div', {
          ref: 'rightFixedBodyWrapper',
          staticClass: 'el-table__fixed-body-wrapper',
          style: ([{
            top: `${_vm.layout.headerHeight}px`,
          },
          _vm.fixedBodyHeight]),
        }, [_c('table-body', {
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: {
            fixed: 'right', store: _vm.store, stripe: _vm.stripe, 'row-class-name': _vm.rowClassName, 'row-style': _vm.rowStyle, highlight: _vm.highlightCurrentRow,
          },
        })], 1), (_vm.showSummary)?_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.data && _vm.data.length > 0), expression: 'data && data.length > 0',
          }],
          ref: 'rightFixedFooterWrapper',
          staticClass: 'el-table__fixed-footer-wrapper',
        }, [_c('table-footer', {
          style: ({
            width: _vm.bodyWidth,
          }),
          attrs: {
            fixed: 'right', border: _vm.border, 'sum-text': _vm.sumText || _vm.t('el.table.sumText'), 'summary-method': _vm.summaryMethod, store: _vm.store,
          },
        })], 1):_vm._e()]):_vm._e(), (_vm.rightFixedColumns.length > 0)?_c('div', {
          ref: 'rightFixedPatch',
          staticClass: 'el-table__fixed-right-patch',
          style: ({
            width: _vm.layout.scrollY ? `${_vm.layout.gutterWidth}px` : '0',
            height: `${_vm.layout.headerHeight}px`,
          }),
        }):_vm._e(), _c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.resizeProxyVisible), expression: 'resizeProxyVisible',
          }],
          ref: 'resizeProxy',
          staticClass: 'el-table__column-resize-proxy',
        })]);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 18:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/resize-event');
      /** */ }),

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 22:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/tooltip');
      /** */ }),

    /** */ 25:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/tag');
      /** */ }),

    /** */ 3:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/dom');
      /** */ }),

    /** */ 38:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/scrollbar-width');
      /** */ }),

    /** */ 39:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      exports.default = {
        created: function created() {
          this.tableLayout.addObserver(this);
        },
        destroyed: function destroyed() {
          this.tableLayout.removeObserver(this);
        },


        computed: {
          tableLayout: function tableLayout() {
            let layout = this.layout;
            if (!layout && this.table) {
              layout = this.table.layout;
            }
            if (!layout) {
              throw new Error('Can not find table layout.');
            }
            return layout;
          },
        },

        mounted: function mounted() {
          this.onColumnsChange(this.tableLayout);
          this.onScrollableChange(this.tableLayout);
        },
        updated: function updated() {
          if (this.__updated__) return;
          this.onColumnsChange(this.tableLayout);
          this.onScrollableChange(this.tableLayout);
          this.__updated__ = true;
        },


        methods: {
          onColumnsChange: function onColumnsChange() {
            const cols = this.$el.querySelectorAll('colgroup > col');
            if (!cols.length) return;
            const flattenColumns = this.tableLayout.getFlattenColumns();
            const columnsMap = {};
            flattenColumns.forEach((column) => {
              columnsMap[column.id] = column;
            });
            for (let i = 0, j = cols.length; i < j; i++) {
              const col = cols[i];
              const name = col.getAttribute('name');
              const column = columnsMap[name];
              if (column) {
                col.setAttribute('width', column.realWidth || column.width);
              }
            }
          },
          onScrollableChange: function onScrollableChange(layout) {
            const cols = this.$el.querySelectorAll('colgroup > col[name=gutter]');
            for (let i = 0, j = cols.length; i < j; i++) {
              const col = cols[i];
              col.setAttribute('width', layout.scrollY ? layout.gutterWidth : '0');
            }
            const ths = this.$el.querySelectorAll('th.gutter');
            for (let _i = 0, _j = ths.length; _i < _j; _i++) {
              const th = ths[_i];
              th.style.width = layout.scrollY ? `${layout.gutterWidth}px` : '0';
              th.style.display = layout.scrollY ? '' : 'none';
            }
          },
        },
      };
      /** */ }),

    /** */ 4:
    /** */ (function (module, exports) {
      module.exports = require('vue');
      /** */ }),

    /** */ 40:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/checkbox-group');
      /** */ }),

    /** */ 48:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      exports.getRowIdentity = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _util = __webpack_require__(2);

      const getCell = exports.getCell = function getCell(event) {
        let cell = event.target;

        while (cell && cell.tagName.toUpperCase() !== 'HTML') {
          if (cell.tagName.toUpperCase() === 'TD') {
            return cell;
          }
          cell = cell.parentNode;
        }

        return null;
      };

      const isObject = function isObject(obj) {
        return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
      };

      const orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
        if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
          return array;
        }
        if (typeof reverse === 'string') {
          reverse = reverse === 'descending' ? -1 : 1;
        } else {
          reverse = reverse && reverse < 0 ? -1 : 1;
        }
        const getKey = sortMethod ? null : function (value, index) {
          if (sortBy) {
            if (!Array.isArray(sortBy)) {
              sortBy = [sortBy];
            }
            return sortBy.map((by) => {
              if (typeof by === 'string') {
                return (0, _util.getValueByPath)(value, by);
              }
              return by(value, index, array);
            });
          }
          if (sortKey !== '$key') {
            if (isObject(value) && '$value' in value) value = value.$value;
          }
          return [isObject(value) ? (0, _util.getValueByPath)(value, sortKey) : value];
        };
        const compare = function compare(a, b) {
          if (sortMethod) {
            return sortMethod(a.value, b.value);
          }
          for (let i = 0, len = a.key.length; i < len; i++) {
            if (a.key[i] < b.key[i]) {
              return -1;
            }
            if (a.key[i] > b.key[i]) {
              return 1;
            }
          }
          return 0;
        };
        return array.map((value, index) => ({
          value,
          index,
          key: getKey ? getKey(value, index) : null,
        })).sort((a, b) => {
          let order = compare(a, b);
          if (!order) {
            // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
            order = a.index - b.index;
          }
          return order * reverse;
        }).map(item => item.value);
      };

      const getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
        let column = null;
        table.columns.forEach((item) => {
          if (item.id === columnId) {
            column = item;
          }
        });
        return column;
      };

      const getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
        const matches = (cell.className || '').match(/el-table_[^\s]+/gm);
        if (matches) {
          return getColumnById(table, matches[0]);
        }
        return null;
      };

      const getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
        if (!row) throw new Error('row is required when get row identity');
        if (typeof rowKey === 'string') {
          if (rowKey.indexOf('.') < 0) {
            return row[rowKey];
          }
          const key = rowKey.split('.');
          let current = row;
          for (let i = 0; i < key.length; i++) {
            current = current[key[i]];
          }
          return current;
        } if (typeof rowKey === 'function') {
          return rowKey.call(null, row);
        }
      };
      /** */ }),

    /** */ 5:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/mixins/locale');
      /** */ }),

    /** */ 7:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/vue-popper');
      /** */ }),

    /** */ 8:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/mixins/migrating');
      /** */ }),

    /** */ 9:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/merge');
      /** */ }),

    /** *** */ }));
