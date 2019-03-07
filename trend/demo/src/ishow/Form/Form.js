import React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js'; //提供style, classname方法
import '../Common/css/Form.css'

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: []
    }
  }

  getChildContext(){
    return {
      component: this
    };
  }

  addField(field) {
    this.state.fields.push(field);
  }

  removeField(field) {
    if (field.props.prop) {
      this.state.fields.splice(this.state.fields.indexOf(field), 1);
    }
  }

  resetFields() {
    this.state.fields.forEach(field => {
      field.resetField();
    });
  }

  validate(callback) {
    let valid = true;
    let count = 0;

    // 如果需要验证的fields为空，调用验证时立刻返回callback
    if (this.state.fields.length === 0 && callback) {
      callback(true);
    }

    this.state.fields.forEach(field => {
      field.validate('', errors => {
        if (errors) {
          valid = false;
        }
        if (typeof callback === 'function' && ++count === this.state.fields.length) {
          callback(valid);
        }
      });
    });
  }

  validateField(prop, cb) {
    const field = this.state.fields.filter(field => field.props.prop === prop)[0];

    if (!field) { throw new Error('must call validateField with valid prop string!'); }

    field.validate('', cb);
  }

  render(){
    return (
      <form style={this.style()} className={this.className('ishow-form', this.props.labelPosition && `ishow-form--labishow-${this.props.labelPosition}`, {
        'ishow-form--inline': this.props.inline
      })} onSubmit={this.props.onSubmit}>{this.props.children}</form>
    )
  }
}

Form.childContextTypes = {
  component: PropTypes.any
};

Form.propTypes = {
  model: PropTypes.object,
  rules: PropTypes.object,
  labelPosition: PropTypes.oneOf(['right', 'left', 'top']),
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelSuffix: PropTypes.string,
  inline: PropTypes.bool,
  onSubmit: PropTypes.func
}

Form.defaultProps = {
  labelPosition: 'right',
  labelSuffix: ''
};
