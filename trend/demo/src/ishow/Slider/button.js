/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js'; 

import Tooltip from '../Tooltip';

export default class SliderButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
      dragging: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0
    }
  }

  parent() {
    return this.context.component;
  }

  handleMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hovering: false
    });
  }

  onButtonDown(event) {
    if (this.disabled()) return;

    this.onDragStart(event);

    window.addEventListener('mousemove', this.onDragging.bind(this));
    window.addEventListener('mouseup', this.onDragEnd.bind(this));
    window.addEventListener('contextmenu', this.onDragEnd.bind(this));
  }

  onDragStart(event) {
    this.setState({
      dragging: true,
      startX: event.clientX,
      startY: event.clientY,
      startPosition: parseInt(this.currentPosition(), 10)
    });
  }

  onDragging(event) {
    if (this.state.dragging) {
      // eslint-disable-next-line
      this.state.currentX = event.clientX;
      // eslint-disable-next-line
      this.state.currentY = event.clientY;

      let diff;

      if (this.props.vertical) {
        diff = (this.state.startY - this.state.currentY) / this.parent().sliderSize() * 100;
      } else {
        diff = (this.state.currentX - this.state.startX) / this.parent().sliderSize() * 100;
      }
// eslint-disable-next-line
      this.state.newPosition = this.state.startPosition + diff;

      this.setPosition(this.state.newPosition);
      this.forceUpdate();
    }
  }

  onDragEnd() {
    if (this.state.dragging) {
      /*
       * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
       * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
       */
      setTimeout(() => {
        this.setState({
          dragging: false
        }, () => {
          this.setPosition(this.state.newPosition);
        });
      }, 0);

      window.removeEventListener('mousemove', this.onDragging.bind(this));
      window.removeEventListener('mouseup', this.onDragEnd.bind(this));
      window.removeEventListener('contextmenu', this.onDragEnd.bind(this));
    }
  }

  setPosition(newPosition) {
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 100) {
      newPosition = 100;
    }

    const lengthPerStep = 100 / ((this.max() - this.min()) / this.step());
    const steps = Math.round(newPosition / lengthPerStep);
    const value = steps * lengthPerStep * (this.max() - this.min()) * 0.01 + this.min();

    this.props.onChange(parseFloat(value.toFixed(this.precision())));
  }

  /* Computed Methods */

  formatValue() {
    const { formatTooltip } = this.parent().props;

    if (formatTooltip instanceof Function) {
      return formatTooltip(this.props.value);
    }

    return this.props.value;
  }

  disabled() {
    return this.parent().props.disabled;
  }

  max() {
    return this.parent().props.max;
  }

  min() {
    return this.parent().props.min;
  }

  step() {
    return this.parent().props.step;
  }

  precision() {
    return this.parent().state.precision;
  }

  currentPosition() {
    return `${ (this.props.value - this.min()) / (this.max() - this.min()) * 100 }%`;
  }

  wrapperStyle() {
    return this.props.vertical ? { bottom: this.currentPosition() } : { left: this.currentPosition() };
  }

  render(){
    const { hovering, dragging } = this.state;

    return (
      <div
        ref="button"
        className={this.classNames('el-slider__button-wrapper', {
          'hover': hovering,
          'dragging': dragging
        })}
        style={this.wrapperStyle()}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onMouseDown={this.onButtonDown.bind(this)}>
        <Tooltip ref="tooltip" placement="top" content={<span>{this.formatValue()}</span>} disabled={!this.parent().props.showTooltip}>
          <div className={this.classNames('el-slider__button', {
            'hover': this.state.hovering,
            'dragging': this.state.dragging
          })}></div>
        </Tooltip>
      </div>
    )
  }
}

SliderButton.contextTypes = {
  component: PropTypes.any
};

SliderButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  vertical: PropTypes.bool
};

SliderButton.defaultProps = {
  value:0
}
