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
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 247);
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

    /** */ 12:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/locale');
      /** */ }),

    /** */ 16:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/checkbox');
      /** */ }),

    /** */ 21:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/transitions/collapse-transition');
      /** */ }),

    /** */ 247:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _tree = __webpack_require__(248);

      const _tree2 = _interopRequireDefault(_tree);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /* istanbul ignore next */
      _tree2.default.install = function (Vue) {
        Vue.component(_tree2.default.name, _tree2.default);
      };

      exports.default = _tree2.default;
      /** */ }),

    /** */ 248:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(249);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a385d82e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(255);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a385d82e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 249:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _treeStore = __webpack_require__(250);

      const _treeStore2 = _interopRequireDefault(_treeStore);

      const _util = __webpack_require__(33);

      const _treeNode = __webpack_require__(252);

      const _treeNode2 = _interopRequireDefault(_treeNode);

      const _locale = __webpack_require__(12);

      const _emitter = __webpack_require__(1);

      const _emitter2 = _interopRequireDefault(_emitter);

      const _dom = __webpack_require__(3);

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

      exports.default = {
        name: 'ElTree',

        mixins: [_emitter2.default],

        components: {
          ElTreeNode: _treeNode2.default,
        },

        data: function data() {
          return {
            store: null,
            root: null,
            currentNode: null,
            treeItems: null,
            checkboxItems: [],
            dragState: {
              showDropIndicator: false,
              draggingNode: null,
              dropNode: null,
              allowDrop: true,
            },
          };
        },


        props: {
          data: {
            type: Array,
          },
          emptyText: {
            type: String,
            default: function _default() {
              return (0, _locale.t)('el.tree.emptyText');
            },
          },
          renderAfterExpand: {
            type: Boolean,
            default: true,
          },
          nodeKey: String,
          checkStrictly: Boolean,
          defaultExpandAll: Boolean,
          expandOnClickNode: {
            type: Boolean,
            default: true,
          },
          checkOnClickNode: Boolean,
          checkDescendants: {
            type: Boolean,
            default: false,
          },
          autoExpandParent: {
            type: Boolean,
            default: true,
          },
          defaultCheckedKeys: Array,
          defaultExpandedKeys: Array,
          renderContent: Function,
          showCheckbox: {
            type: Boolean,
            default: false,
          },
          draggable: {
            type: Boolean,
            default: false,
          },
          allowDrag: Function,
          allowDrop: Function,
          props: {
            default: function _default() {
              return {
                children: 'children',
                label: 'label',
                icon: 'icon',
                disabled: 'disabled',
              };
            },
          },
          lazy: {
            type: Boolean,
            default: false,
          },
          highlightCurrent: Boolean,
          load: Function,
          filterNodeMethod: Function,
          accordion: Boolean,
          indent: {
            type: Number,
            default: 18,
          },
        },

        computed: {
          children: {
            set: function set(value) {
              this.data = value;
            },
            get: function get() {
              return this.data;
            },
          },

          treeItemArray: function treeItemArray() {
            return Array.prototype.slice.call(this.treeItems);
          },
          isEmpty: function isEmpty() {
            const childNodes = this.root.childNodes;

            return !childNodes || childNodes.length === 0 || childNodes.every((_ref) => {
              const visible = _ref.visible;
              return !visible;
            });
          },
        },

        watch: {
          defaultCheckedKeys: function defaultCheckedKeys(newVal) {
            this.store.setDefaultCheckedKey(newVal);
          },
          defaultExpandedKeys: function defaultExpandedKeys(newVal) {
            this.store.defaultExpandedKeys = newVal;
            this.store.setDefaultExpandedKeys(newVal);
          },
          data: function data(newVal) {
            this.store.setData(newVal);
          },
          checkboxItems: function checkboxItems(val) {
            Array.prototype.forEach.call(val, (checkbox) => {
              checkbox.setAttribute('tabindex', -1);
            });
          },
          checkStrictly: function checkStrictly(newVal) {
            this.store.checkStrictly = newVal;
          },
        },

        methods: {
          filter: function filter(value) {
            if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
            this.store.filter(value);
          },
          getNodeKey: function getNodeKey(node) {
            return (0, _util.getNodeKey)(this.nodeKey, node.data);
          },
          getNodePath: function getNodePath(data) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
            const node = this.store.getNode(data);
            if (!node) return [];
            const path = [node.data];
            let parent = node.parent;
            while (parent && parent !== this.root) {
              path.push(parent.data);
              parent = parent.parent;
            }
            return path.reverse();
          },
          getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
            return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
          },
          getCheckedKeys: function getCheckedKeys(leafOnly) {
            return this.store.getCheckedKeys(leafOnly);
          },
          getCurrentNode: function getCurrentNode() {
            const currentNode = this.store.getCurrentNode();
            return currentNode ? currentNode.data : null;
          },
          getCurrentKey: function getCurrentKey() {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
            const currentNode = this.getCurrentNode();
            return currentNode ? currentNode[this.nodeKey] : null;
          },
          setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
            this.store.setCheckedNodes(nodes, leafOnly);
          },
          setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
            this.store.setCheckedKeys(keys, leafOnly);
          },
          setChecked: function setChecked(data, checked, deep) {
            this.store.setChecked(data, checked, deep);
          },
          getHalfCheckedNodes: function getHalfCheckedNodes() {
            return this.store.getHalfCheckedNodes();
          },
          getHalfCheckedKeys: function getHalfCheckedKeys() {
            return this.store.getHalfCheckedKeys();
          },
          setCurrentNode: function setCurrentNode(node) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
            this.store.setUserCurrentNode(node);
          },
          setCurrentKey: function setCurrentKey(key) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
            this.store.setCurrentNodeKey(key);
          },
          getNode: function getNode(data) {
            return this.store.getNode(data);
          },
          remove: function remove(data) {
            this.store.remove(data);
          },
          append: function append(data, parentNode) {
            this.store.append(data, parentNode);
          },
          insertBefore: function insertBefore(data, refNode) {
            this.store.insertBefore(data, refNode);
          },
          insertAfter: function insertAfter(data, refNode) {
            this.store.insertAfter(data, refNode);
          },
          handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
            this.broadcast('ElTreeNode', 'tree-node-expand', node);
            this.$emit('node-expand', nodeData, node, instance);
          },
          updateKeyChildren: function updateKeyChildren(key, data) {
            if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
            this.store.updateChildren(key, data);
          },
          initTabIndex: function initTabIndex() {
            this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
            this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
            const checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
            if (checkedItem.length) {
              checkedItem[0].setAttribute('tabindex', 0);
              return;
            }
            this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
          },
          handleKeydown: function handleKeydown(ev) {
            const currentItem = ev.target;
            if (currentItem.className.indexOf('el-tree-node') === -1) return;
            const keyCode = ev.keyCode;
            this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
            const currentIndex = this.treeItemArray.indexOf(currentItem);
            let nextIndex = void 0;
            if ([38, 40].indexOf(keyCode) > -1) {
              // up、down
              ev.preventDefault();
              if (keyCode === 38) {
                // up
                nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
              } else {
                nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
              }
              this.treeItemArray[nextIndex].focus(); // 选中
            }
            if ([37, 39].indexOf(keyCode) > -1) {
              // left、right 展开
              ev.preventDefault();
              currentItem.click(); // 选中
            }
            const hasInput = currentItem.querySelector('[type="checkbox"]');
            if ([13, 32].indexOf(keyCode) > -1 && hasInput) {
              // space enter选中checkbox
              ev.preventDefault();
              hasInput.click();
            }
          },
        },

        created: function created() {
          const _this = this;

          this.isTree = true;

          this.store = new _treeStore2.default({
            key: this.nodeKey,
            data: this.data,
            lazy: this.lazy,
            props: this.props,
            load: this.load,
            currentNodeKey: this.currentNodeKey,
            checkStrictly: this.checkStrictly,
            checkDescendants: this.checkDescendants,
            defaultCheckedKeys: this.defaultCheckedKeys,
            defaultExpandedKeys: this.defaultExpandedKeys,
            autoExpandParent: this.autoExpandParent,
            defaultExpandAll: this.defaultExpandAll,
            filterNodeMethod: this.filterNodeMethod,
          });

          this.root = this.store.root;

          const dragState = this.dragState;
          this.$on('tree-node-drag-start', (event, treeNode) => {
            if (typeof _this.allowDrag === 'function' && !_this.allowDrag(treeNode.node)) {
              event.preventDefault();
              return false;
            }
            event.dataTransfer.effectAllowed = 'move';

            // wrap in try catch to address IE's error when first param is 'text/plain'
            try {
              // setData is required for draggable to work in FireFox
              // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
              event.dataTransfer.setData('text/plain', '');
            } catch (e) {}
            dragState.draggingNode = treeNode;
            _this.$emit('node-drag-start', treeNode.node, event);
          });

          this.$on('tree-node-drag-over', (event, treeNode) => {
            const dropNode = (0, _util.findNearestComponent)(event.target, 'ElTreeNode');
            const oldDropNode = dragState.dropNode;
            if (oldDropNode && oldDropNode !== dropNode) {
              (0, _dom.removeClass)(oldDropNode.$el, 'is-drop-inner');
            }
            const draggingNode = dragState.draggingNode;
            if (!draggingNode || !dropNode) return;

            let dropPrev = true;
            let dropInner = true;
            let dropNext = true;
            let userAllowDropInner = true;
            if (typeof _this.allowDrop === 'function') {
              dropPrev = _this.allowDrop(draggingNode.node, dropNode.node, 'prev');
              userAllowDropInner = dropInner = _this.allowDrop(draggingNode.node, dropNode.node, 'inner');
              dropNext = _this.allowDrop(draggingNode.node, dropNode.node, 'next');
            }
            event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';
            if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
              if (oldDropNode) {
                _this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
              }
              _this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
            }

            if (dropPrev || dropInner || dropNext) {
              dragState.dropNode = dropNode;
            }

            if (dropNode.node.nextSibling === draggingNode.node) {
              dropNext = false;
            }
            if (dropNode.node.previousSibling === draggingNode.node) {
              dropPrev = false;
            }
            if (dropNode.node.contains(draggingNode.node, false)) {
              dropInner = false;
            }
            if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
              dropPrev = false;
              dropInner = false;
              dropNext = false;
            }

            const targetPosition = dropNode.$el.getBoundingClientRect();
            const treePosition = _this.$el.getBoundingClientRect();

            let dropType = void 0;
            const prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
            const nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;

            let indicatorTop = -9999;
            const distance = event.clientY - targetPosition.top;
            if (distance < targetPosition.height * prevPercent) {
              dropType = 'before';
            } else if (distance > targetPosition.height * nextPercent) {
              dropType = 'after';
            } else if (dropInner) {
              dropType = 'inner';
            } else {
              dropType = 'none';
            }

            const iconPosition = dropNode.$el.querySelector('.el-tree-node__expand-icon').getBoundingClientRect();
            const dropIndicator = _this.$refs.dropIndicator;
            if (dropType === 'before') {
              indicatorTop = iconPosition.top - treePosition.top;
            } else if (dropType === 'after') {
              indicatorTop = iconPosition.bottom - treePosition.top;
            }
            dropIndicator.style.top = `${indicatorTop}px`;
            dropIndicator.style.left = `${iconPosition.right - treePosition.left}px`;

            if (dropType === 'inner') {
              (0, _dom.addClass)(dropNode.$el, 'is-drop-inner');
            } else {
              (0, _dom.removeClass)(dropNode.$el, 'is-drop-inner');
            }

            dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
            dragState.allowDrop = dragState.showDropIndicator || userAllowDropInner;
            dragState.dropType = dropType;
            _this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
          });

          this.$on('tree-node-drag-end', (event) => {
            const draggingNode = dragState.draggingNode;


            const dropType = dragState.dropType;


            const dropNode = dragState.dropNode;

            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';

            if (draggingNode && dropNode) {
              const draggingNodeCopy = { data: draggingNode.node.data };
              if (dropType !== 'none') {
                draggingNode.node.remove();
              }
              if (dropType === 'before') {
                dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
              } else if (dropType === 'after') {
                dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
              } else if (dropType === 'inner') {
                dropNode.node.insertChild(draggingNodeCopy);
              }
              if (dropType !== 'none') {
                _this.store.registerNode(draggingNodeCopy);
              }

              (0, _dom.removeClass)(dropNode.$el, 'is-drop-inner');

              _this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);
              if (dropType !== 'none') {
                _this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
              }
            }
            if (draggingNode && !dropNode) {
              _this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
            }

            dragState.showDropIndicator = false;
            dragState.draggingNode = null;
            dragState.dropNode = null;
            dragState.allowDrop = true;
          });
        },
        mounted: function mounted() {
          this.initTabIndex();
          this.$el.addEventListener('keydown', this.handleKeydown);
        },
        updated: function updated() {
          this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
          this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
        },
      };
      /** */ }),

    /** */ 250:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _node = __webpack_require__(251);

      const _node2 = _interopRequireDefault(_node);

      const _util = __webpack_require__(33);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const TreeStore = (function () {
        function TreeStore(options) {
          const _this = this;

          _classCallCheck(this, TreeStore);

          this.currentNode = null;
          this.currentNodeKey = null;

          for (const option in options) {
            if (options.hasOwnProperty(option)) {
              this[option] = options[option];
            }
          }

          this.nodesMap = {};

          this.root = new _node2.default({
            data: this.data,
            store: this,
          });

          if (this.lazy && this.load) {
            const loadFn = this.load;
            loadFn(this.root, (data) => {
              _this.root.doCreateChildren(data);
              _this._initDefaultCheckedNodes();
            });
          } else {
            this._initDefaultCheckedNodes();
          }
        }

        TreeStore.prototype.filter = function filter(value) {
          const filterNodeMethod = this.filterNodeMethod;
          const lazy = this.lazy;
          const traverse = function traverse(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach((child) => {
              child.visible = filterNodeMethod.call(child, value, child.data, child);

              traverse(child);
            });

            if (!node.visible && childNodes.length) {
              let allHidden = true;

              childNodes.forEach((child) => {
                if (child.visible) allHidden = false;
              });

              if (node.root) {
                node.root.visible = allHidden === false;
              } else {
                node.visible = allHidden === false;
              }
            }
            if (!value) return;

            if (node.visible && !node.isLeaf && !lazy) node.expand();
          };

          traverse(this);
        };

        TreeStore.prototype.setData = function setData(newVal) {
          const instanceChanged = newVal !== this.root.data;
          if (instanceChanged) {
            this.root.setData(newVal);
            this._initDefaultCheckedNodes();
          } else {
            this.root.updateChildren();
          }
        };

        TreeStore.prototype.getNode = function getNode(data) {
          if (data instanceof _node2.default) return data;
          const key = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' ? data : (0, _util.getNodeKey)(this.key, data);
          return this.nodesMap[key] || null;
        };

        TreeStore.prototype.insertBefore = function insertBefore(data, refData) {
          const refNode = this.getNode(refData);
          refNode.parent.insertBefore({ data }, refNode);
        };

        TreeStore.prototype.insertAfter = function insertAfter(data, refData) {
          const refNode = this.getNode(refData);
          refNode.parent.insertAfter({ data }, refNode);
        };

        TreeStore.prototype.remove = function remove(data) {
          const node = this.getNode(data);
          if (node && node.parent) {
            node.parent.removeChild(node);
          }
        };

        TreeStore.prototype.append = function append(data, parentData) {
          const parentNode = parentData ? this.getNode(parentData) : this.root;

          if (parentNode) {
            parentNode.insertChild({ data });
          }
        };

        TreeStore.prototype._initDefaultCheckedNodes = function _initDefaultCheckedNodes() {
          const _this2 = this;

          const defaultCheckedKeys = this.defaultCheckedKeys || [];
          const nodesMap = this.nodesMap;

          defaultCheckedKeys.forEach((checkedKey) => {
            const node = nodesMap[checkedKey];

            if (node) {
              node.setChecked(true, !_this2.checkStrictly);
            }
          });
        };

        TreeStore.prototype._initDefaultCheckedNode = function _initDefaultCheckedNode(node) {
          const defaultCheckedKeys = this.defaultCheckedKeys || [];

          if (defaultCheckedKeys.indexOf(node.key) !== -1) {
            node.setChecked(true, !this.checkStrictly);
          }
        };

        TreeStore.prototype.setDefaultCheckedKey = function setDefaultCheckedKey(newVal) {
          if (newVal !== this.defaultCheckedKeys) {
            this.defaultCheckedKeys = newVal;
            this._initDefaultCheckedNodes();
          }
        };

        TreeStore.prototype.registerNode = function registerNode(node) {
          const key = this.key;
          if (!key || !node || !node.data) return;

          const nodeKey = node.key;
          if (nodeKey !== undefined) this.nodesMap[node.key] = node;
        };

        TreeStore.prototype.deregisterNode = function deregisterNode(node) {
          const _this3 = this;

          const key = this.key;
          if (!key || !node || !node.data) return;

          node.childNodes.forEach((child) => {
            _this3.deregisterNode(child);
          });

          delete this.nodesMap[node.key];
        };

        TreeStore.prototype.getCheckedNodes = function getCheckedNodes() {
          const leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          const includeHalfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          const checkedNodes = [];
          const traverse = function traverse(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach((child) => {
              if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
                checkedNodes.push(child.data);
              }

              traverse(child);
            });
          };

          traverse(this);

          return checkedNodes;
        };

        TreeStore.prototype.getCheckedKeys = function getCheckedKeys() {
          const _this4 = this;

          const leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          return this.getCheckedNodes(leafOnly).map(data => (data || {})[_this4.key]);
        };

        TreeStore.prototype.getHalfCheckedNodes = function getHalfCheckedNodes() {
          const nodes = [];
          const traverse = function traverse(node) {
            const childNodes = node.root ? node.root.childNodes : node.childNodes;

            childNodes.forEach((child) => {
              if (child.indeterminate) {
                nodes.push(child.data);
              }

              traverse(child);
            });
          };

          traverse(this);

          return nodes;
        };

        TreeStore.prototype.getHalfCheckedKeys = function getHalfCheckedKeys() {
          const _this5 = this;

          return this.getHalfCheckedNodes().map(data => (data || {})[_this5.key]);
        };

        TreeStore.prototype._getAllNodes = function _getAllNodes() {
          const allNodes = [];
          const nodesMap = this.nodesMap;
          for (const nodeKey in nodesMap) {
            if (nodesMap.hasOwnProperty(nodeKey)) {
              allNodes.push(nodesMap[nodeKey]);
            }
          }

          return allNodes;
        };

        TreeStore.prototype.updateChildren = function updateChildren(key, data) {
          const node = this.nodesMap[key];
          if (!node) return;
          const childNodes = node.childNodes;
          for (let i = childNodes.length - 1; i >= 0; i--) {
            const child = childNodes[i];
            this.remove(child.data);
          }
          for (let _i = 0, j = data.length; _i < j; _i++) {
            const _child = data[_i];
            this.append(_child, node.data);
          }
        };

        TreeStore.prototype._setCheckedKeys = function _setCheckedKeys(key) {
          const leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          const checkedKeys = arguments[2];

          const allNodes = this._getAllNodes().sort((a, b) => b.level - a.level);
          const cache = Object.create(null);
          const keys = Object.keys(checkedKeys);
          allNodes.forEach(node => node.setChecked(false, false));
          for (let i = 0, j = allNodes.length; i < j; i++) {
            var node = allNodes[i];
            const nodeKey = node.data[key].toString();
            const checked = keys.indexOf(nodeKey) > -1;
            if (!checked) {
              if (node.checked && !cache[nodeKey]) {
                node.setChecked(false, false);
              }
              continue;
            }

            let parent = node.parent;
            while (parent && parent.level > 0) {
              cache[parent.data[key]] = true;
              parent = parent.parent;
            }

            if (node.isLeaf || this.checkStrictly) {
              node.setChecked(true, false);
              continue;
            }
            node.setChecked(true, true);

            if (leafOnly) {
              (function () {
                node.setChecked(false, false);
                const traverse = function traverse(node) {
                  const childNodes = node.childNodes;
                  childNodes.forEach((child) => {
                    if (!child.isLeaf) {
                      child.setChecked(false, false);
                    }
                    traverse(child);
                  });
                };
                traverse(node);
              }());
            }
          }
        };

        TreeStore.prototype.setCheckedNodes = function setCheckedNodes(array) {
          const leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          const key = this.key;
          const checkedKeys = {};
          array.forEach((item) => {
            checkedKeys[(item || {})[key]] = true;
          });

          this._setCheckedKeys(key, leafOnly, checkedKeys);
        };

        TreeStore.prototype.setCheckedKeys = function setCheckedKeys(keys) {
          const leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          this.defaultCheckedKeys = keys;
          const key = this.key;
          const checkedKeys = {};
          keys.forEach((key) => {
            checkedKeys[key] = true;
          });

          this._setCheckedKeys(key, leafOnly, checkedKeys);
        };

        TreeStore.prototype.setDefaultExpandedKeys = function setDefaultExpandedKeys(keys) {
          const _this6 = this;

          keys = keys || [];
          this.defaultExpandedKeys = keys;

          keys.forEach((key) => {
            const node = _this6.getNode(key);
            if (node) node.expand(null, _this6.autoExpandParent);
          });
        };

        TreeStore.prototype.setChecked = function setChecked(data, checked, deep) {
          const node = this.getNode(data);

          if (node) {
            node.setChecked(!!checked, deep);
          }
        };

        TreeStore.prototype.getCurrentNode = function getCurrentNode() {
          return this.currentNode;
        };

        TreeStore.prototype.setCurrentNode = function setCurrentNode(node) {
          this.currentNode = node;
        };

        TreeStore.prototype.setUserCurrentNode = function setUserCurrentNode(node) {
          const key = node[this.key];
          const currNode = this.nodesMap[key];
          this.setCurrentNode(currNode);
        };

        TreeStore.prototype.setCurrentNodeKey = function setCurrentNodeKey(key) {
          if (key === null) {
            this.currentNode = null;
            return;
          }
          const node = this.getNode(key);
          if (node) {
            this.currentNode = node;
          }
        };

        return TreeStore;
      }());

      exports.default = TreeStore;
      /** */ }),

    /** */ 251:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      exports.getChildState = undefined;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      const _merge = __webpack_require__(9);

      const _merge2 = _interopRequireDefault(_merge);

      const _util = __webpack_require__(33);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const getChildState = exports.getChildState = function getChildState(node) {
        let all = true;
        let none = true;
        let allWithoutDisable = true;
        for (let i = 0, j = node.length; i < j; i++) {
          const n = node[i];
          if (n.checked !== true || n.indeterminate) {
            all = false;
            if (!n.disabled) {
              allWithoutDisable = false;
            }
          }
          if (n.checked !== false || n.indeterminate) {
            none = false;
          }
        }

        return {
          all, none, allWithoutDisable, half: !all && !none,
        };
      };

      const reInitChecked = function reInitChecked(node) {
        if (node.childNodes.length === 0) return;

        const _getChildState = getChildState(node.childNodes);


        const all = _getChildState.all;


        const none = _getChildState.none;


        const half = _getChildState.half;

        if (all) {
          node.checked = true;
          node.indeterminate = false;
        } else if (half) {
          node.checked = false;
          node.indeterminate = true;
        } else if (none) {
          node.checked = false;
          node.indeterminate = false;
        }

        const parent = node.parent;
        if (!parent || parent.level === 0) return;

        if (!node.store.checkStrictly) {
          reInitChecked(parent);
        }
      };

      const getPropertyFromData = function getPropertyFromData(node, prop) {
        const props = node.store.props;
        const data = node.data || {};
        const config = props[prop];

        if (typeof config === 'function') {
          return config(data, node);
        } if (typeof config === 'string') {
          return data[config];
        } if (typeof config === 'undefined') {
          const dataProp = data[prop];
          return dataProp === undefined ? '' : dataProp;
        }
      };

      let nodeIdSeed = 0;

      const Node = (function () {
        function Node(options) {
          _classCallCheck(this, Node);

          this.id = nodeIdSeed++;
          this.text = null;
          this.checked = false;
          this.indeterminate = false;
          this.data = null;
          this.expanded = false;
          this.parent = null;
          this.visible = true;

          for (const name in options) {
            if (options.hasOwnProperty(name)) {
              this[name] = options[name];
            }
          }

          // internal
          this.level = 0;
          this.loaded = false;
          this.childNodes = [];
          this.loading = false;

          if (this.parent) {
            this.level = this.parent.level + 1;
          }

          const store = this.store;
          if (!store) {
            throw new Error('[Node]store is required!');
          }
          store.registerNode(this);

          const props = store.props;
          if (props && typeof props.isLeaf !== 'undefined') {
            const isLeaf = getPropertyFromData(this, 'isLeaf');
            if (typeof isLeaf === 'boolean') {
              this.isLeafByUser = isLeaf;
            }
          }

          if (store.lazy !== true && this.data) {
            this.setData(this.data);

            if (store.defaultExpandAll) {
              this.expanded = true;
            }
          } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
            this.expand();
          }
          if (!Array.isArray(this.data)) {
            (0, _util.markNodeData)(this, this.data);
          }
          if (!this.data) return;
          const defaultExpandedKeys = store.defaultExpandedKeys;
          const key = store.key;
          if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
            this.expand(null, store.autoExpandParent);
          }

          if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
            store.currentNode = this;
          }

          if (store.lazy) {
            store._initDefaultCheckedNode(this);
          }

          this.updateLeafState();
        }

        Node.prototype.setData = function setData(data) {
          if (!Array.isArray(data)) {
            (0, _util.markNodeData)(this, data);
          }

          this.data = data;
          this.childNodes = [];

          let children = void 0;
          if (this.level === 0 && this.data instanceof Array) {
            children = this.data;
          } else {
            children = getPropertyFromData(this, 'children') || [];
          }

          for (let i = 0, j = children.length; i < j; i++) {
            this.insertChild({ data: children[i] });
          }
        };

        Node.prototype.contains = function contains(target) {
          const deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          const walk = function walk(parent) {
            const children = parent.childNodes || [];
            let result = false;
            for (let i = 0, j = children.length; i < j; i++) {
              const child = children[i];
              if (child === target || deep && walk(child)) {
                result = true;
                break;
              }
            }
            return result;
          };

          return walk(this);
        };

        Node.prototype.remove = function remove() {
          const parent = this.parent;
          if (parent) {
            parent.removeChild(this);
          }
        };

        Node.prototype.insertChild = function insertChild(child, index, batch) {
          if (!child) throw new Error('insertChild error: child is required.');

          if (!(child instanceof Node)) {
            if (!batch) {
              const children = this.getChildren(true);
              if (children.indexOf(child.data) === -1) {
                if (typeof index === 'undefined' || index < 0) {
                  children.push(child.data);
                } else {
                  children.splice(index, 0, child.data);
                }
              }
            }
            (0, _merge2.default)(child, {
              parent: this,
              store: this.store,
            });
            child = new Node(child);
          }

          child.level = this.level + 1;

          if (typeof index === 'undefined' || index < 0) {
            this.childNodes.push(child);
          } else {
            this.childNodes.splice(index, 0, child);
          }

          this.updateLeafState();
        };

        Node.prototype.insertBefore = function insertBefore(child, ref) {
          let index = void 0;
          if (ref) {
            index = this.childNodes.indexOf(ref);
          }
          this.insertChild(child, index);
        };

        Node.prototype.insertAfter = function insertAfter(child, ref) {
          let index = void 0;
          if (ref) {
            index = this.childNodes.indexOf(ref);
            if (index !== -1) index += 1;
          }
          this.insertChild(child, index);
        };

        Node.prototype.removeChild = function removeChild(child) {
          const children = this.getChildren() || [];
          const dataIndex = children.indexOf(child.data);
          if (dataIndex > -1) {
            children.splice(dataIndex, 1);
          }

          const index = this.childNodes.indexOf(child);

          if (index > -1) {
            this.store && this.store.deregisterNode(child);
            child.parent = null;
            this.childNodes.splice(index, 1);
          }

          this.updateLeafState();
        };

        Node.prototype.removeChildByData = function removeChildByData(data) {
          let targetNode = null;

          for (let i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].data === data) {
              targetNode = this.childNodes[i];
              break;
            }
          }

          if (targetNode) {
            this.removeChild(targetNode);
          }
        };

        Node.prototype.expand = function expand(callback, expandParent) {
          const _this = this;

          const done = function done() {
            if (expandParent) {
              let parent = _this.parent;
              while (parent.level > 0) {
                parent.expanded = true;
                parent = parent.parent;
              }
            }
            _this.expanded = true;
            if (callback) callback();
          };

          if (this.shouldLoadData()) {
            this.loadData((data) => {
              if (data instanceof Array) {
                if (_this.checked) {
                  _this.setChecked(true, true);
                } else if (!_this.store.checkStrictly) {
                  reInitChecked(_this);
                }
                done();
              }
            });
          } else {
            done();
          }
        };

        Node.prototype.doCreateChildren = function doCreateChildren(array) {
          const _this2 = this;

          const defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          array.forEach((item) => {
            _this2.insertChild((0, _merge2.default)({ data: item }, defaultProps), undefined, true);
          });
        };

        Node.prototype.collapse = function collapse() {
          this.expanded = false;
        };

        Node.prototype.shouldLoadData = function shouldLoadData() {
          return this.store.lazy === true && this.store.load && !this.loaded;
        };

        Node.prototype.updateLeafState = function updateLeafState() {
          if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
            this.isLeaf = this.isLeafByUser;
            return;
          }
          const childNodes = this.childNodes;
          if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
            this.isLeaf = !childNodes || childNodes.length === 0;
            return;
          }
          this.isLeaf = false;
        };

        Node.prototype.setChecked = function setChecked(value, deep, recursion, passValue) {
          const _this3 = this;

          this.indeterminate = value === 'half';
          this.checked = value === true;

          if (this.store.checkStrictly) return;

          if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
            const _ret = (function () {
              const _getChildState2 = getChildState(_this3.childNodes);


              const all = _getChildState2.all;


              const allWithoutDisable = _getChildState2.allWithoutDisable;

              if (!_this3.isLeaf && !all && allWithoutDisable) {
                _this3.checked = false;
                value = false;
              }

              const handleDescendants = function handleDescendants() {
                if (deep) {
                  const childNodes = _this3.childNodes;
                  for (let i = 0, j = childNodes.length; i < j; i++) {
                    const child = childNodes[i];
                    passValue = passValue || value !== false;
                    const isCheck = child.disabled ? child.checked : passValue;
                    child.setChecked(isCheck, deep, true, passValue);
                  }

                  const _getChildState3 = getChildState(childNodes);


                  const half = _getChildState3.half;


                  const _all = _getChildState3.all;

                  if (!_all) {
                    _this3.checked = _all;
                    _this3.indeterminate = half;
                  }
                }
              };

              if (_this3.shouldLoadData()) {
                // Only work on lazy load data.
                _this3.loadData(() => {
                  handleDescendants();
                  reInitChecked(_this3);
                }, {
                  checked: value !== false,
                });
                return {
                  v: void 0,
                };
              }
              handleDescendants();
            }());

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object') return _ret.v;
          }

          const parent = this.parent;
          if (!parent || parent.level === 0) return;

          if (!recursion) {
            reInitChecked(parent);
          }
        };

        Node.prototype.getChildren = function getChildren() {
          const forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          // this is data
          if (this.level === 0) return this.data;
          const data = this.data;
          if (!data) return null;

          const props = this.store.props;
          let children = 'children';
          if (props) {
            children = props.children || 'children';
          }

          if (data[children] === undefined) {
            data[children] = null;
          }

          if (forceInit && !data[children]) {
            data[children] = [];
          }

          return data[children];
        };

        Node.prototype.updateChildren = function updateChildren() {
          const _this4 = this;

          const newData = this.getChildren() || [];
          const oldData = this.childNodes.map(node => node.data);

          const newDataMap = {};
          const newNodes = [];

          newData.forEach((item, index) => {
            if (item[_util.NODE_KEY]) {
              newDataMap[item[_util.NODE_KEY]] = { index, data: item };
            } else {
              newNodes.push({ index, data: item });
            }
          });

          if (!this.store.lazy) {
            oldData.forEach((item) => {
              if (!newDataMap[item[_util.NODE_KEY]]) _this4.removeChildByData(item);
            });
          }

          newNodes.forEach((_ref) => {
            const index = _ref.index;


            const data = _ref.data;

            _this4.insertChild({ data }, index);
          });

          this.updateLeafState();
        };

        Node.prototype.loadData = function loadData(callback) {
          const _this5 = this;

          const defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
            this.loading = true;

            const resolve = function resolve(children) {
              _this5.loaded = true;
              _this5.loading = false;
              _this5.childNodes = [];

              _this5.doCreateChildren(children, defaultProps);

              _this5.updateLeafState();
              if (callback) {
                callback.call(_this5, children);
              }
            };

            this.store.load(this, resolve);
          } else if (callback) {
            callback.call(this);
          }
        };

        _createClass(Node, [{
          key: 'label',
          get: function get() {
            return getPropertyFromData(this, 'label');
          },
        }, {
          key: 'icon',
          get: function get() {
            return getPropertyFromData(this, 'icon');
          },
        }, {
          key: 'key',
          get: function get() {
            const nodeKey = this.store.key;
            if (this.data) return this.data[nodeKey];
            return null;
          },
        }, {
          key: 'disabled',
          get: function get() {
            return getPropertyFromData(this, 'disabled');
          },
        }, {
          key: 'nextSibling',
          get: function get() {
            const parent = this.parent;
            if (parent) {
              const index = parent.childNodes.indexOf(this);
              if (index > -1) {
                return parent.childNodes[index + 1];
              }
            }
            return null;
          },
        }, {
          key: 'previousSibling',
          get: function get() {
            const parent = this.parent;
            if (parent) {
              const index = parent.childNodes.indexOf(this);
              if (index > -1) {
                return index > 0 ? parent.childNodes[index - 1] : null;
              }
            }
            return null;
          },
        }]);

        return Node;
      }());

      exports.default = Node;
      /** */ }),

    /** */ 252:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue__ = __webpack_require__(253);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue__);
      /* harmony import */ const __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c66447d4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_node_vue__ = __webpack_require__(254);
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
        __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default.a,
        __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c66447d4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_node_vue__.a,
        __vue_template_functional__,
        __vue_styles__,
        __vue_scopeId__,
        __vue_module_identifier__,
      );

      /* harmony default export */ __webpack_exports__.default = (Component.exports);
      /** */ }),

    /** */ 253:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;

      const _collapseTransition = __webpack_require__(21);

      const _collapseTransition2 = _interopRequireDefault(_collapseTransition);

      const _checkbox = __webpack_require__(16);

      const _checkbox2 = _interopRequireDefault(_checkbox);

      const _emitter = __webpack_require__(1);

      const _emitter2 = _interopRequireDefault(_emitter);

      const _util = __webpack_require__(33);

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
      //
      //
      //
      //
      //
      //
      //
      //
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
        name: 'ElTreeNode',

        componentName: 'ElTreeNode',

        mixins: [_emitter2.default],

        props: {
          node: {
            default: function _default() {
              return {};
            },
          },
          props: {},
          renderContent: Function,
          renderAfterExpand: {
            type: Boolean,
            default: true,
          },
        },

        components: {
          ElCollapseTransition: _collapseTransition2.default,
          ElCheckbox: _checkbox2.default,
          NodeContent: {
            props: {
              node: {
                required: true,
              },
            },
            render: function render(h) {
              const parent = this.$parent;
              const tree = parent.tree;
              const node = this.node;
              const data = node.data;


              const store = node.store;

              return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, {
                _self: tree.$vnode.context, node, data, store,
              }) : tree.$scopedSlots.default ? tree.$scopedSlots.default({ node, data }) : h(
                'span',
                { class: 'el-tree-node__label' },
                [node.label],
              );
            },
          },
        },

        data: function data() {
          return {
            tree: null,
            expanded: false,
            childNodeRendered: false,
            showCheckbox: false,
            oldChecked: null,
            oldIndeterminate: null,
          };
        },


        watch: {
          'node.indeterminate': function nodeIndeterminate(val) {
            this.handleSelectChange(this.node.checked, val);
          },
          'node.checked': function nodeChecked(val) {
            this.handleSelectChange(val, this.node.indeterminate);
          },
          'node.expanded': function nodeExpanded(val) {
            const _this = this;

            this.$nextTick(() => _this.expanded = val);
            if (val) {
              this.childNodeRendered = true;
            }
          },
        },

        methods: {
          getNodeKey: function getNodeKey(node) {
            return (0, _util.getNodeKey)(this.tree.nodeKey, node.data);
          },
          handleSelectChange: function handleSelectChange(checked, indeterminate) {
            if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
              this.tree.$emit('check-change', this.node.data, checked, indeterminate);
            }
            this.oldChecked = checked;
            this.indeterminate = indeterminate;
          },
          handleClick: function handleClick() {
            const store = this.tree.store;
            store.setCurrentNode(this.node);
            this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
            this.tree.currentNode = this;
            if (this.tree.expandOnClickNode) {
              this.handleExpandIconClick();
            }
            if (this.tree.checkOnClickNode && !this.node.disabled) {
              this.handleCheckChange(null, {
                target: { checked: !this.node.checked },
              });
            }
            this.tree.$emit('node-click', this.node.data, this.node, this);
          },
          handleContextMenu: function handleContextMenu(event) {
            if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
              event.stopPropagation();
              event.preventDefault();
            }
            this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
          },
          handleExpandIconClick: function handleExpandIconClick() {
            if (this.node.isLeaf) return;
            if (this.expanded) {
              this.tree.$emit('node-collapse', this.node.data, this.node, this);
              this.node.collapse();
            } else {
              this.node.expand();
              this.$emit('node-expand', this.node.data, this.node, this);
            }
          },
          handleCheckChange: function handleCheckChange(value, ev) {
            const _this2 = this;

            this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
            this.$nextTick(() => {
              const store = _this2.tree.store;
              _this2.tree.$emit('check', _this2.node.data, {
                checkedNodes: store.getCheckedNodes(),
                checkedKeys: store.getCheckedKeys(),
                halfCheckedNodes: store.getHalfCheckedNodes(),
                halfCheckedKeys: store.getHalfCheckedKeys(),
              });
            });
          },
          handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
            this.broadcast('ElTreeNode', 'tree-node-expand', node);
            this.tree.$emit('node-expand', nodeData, node, instance);
          },
          handleDragStart: function handleDragStart(event) {
            if (!this.tree.draggable) return;
            this.tree.$emit('tree-node-drag-start', event, this);
          },
          handleDragOver: function handleDragOver(event) {
            if (!this.tree.draggable) return;
            this.tree.$emit('tree-node-drag-over', event, this);
            event.preventDefault();
          },
          handleDrop: function handleDrop(event) {
            event.preventDefault();
          },
          handleDragEnd: function handleDragEnd(event) {
            if (!this.tree.draggable) return;
            this.tree.$emit('tree-node-drag-end', event, this);
          },
        },

        created: function created() {
          const _this3 = this;

          const parent = this.$parent;

          if (parent.isTree) {
            this.tree = parent;
          } else {
            this.tree = parent.tree;
          }

          const tree = this.tree;
          if (!tree) {
            console.warn('Can not find node\'s tree.');
          }

          const props = tree.props || {};
          const childrenKey = props.children || 'children';

          this.$watch(`node.data.${childrenKey}`, () => {
            _this3.node.updateChildren();
          });

          this.showCheckbox = tree.showCheckbox;

          if (this.node.expanded) {
            this.expanded = true;
            this.childNodeRendered = true;
          }

          if (this.tree.accordion) {
            this.$on('tree-node-expand', (node) => {
              if (_this3.node !== node) {
                _this3.node.collapse();
              }
            });
          }
        },
      };
      /** */ }),

    /** */ 254:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const this$1 = this;
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.node.visible), expression: 'node.visible',
          }],
          ref: 'node',
          staticClass: 'el-tree-node',
          class: {
            'is-expanded': _vm.expanded,
            'is-current': _vm.tree.store.currentNode === _vm.node,
            'is-hidden': !_vm.node.visible,
            'is-focusable': !_vm.node.disabled,
            'is-checked': !_vm.node.disabled && _vm.node.checked,
          },
          attrs: {
            role: 'treeitem', tabindex: '-1', 'aria-expanded': _vm.expanded, 'aria-disabled': _vm.node.disabled, 'aria-checked': _vm.node.checked, draggable: _vm.tree.draggable,
          },
          on: {
            click($event) { $event.stopPropagation(); _vm.handleClick($event); }, contextmenu($event) { return this$1.handleContextMenu($event); }, dragstart($event) { $event.stopPropagation(); _vm.handleDragStart($event); }, dragover($event) { $event.stopPropagation(); _vm.handleDragOver($event); }, dragend($event) { $event.stopPropagation(); _vm.handleDragEnd($event); }, drop($event) { $event.stopPropagation(); _vm.handleDrop($event); },
          },
        }, [_c('div', { staticClass: 'el-tree-node__content', style: ({ 'padding-left': `${(_vm.node.level - 1) * _vm.tree.indent}px` }) }, [_c('span', { staticClass: 'el-tree-node__expand-icon el-icon-caret-right', class: { 'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded }, on: { click($event) { $event.stopPropagation(); _vm.handleExpandIconClick($event); } } }), (_vm.showCheckbox)?_c('el-checkbox', {
          attrs: { indeterminate: _vm.node.indeterminate, disabled: !!_vm.node.disabled }, on: { change: _vm.handleCheckChange }, nativeOn: { click($event) { $event.stopPropagation(); } }, model: { value: (_vm.node.checked), callback($$v) { _vm.$set(_vm.node, 'checked', $$v); }, expression: 'node.checked' },
        }):_vm._e(), (_vm.node.loading)?_c('span', { staticClass: 'el-tree-node__loading-icon el-icon-loading' }):_vm._e(), _c('node-content', { attrs: { node: _vm.node } })], 1), _c('el-collapse-transition', [(!_vm.renderAfterExpand || _vm.childNodeRendered)?_c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.expanded), expression: 'expanded',
          }],
          staticClass: 'el-tree-node__children',
          attrs: { role: 'group', 'aria-expanded': _vm.expanded },
        }, _vm._l((_vm.node.childNodes), child => _c('el-tree-node', { key: _vm.getNodeKey(child), attrs: { 'render-content': _vm.renderContent, 'render-after-expand': _vm.renderAfterExpand, node: child }, on: { 'node-expand': _vm.handleChildNodeExpand } }))):_vm._e()])], 1);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 255:
    /** */ (function (module, __webpack_exports__, __webpack_require__) {
      'use strict';

      const render = function () {
        const _vm=this; const _h=_vm.$createElement; const _c=_vm._self._c||_h; return _c('div', {
          staticClass: 'el-tree',
          class: {
            'el-tree--highlight-current': _vm.highlightCurrent,
            'is-dragging': !!_vm.dragState.draggingNode,
            'is-drop-not-allow': !_vm.dragState.allowDrop,
            'is-drop-inner': _vm.dragState.dropType === 'inner',
          },
          attrs: { role: 'tree' },
        }, [_vm._l((_vm.root.childNodes), child => _c('el-tree-node', {
          key: _vm.getNodeKey(child),
          attrs: {
            node: child, props: _vm.props, 'render-after-expand': _vm.renderAfterExpand, 'render-content': _vm.renderContent,
          },
          on: { 'node-expand': _vm.handleNodeExpand },
        })), (_vm.isEmpty)?_c('div', { staticClass: 'el-tree__empty-block' }, [_c('span', { staticClass: 'el-tree__empty-text' }, [_vm._v(_vm._s(_vm.emptyText))])]):_vm._e(), _c('div', {
          directives: [{
            name: 'show', rawName: 'v-show', value: (_vm.dragState.showDropIndicator), expression: 'dragState.showDropIndicator',
          }],
          ref: 'dropIndicator',
          staticClass: 'el-tree__drop-indicator',
        })], 2);
      };
      const staticRenderFns = [];
      const esExports = { render, staticRenderFns };
      /* harmony default export */ __webpack_exports__.a = (esExports);
      /** */ }),

    /** */ 3:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/dom');
      /** */ }),

    /** */ 33:
    /** */ (function (module, exports, __webpack_require__) {
      'use strict';


      exports.__esModule = true;
      const NODE_KEY = exports.NODE_KEY = '$treeNodeId';

      const markNodeData = exports.markNodeData = function markNodeData(node, data) {
        if (!data || data[NODE_KEY]) return;
        Object.defineProperty(data, NODE_KEY, {
          value: node.id,
          enumerable: false,
          configurable: false,
          writable: false,
        });
      };

      const getNodeKey = exports.getNodeKey = function getNodeKey(key, data) {
        if (!key) return data[NODE_KEY];
        return data[key];
      };

      const findNearestComponent = exports.findNearestComponent = function findNearestComponent(element, componentName) {
        let target = element;
        while (target && target.tagName !== 'BODY') {
          if (target.__vue__ && target.__vue__.$options.name === componentName) {
            return target.__vue__;
          }
          target = target.parentNode;
        }
        return null;
      };
      /** */ }),

    /** */ 9:
    /** */ (function (module, exports) {
      module.exports = require('element-ui/lib/utils/merge');
      /** */ }),

    /** *** */ }));
