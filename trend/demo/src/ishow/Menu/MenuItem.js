/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import MixinComponent from './MixinComponent';

export default class MenuItem extends MixinComponent {

  constructor(props) {
    super(props);

    this.instanceType = 'MenuItem';
  }

  componentDidMount() {
    this.rootMenu().state.menuItems[this.props.index] = this;
  }

  handleClick() {
    this.rootMenu().handleSelect(
      this.props.index,
      this.indexPath(),
      this
    );
  }

  active() {
    return this.props.index === this.rootMenu().state.activeIndex;
  }

  render(){
    return (
      <li
        style={this.style()}
        className={this.className("ishow-menu-item", {
          'is-active': this.active(),
          'is-disabled': this.props.disabled
        })}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.children}
      </li>
    )
  }
}

MenuItem.propTypes = {
  index: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
