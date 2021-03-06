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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 174);
    /** *** */ }({

    /** */ 16:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/checkbox');
      /** */ }),

    /** */ 174:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _tableColumn = __webpack_require__(175);

      const _tableColumn2 = _interopRequireDefault(_tableColumn);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _tableColumn2.default.install = function (Vue) {
        Vue.component(_tableColumn2.default.name, _tableColumn2.default);
      };

      exports.default = _tableColumn2.default;
      /** */ }),

    /** */ 175:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _tag = __webpack_require__(25);

      const _tag2 = _interopRequireDefault(_tag);

      const _merge = __webpack_require__(9);

      const _merge2 = _interopRequireDefault(_merge);

      const _util = __webpack_require__(2);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      let columnIdSeed = 1;

      const defaults = {
        default: {
          order: '',
        },
        selection: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: '',
          className: 'el-table-column--selection',
        },
        expand: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: '',
        },
        index: {
          width: 48,
          minWidth: 48,
          realWidth: 48,
          order: '',
        },
      };

      const forced = {
        selection: {
          renderHeader: function renderHeader(h, _ref) {
            const store = _ref.store;

            return h(
              'el-checkbox',
              {
                attrs: {
                  disabled: store.states.data && store.states.data.length === 0,
                  indeterminate: store.states.selection.length > 0 && !this.isAllSelected,

                  value: this.isAllSelected,
                },
                nativeOn: {
                  click: this.toggleAllSelection,
                },
              },
              [],
            );
          },
          renderCell: function renderCell(h, _ref2) {
            const row = _ref2.row;


            const column = _ref2.column;


            const store = _ref2.store;


            const $index = _ref2.$index;

            return h(
              'el-checkbox',
              {
                nativeOn: {
                  click: function click(event) {
                    return event.stopPropagation();
                  },
                },
                attrs: {
                  value: store.isSelected(row),
                  disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
                },
                on: {
                  input: function input() {
                    store.commit('rowSelectedChanged', row);
                  },
                },
              },
              [],
            );
          },
          sortable: false,
          resizable: false,
        },
        index: {
          renderHeader: function renderHeader(h, _ref3) {
            const column = _ref3.column;

            return column.label || '#';
          },
          renderCell: function renderCell(h, _ref4) {
            const $index = _ref4.$index;


            const column = _ref4.column;

            let i = $index + 1;
            const index = column.index;

            if (typeof index === 'number') {
              i = $index + index;
            } else if (typeof index === 'function') {
              i = index($index);
            }

            return h(
              'div',
              null,
              [i],
            );
          },
          sortable: false,
        },
        expand: {
          renderHeader: function renderHeader(h, _ref5) {
            const column = _ref5.column;

            return column.label || '';
          },
          renderCell: function renderCell(h, _ref6, proxy) {
            const row = _ref6.row;


            const store = _ref6.store;

            const expanded = store.states.expandRows.indexOf(row) > -1;
            return h(
              'div',
              {
                class: `el-table__expand-icon ${expanded ? 'el-table__expand-icon--expanded' : ''}`,
                on: {
                  click: function click(e) {
                    return proxy.handleExpandClick(row, e);
                  },
                },
              },
              [h(
                'i',
                { class: 'el-icon el-icon-arrow-right' },
                [],
              )],
            );
          },
          sortable: false,
          resizable: false,
          className: 'el-table__expand-column',
        },
      };

      const getDefaultColumn = function getDefaultColumn(type, options) {
        const column = {};

        (0, _merge2.default)(column, defaults[type || 'default']);

        for (const name in options) {
          if (options.hasOwnProperty(name)) {
            const value = options[name];
            if (typeof value !== 'undefined') {
              column[name] = value;
            }
          }
        }

        if (!column.minWidth) {
          column.minWidth = 80;
        }

        column.realWidth = column.width === undefined ? column.minWidth : column.width;

        return column;
      };

      const DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref7) {
        const row = _ref7.row;


        const column = _ref7.column;


        const $index = _ref7.$index;

        const property = column.property;
        const value = property && (0, _util.getPropByPath)(row, property).v;
        if (column && column.formatter) {
          return column.formatter(row, column, value, $index);
        }
        return value;
      };

      const parseWidth = function parseWidth(width) {
        if (width !== undefined) {
          width = parseInt(width, 10);
          if (isNaN(width)) {
            width = null;
          }
        }
        return width;
      };

      const parseMinWidth = function parseMinWidth(minWidth) {
        if (minWidth !== undefined) {
          minWidth = parseInt(minWidth, 10);
          if (isNaN(minWidth)) {
            minWidth = 80;
          }
        }
        return minWidth;
      };

      exports.default = {
        name: 'ElTableColumn',

        props: {
          type: {
            type: String,
            default: 'default',
          },
          label: String,
          className: String,
          labelClassName: String,
          property: String,
          prop: String,
          width: {},
          minWidth: {},
          renderHeader: Function,
          sortable: {
            type: [String, Boolean],
            default: false,
          },
          sortMethod: Function,
          sortBy: [String, Function, Array],
          resizable: {
            type: Boolean,
            default: true,
          },
          context: {},
          columnKey: String,
          align: String,
          headerAlign: String,
          showTooltipWhenOverflow: Boolean,
          showOverflowTooltip: Boolean,
          fixed: [Boolean, String],
          formatter: Function,
          selectable: Function,
          reserveSelection: Boolean,
          filterMethod: Function,
          filteredValue: Array,
          filters: Array,
          filterPlacement: String,
          filterMultiple: {
            type: Boolean,
            default: true,
          },
          index: [Number, Function],
          sortOrders: {
            type: Array,
            default: function _default() {
              return ['ascending', 'descending', null];
            },
            validator: function validator(val) {
              return val.every(order => ['ascending', 'descending', null].indexOf(order) > -1);
            },
          },
        },

        data: function data() {
          return {
            isSubColumn: false,
            columns: [],
          };
        },
        beforeCreate: function beforeCreate() {
          this.row = {};
          this.column = {};
          this.$index = 0;
        },


        components: {
          ElCheckbox: _checkbox2.default,
          ElTag: _tag2.default,
        },

        computed: {
          owner: function owner() {
            let parent = this.$parent;
            while (parent && !parent.tableId) {
              parent = parent.$parent;
            }
            return parent;
          },
          columnOrTableParent: function columnOrTableParent() {
            let parent = this.$parent;
            while (parent && !parent.tableId && !parent.columnId) {
              parent = parent.$parent;
            }
            return parent;
          },
        },

        created: function created() {
          const _this = this;

          this.customRender = this.$options.render;
          this.$options.render = function (h) {
            return h('div', _this.$slots.default);
          };

          const parent = this.columnOrTableParent;
          const owner = this.owner;
          this.isSubColumn = owner !== parent;
          this.columnId = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;

          const type = this.type;

          const width = parseWidth(this.width);
          const minWidth = parseMinWidth(this.minWidth);

          const isColumnGroup = false;

          const column = getDefaultColumn(type, {
            id: this.columnId,
            columnKey: this.columnKey,
            label: this.label,
            className: this.className,
            labelClassName: this.labelClassName,
            property: this.prop || this.property,
            type,
            renderCell: null,
            renderHeader: this.renderHeader,
            minWidth,
            width,
            isColumnGroup,
            context: this.context,
            align: this.align ? `is-${this.align}` : null,
            headerAlign: this.headerAlign ? `is-${this.headerAlign}` : this.align ? `is-${this.align}` : null,
            sortable: this.sortable === '' ? true : this.sortable,
            sortMethod: this.sortMethod,
            sortBy: this.sortBy,
            resizable: this.resizable,
            showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
            formatter: this.formatter,
            selectable: this.selectable,
            reserveSelection: this.reserveSelection,
            fixed: this.fixed === '' ? true : this.fixed,
            filterMethod: this.filterMethod,
            filters: this.filters,
            filterable: this.filters || this.filterMethod,
            filterMultiple: this.filterMultiple,
            filterOpened: false,
            filteredValue: this.filteredValue || [],
            filterPlacement: this.filterPlacement || '',
            index: this.index,
            sortOrders: this.sortOrders,
          });

          const source = forced[type] || {};
          Object.keys(source).forEach((prop) => {
            let value = source[prop];
            if (value !== undefined) {
              if (prop === 'renderHeader') {
                if (type === 'selection' && column[prop]) {
                  console.warn('[Element Warn][TableColumn]Selection column doesn\'t allow to set render-header function.');
                } else {
                  value = column[prop] || value;
                }
              }
              column[prop] = prop === 'className' ? `${column[prop]} ${value}` : value;
            }
          });

          // Deprecation warning for renderHeader property
          if (this.renderHeader) {
            console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
          }

          this.columnConfig = column;

          let renderCell = column.renderCell;
          const _self = this;

          if (type === 'expand') {
            owner.renderExpanded = function (h, data) {
              return _self.$scopedSlots.default ? _self.$scopedSlots.default(data) : _self.$slots.default;
            };

            column.renderCell = function (h, data) {
              return h(
                'div',
                { class: 'cell' },
                [renderCell(h, data, this._renderProxy)],
              );
            };

            return;
          }

          column.renderCell = function (h, data) {
            if (_self.$scopedSlots.default) {
              renderCell = function renderCell() {
                return _self.$scopedSlots.default(data);
              };
            }

            if (!renderCell) {
              renderCell = DEFAULT_RENDER_CELL;
            }

            return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
              'div',
              { class: 'cell el-tooltip', style: { width: `${(data.column.realWidth || data.column.width) - 1}px` } },
              [renderCell(h, data)],
            ) : h(
              'div',
              { class: 'cell' },
              [renderCell(h, data)],
            );
          };
        },
        destroyed: function destroyed() {
          if (!this.$parent) return;
          const parent = this.$parent;
          this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
        },


        watch: {
          label: function label(newVal) {
            if (this.columnConfig) {
              this.columnConfig.label = newVal;
            }
          },
          prop: function prop(newVal) {
            if (this.columnConfig) {
              this.columnConfig.property = newVal;
            }
          },
          property: function property(newVal) {
            if (this.columnConfig) {
              this.columnConfig.property = newVal;
            }
          },
          filters: function filters(newVal) {
            if (this.columnConfig) {
              this.columnConfig.filters = newVal;
            }
          },
          filterMultiple: function filterMultiple(newVal) {
            if (this.columnConfig) {
              this.columnConfig.filterMultiple = newVal;
            }
          },
          align: function align(newVal) {
            if (this.columnConfig) {
              this.columnConfig.align = newVal ? `is-${newVal}` : null;

              if (!this.headerAlign) {
                this.columnConfig.headerAlign = newVal ? `is-${newVal}` : null;
              }
            }
          },
          headerAlign: function headerAlign(newVal) {
            if (this.columnConfig) {
              this.columnConfig.headerAlign = `is-${newVal || this.align}`;
            }
          },
          width: function width(newVal) {
            if (this.columnConfig) {
              this.columnConfig.width = parseWidth(newVal);
              this.owner.store.scheduleLayout();
            }
          },
          minWidth: function minWidth(newVal) {
            if (this.columnConfig) {
              this.columnConfig.minWidth = parseMinWidth(newVal);
              this.owner.store.scheduleLayout();
            }
          },
          fixed: function fixed(newVal) {
            if (this.columnConfig) {
              this.columnConfig.fixed = newVal;
              this.owner.store.scheduleLayout(true);
            }
          },
          sortable: function sortable(newVal) {
            if (this.columnConfig) {
              this.columnConfig.sortable = newVal;
            }
          },
          index: function index(newVal) {
            if (this.columnConfig) {
              this.columnConfig.index = newVal;
            }
          },
          formatter: function formatter(newVal) {
            if (this.columnConfig) {
              this.columnConfig.formatter = newVal;
            }
          },
          className: function className(newVal) {
            if (this.columnConfig) {
              this.columnConfig.className = newVal;
            }
          },
          labelClassName: function labelClassName(newVal) {
            if (this.columnConfig) {
              this.columnConfig.labelClassName = newVal;
            }
          },
        },

        mounted: function mounted() {
          const owner = this.owner;
          const parent = this.columnOrTableParent;
          let columnIndex = void 0;

          if (!this.isSubColumn) {
            columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
          } else {
            columnIndex = [].indexOf.call(parent.$el.children, this.$el);
          }

          if (this.$scopedSlots.header) {
            if (this.type === 'selection') {
              console.warn('[Element Warn][TableColumn]Selection column doesn\'t allow to set scoped-slot header.');
            } else {
              this.columnConfig.renderHeader = this.$scopedSlots.header;
            }
          }

          owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
        },
      };
      /** */ }),

    /** */ 2:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/util');
      /** */ }),

    /** */ 25:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/tag');
      /** */ }),

    /** */ 9:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/merge');
      /** */ }),

    /** *** */ }));
