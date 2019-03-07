import React from 'react';
import ReactDOM from 'react-dom';
import ClickOutside from 'react-click-outside';
import debounce from 'throttle-debounce/debounce';
import Popper from '../Common/utils/popper';
import PropTypes from 'prop-types';
import { default as Component, View } from '../Common/plugs/index.js'; //提供style, classname方法

import CascaderMenu from './Menu';
import Input from '../Input';

import '../Common/css/Cascader.css';

class Cascader extends Component {

  constructor(props) {
    super(props);    
    // console.log("constructor props.value:");
    // console.log(props.value);
    this.state = {
      currentValue: props.value,
      menu: null,
      menuVisible: false,
      inputHover: false,
      inputValue: '',
      flatOptions: this.flattenOptions(props.options)
    }

    this.debouncedInputChange = debounce(props.debounce, () => {
      const value = this.state.inputValue;
      const before = this.props.beforeFilter(value);

      if (before && before.then) {
        this.state.menu.setState({
          options: [{
            __IS__FLAT__OPTIONS: true,
            label: '加载中',
            value: '',
            disabled: true
          }]
        });

        before.then(() => {
            this.handleInputChange(value);
          });
      } else {
        this.handleInputChange(value);
      }
    });
  }

  getChildContext() {
    return {
      component: this
    };
  }

  componentDidMount() {
    this.input = ReactDOM.findDOMNode(this.refs.input);
  }

  componentWillReceiveProps(props) {

    // console.log(" componentWillReceiveProps props.value:");
    // console.log(props.value);

    this.setState({
      currentValue: props.value,
      flatOptions: this.flattenOptions(props.options),
    });

    this.state.menu.setState({
      options: props.options
    });
  }

  componentDidUpdate(props, state) {
    const { menuVisible } = this.state;

    if (menuVisible !== state.menuVisible) {
      if (menuVisible) {
        this.showMenu();

        if (this.popperJS) {
          this.popperJS.update();
        } else {
          this.popperJS = new Popper(this.input, this.refs.menu, {
            gpuAcceleration: false
          });
        }
      } else {
        this.hideMenu();

        if (this.popperJS) {
          this.popperJS.destroy();
        }

        delete this.popperJS;
      }
    }
  }

  componentWillUnmount() {
    if (this.popperJS) {
      this.popperJS.destroy();
    }
  }

  placeholder() {
    return this.props.placeholder || '请选择';
  }

  updatePopper() {
    if (this.popperJS) {
      this.popperJS.update();
    }
  }

  initMenu(menu) {
    // eslint-disable-next-line
    this.state.menu = menu;
  }

  showMenu() {
    this.state.menu.setState({
      value: this.state.currentValue.slice(0),
      visible: true,
      options: this.props.options,
      inputWidth: this.input.offsetWidth - 2
    });
  }

  hideMenu() {
    this.setState({ inputValue: '' });

    if (this.state.menu) {
      this.state.menu.setState({ visible: false });
    }
  }

  handleActiveItemChange(value) {
    this.updatePopper();

    if (this.props.activeItemChange) {
      this.props.activeItemChange(value);
    }
  }

  handlePick(value, close = true) {
    this.setState({
      currentValue: value
    });

    if (close) {
      this.setState({ menuVisible: false });
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  handleInputChange(value) {
    if (!this.state.menuVisible) return;

    const flatOptions = this.state.flatOptions;

    if (!value) {
      this.state.menu.setState({
        options: this.props.options
      });
      return;
    }

    let filteredFlatOptions = flatOptions.filter(optionsStack => {
      return optionsStack.some(option => new RegExp(value, 'i').test(option[this.labelKey()]));
    });

    if (filteredFlatOptions.length > 0) {
      filteredFlatOptions = filteredFlatOptions.map(optionStack => {
        return {
          __IS__FLAT__OPTIONS: true,
          value: optionStack.map(item => item[this.valueKey()]),
          label: this.renderFilteredOptionLabel(value, optionStack)
        };
      });
    } else {
      filteredFlatOptions = [{
        __IS__FLAT__OPTIONS: true,
        label: '无匹配数据',
        value: '',
        disabled: true
      }];
    }

    this.state.menu.setState({
      options: filteredFlatOptions
    });
  }

  renderFilteredOptionLabel(inputValue, optionsStack) {
    return optionsStack.map((option, index) => {
      const label = option[this.labelKey()];
      const keywordIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
      const labelPart = label.slice(keywordIndex, inputValue.length + keywordIndex);
      const node = keywordIndex > -1 ? this.highlightKeyword(label, labelPart) : label;
      return index === 0 ? node : [' / ', node];
    });
  }

  highlightKeyword(label, keyword) {
    return label.split(keyword).map((node, index) => index === 0 ? node : [
      (<span className="ishow-cascader-menu__item__keyword">{keyword}</span>),
      node
    ]);
  }

  flattenOptions(options, ancestor = []) {
    let flatOptions = [];

    options.forEach((option) => {
      const optionsStack = ancestor.concat(option);
      if (!option[this.childrenKey()]) {
        flatOptions.push(optionsStack);
      } else {
        if (this.changeOnSelect) {
          flatOptions.push(optionsStack);
        }
        flatOptions = flatOptions.concat(this.flattenOptions(option[this.childrenKey()], optionsStack));
      }
    });

    return flatOptions;
  }

  clearValue(e) {
    e.stopPropagation();

    this.handlePick([], true);
  }

  handleClickOutside() {
    if (this.state.menuVisible) {
      this.setState({ menuVisible: false });
    }
  }

  handleClick() {
    if (this.props.disabled) return;

    if (this.filterable) {
      this.setState({
        menuVisible: true
      });
      return;
    }

    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  /* Computed Methods */

  labelKey() {
    return this.props.props.label || 'label';
  }

  valueKey() {
    return this.props.props.value || 'value';
  }

  childrenKey() {
    return this.props.props.children || 'children';
  }

  currentLabels() {
    let options = this.props.options;
    let labels = [];

    this.state.currentValue.forEach(value => {
      const targetOption = options && options.filter(option => option[this.valueKey()] === value)[0];

      if (targetOption) {
        labels.push(targetOption[this.labelKey()]);
        options = targetOption[this.childrenKey()];
      }
    });

    return labels;
  }

  render() {
    const { size, disabled, filterable, clearable, showAllLevels,id } = this.props;
    // eslint-disable-next-line
    const { menuVisible, inputHover, inputValue } = this.state;
    const currentLabels = this.currentLabels();

    return (
      <span ref="reference" className={this.className('ishow-cascader', size ? 'ishow-cascader--' + size : '', {
        'is-opened': menuVisible,
        'is-disabled': disabled
      })}>
        <span
          onClick={this.handleClick.bind(this)}
          onMouseEnter={() => { this.setState({ inputHover: true }) }}
          onMouseLeave={() => { this.setState({ inputHover: false }) }}
        >
          <Input
            id={id}
            ref="input"
            readOnly={!filterable}
            placeholder={currentLabels.length ? undefined : this.placeholder()}
            value={inputValue}
            onChange={value => { this.setState({inputValue: value}) }}
            onKeyUp={this.debouncedInputChange.bind(this)}
            size={size}
            disabled={disabled}
            icon={
              clearable && inputHover && currentLabels.length ? (
                <i
                  className="ishow-input__icon ishow-icon-circle-close ishow-cascader__clearIcon"
                  onClick={this.clearValue.bind(this)}
                ></i>
              ) : (
                <i
                  className={this.classNames('ishow-input__icon ishow-icon-caret-bottom', {
                    'is-reverse': menuVisible
                  })}
                ></i>
              )
            }
          />
          <Input 
          type="hidden"
          id={id}
          value={currentLabels}
          style={{display:'none'}}
          />
          <View show={currentLabels.length}>
            <span className="ishow-cascader__label">
              {
                showAllLevels ? currentLabels.map((label, index) => {
                  return (
                    <label key={index}>
                      {label}
                      {index < currentLabels.length - 1 && <span> / </span>}
                    </label>
                  )
                }) : currentLabels[currentLabels.length - 1]
              }
            </span>
          </View>
        </span>
        <CascaderMenu ref="menu" />
      </span>
    )
  }
}

Cascader.childContextTypes = {
  component: PropTypes.any
};

Cascader.propTypes = {
  options: PropTypes.array.isRequired,
  props: PropTypes.object,
  value: PropTypes.array,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  changeOnSelect: PropTypes.bool,
  popperClass: PropTypes.string,
  expandTrigger: PropTypes.string,
  filterable: PropTypes.bool,
  size: PropTypes.string,
  showAllLevels: PropTypes.bool,
  debounce: PropTypes.number,
  activeItemChange: PropTypes.func,
  beforeFilter: PropTypes.func,
  onChange: PropTypes.func
}

Cascader.defaultProps = {
  value: [],
  clearable: false,
  expandTrigger: 'click',
  showAllLevels: true,
  debounce: 300,
  props: {
    children: 'children',
    label: 'label',
    value: 'value',
    disabled: 'disabled'
  },
  beforeFilter: () => (() => {})
}

export default ClickOutside(Cascader);
