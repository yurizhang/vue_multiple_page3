/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js'; //提供style, classname方法
import '../Common/css/Menu.css';
import '../Common/css/Icon.css';
export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.instanceType = 'Menu';

    this.state = {
      activeIndex: props.defaultActive,
      openedMenus: props.defaultOpeneds ? props.defaultOpeneds.slice(0) : [],
      menuItems: {},
      submenus: {}
    }
  }

  getChildContext() {
    return {
      component: this
    };
  }

  componentDidMount() {
    this.openActiveItemMenus();
  }

  componentWillReceiveProps(props) {
    if (props.defaultActive !== this.props.defaultActive || props.defaultActive !== this.state.activeIndex) {
      this.defaultActiveChanged(props.defaultActive);
    }

    if (props.defaultOpeneds !== this.props.defaultOpeneds) {
      this.defaultOpenedsChanged(props.defaultOpeneds);
    }
  }

  openMenu(index, indexPath) {
    let { openedMenus } = this.state;

    if (openedMenus.indexOf(index) !== -1) return;
    // 将不在该菜单路径下的其余菜单收起
    if (this.props.uniqueOpened) {
      openedMenus = openedMenus.filter(index => {
        return indexPath.indexOf(index) !== -1;
      });
    }

    openedMenus.push(index);

    this.setState({ openedMenus });
  }

  closeMenu(index) {
    let { openedMenus } = this.state;

    openedMenus.splice(openedMenus.indexOf(index), 1);

    this.setState({ openedMenus });
  }

  handleSubmenuClick(index, indexPath) {
    let isOpened = this.state.openedMenus.indexOf(index) !== -1;

    if (isOpened) {
      this.closeMenu(index);

      if (this.props.onClose) {
        this.props.onClose(index, indexPath);
      }
    } else {
      this.openMenu(index, indexPath);

      if (this.props.onOpen) {
        this.props.onOpen(index, indexPath);
      }
    }
  }

  handleSelect(index, indexPath, instance) {
    let { activeIndex, openedMenus, submenus } = this.state;

    activeIndex = index;

    if (this.props.onSelect) {
      this.props.onSelect(index, indexPath, instance);
    }

    if (this.props.mode === 'horizontal') {
      for (const key in submenus) {
        submenus[key].onItemSelect(index, indexPath);
      }

      openedMenus = [];
    }

    this.setState({ activeIndex, openedMenus }, () => {
      if (this.props.mode === 'vertical') {
        this.openActiveItemMenus();
      }
    });
  }

  openActiveItemMenus() {
    let { activeIndex, menuItems, submenus } = this.state;

    if (!menuItems[activeIndex]) return;
    if (activeIndex && this.props.mode === 'vertical') {
      let indexPath = menuItems[activeIndex].indexPath();
      // 展开该菜单项的路径上所有子菜单
      indexPath.forEach(index => {
        const submenu = submenus[index];

        submenu && this.openMenu(index, submenu.indexPath());
      });
    }
  }

  defaultActiveChanged(value) {
    const { menuItems } = this.state;

    this.setState({ activeIndex: value }, () => {
      if (!menuItems[value]) return;

      let menuItem = menuItems[value];
      let indexPath = menuItem.indexPath();

      this.handleSelect(value, indexPath, menuItem);
    });
  }

  defaultOpenedsChanged(value) {
    this.setState({
      openedMenus: value
    });
  }

  render(){
    return (
      <ul
        style={this.style()}
        className={this.className("ishow-menu", {
          'ishow-menu--horizontal': this.props.mode === 'horizontal',
          'ishow-menu--dark': this.props.theme === 'dark'
        })}
      >
        {this.props.children}
      </ul>
    )
  }
}

Menu.childContextTypes = {
  component: PropTypes.any
};

Menu.propTypes = {
  mode: PropTypes.string,
  defaultActive: PropTypes.string,
  defaultOpeneds: PropTypes.arrayOf(PropTypes.any),
  theme: PropTypes.string,
  uniqueOpened: PropTypes.bool,
  menuTrigger: PropTypes.string,
  onSelect: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

Menu.defaultProps = {
  mode: 'vertical',
  theme: 'light',
  menuTrigger: 'hover'
}
