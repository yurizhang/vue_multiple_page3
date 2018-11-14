'use strict';

exports.__esModule = true;
/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
exports.default = {
  mounted: function mounted() {
    if (process.env.NODE_ENV === 'production') return;
    if (!this.$vnode) return;

    const _getMigratingConfig = this.getMigratingConfig();


    const _getMigratingConfig$p = _getMigratingConfig.props;


    const props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p;


    const _getMigratingConfig$e = _getMigratingConfig.events;


    const events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

    const _$vnode = this.$vnode;


    const data = _$vnode.data;


    const componentOptions = _$vnode.componentOptions;

    const definedProps = data.attrs || {};
    const definedEvents = componentOptions.listeners || {};

    for (const propName in definedProps) {
      if (definedProps.hasOwnProperty(propName) && props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`);
      }
    }

    for (const eventName in definedEvents) {
      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`);
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {},
        events: {},
      };
    },
  },
};
