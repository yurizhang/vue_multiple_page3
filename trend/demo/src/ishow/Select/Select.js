import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {default as Component,View} from '../Common/plugs/index.js'; //提供style, classname方法
import Transition from '../Message/transition';
import StyleSheet from '../Common/style';
import ClickOutside from 'react-click-outside';
import { addResizeListener, removeResizeListener } from '../Common/resize-event';
import Popper from '../Common/popper';
import Input from '../Input/Input';
import debounce from 'throttle-debounce/debounce';

import {Scrollbar} from '../Scrollbar';
import Tag from '../Tag/Tag';
import '../Common/css/Select.css';
import '../Common/css/Select-dropdown.css';
import '../Common/css/Scrollbar.css';
StyleSheet.reset(`
  .ishow-select-dropdown {
    position: absolute !important;
  }
`)



const sizeMap = {
  'large': 42,
  'small': 30,
  'mini': 22
};

class Select extends Component {


  constructor(props) {
    super(props);

    this.state = {
      options: [],
      isSelect: true,
      inputLength: 20,
      inputWidth: 0,
      inputHovering: false,
      filteredOptionsCount: 0,
      optionsCount: 0,
      hoverIndex: -1,
      bottomOverflowBeforeHidden: 0,
      cachedPlaceHolder: props.placeholder || '请选择',
      currentPlaceholder: props.placeholder || '请选择',
      selectedLabel: '',
      selectedInit: false,
      visible: false,
      selected: undefined,
      value: props.value,
      valueChangeBySelected: false,
      voidRemoteQuery: false,
      query: ''
    };

    if (props.multiple) {
      this.state.selectedInit = true;
      this.state.selected = [];
    }

    if (props.remote) {
      this.state.voidRemoteQuery = true;
    }

    this.debouncedOnInputChange = debounce(this.debounce(), () => {
      this.onInputChange();
    });
  }

  getChildContext() {
    return {
      component: this
    };
  }

  componentDidMount() {
    addResizeListener(this.refs.root, this.resetInputWidth.bind(this));

    this.reference = ReactDOM.findDOMNode(this.refs.reference);
    this.popper = ReactDOM.findDOMNode(this.refs.popper);

    this.handleValueChange();
  }

  componentWillReceiveProps(props) {
    if (props.placeholder !== this.props.placeholder) {
      this.setState({
        currentPlaceholder: props.placeholder
      });
    }

    if (props.value !== this.props.value) {
      this.setState({
        value: props.value
      }, () => {
        this.handleValueChange();
      });
    }
  }

  componentWillUpdate(props, state) {
    if (state.value !== this.state.value) {
      this.onValueChange(state.value);
    }

    if (state.visible !== this.state.visible) {
      if (this.props.onVisibleChange) {
        this.props.onVisibleChange(state.visible);
      }

      this.onVisibleChange(state.visible);
    }

    if (state.query !== this.state.query) {
      this.onQueryChange(state.query);
    }

    if (Array.isArray(state.selected)) {
      if (state.selected.length !== this.state.selected.length) {
        this.onSelectedChange(state.selected);
      }
    }
  }

  componentDidUpdate() {
    //console.log("{ inputWidth: this.reference.getBoundingClientRect().width } ");
    //console.log(this.reference.getBoundingClientRect().width)
    //this.setState({ inputWidth: this.reference.getBoundingClientRect().width });
  }

  componentWillUnmount() {
    removeResizeListener(this.refs.root, this.resetInputWidth.bind(this));
  }

  debounce() {
    return this.props.remote ? 300 : 0;
  }

  handleClickOutside() {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }

  handleValueChange() {
    const { multiple } = this.props;
    const { value, options } = this.state;

    if (multiple && Array.isArray(value)) {
      this.setState({
        selected: options.reduce((prev, curr) => {
          return value.indexOf(curr.props.value) > -1 ? prev.concat(curr) : prev;
        }, [])
      }, () => {
        this.onSelectedChange(this.state.selected, false);
      });
    } else {
      const selected = options.filter(option => {
         return option.props.value === value
       })[0];

       if (selected) {
        this.setState({ selectedLabel: selected.props.label || selected.props.value });
       }
    }
  }

  onVisibleChange(visible) {
    const { multiple, filterable } = this.props;
    let { query, dropdownUl, selected, selectedLabel, bottomOverflowBeforeHidden } = this.state;

    if (!visible) {
      this.reference.querySelector('input').blur();

      if (this.refs.root.querySelector('.ishow-input__icon')) {
        const elements = this.refs.root.querySelector('.ishow-input__icon');

        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('is-reverse');
        }
      }

      // this.broadcast('select-dropdown', 'destroyPopper');

      if (this.refs.input) {
        this.refs.input.blur();
      }

      this.resetHoverIndex();

      if (!multiple) {
        if (dropdownUl && selected) {
          const element = ReactDOM.findDOMNode(selected);
          bottomOverflowBeforeHidden = element.getBoundingClientRect().bottom - this.popper.getBoundingClientRect().bottom;
        }

        if (selected && selected.props) {
          if (selected.props.value) {
            selectedLabel = selected.currentLabel();
          }
        } else if (filterable) {
          selectedLabel = '';
        }

        this.setState({ bottomOverflowBeforeHidden, selectedLabel });
      }
    } else {
      let icon = this.refs.root.querySelector('.ishow-input__icon');

      if (icon && !icon.classList.contains('ishow-icon-circle-close')) {
        const elements = this.refs.root.querySelector('.ishow-input__icon');

        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add('is-reverse');
        }
      }

      if (this.popperJS) {
        this.popperJS.update();
      }

      if (filterable) {
        query = selectedLabel;

        if (multiple) {
          this.refs.input.focus();
        } else {
          this.refs.reference.focus();

          // this.broadcast('input', 'inputSelect');
        }
      }

      if (!dropdownUl) {
        let dropdownChildNodes = this.popper.childNodes;
        dropdownUl = [].filter.call(dropdownChildNodes, item => item.tagName === 'UL')[0];
      }

      if (!multiple && dropdownUl) {
        if (bottomOverflowBeforeHidden > 0) {
          dropdownUl.scrollTop += bottomOverflowBeforeHidden;
        }
      }

      this.setState({ query: query || '', dropdownUl });
    }
  }

  onValueChange(val) {
    const { multiple } = this.props;

    let {
      options,
      valueChangeBySelected,
      selectedInit,
      selected,
      selectedLabel,
      currentPlaceholder,
      cachedPlaceHolder
    } = this.state;

    if (valueChangeBySelected) {
      return this.setState({
        valueChangeBySelected: false
      });
    }

    if (multiple && Array.isArray(val)) {
      this.resetInputHeight();

      selectedInit = true;
      selected = [];
      currentPlaceholder = cachedPlaceHolder;

      val.forEach(item => {
        let option = options.filter(option => option.props.value === item)[0];
        if (option) {
          this.addOptionToValue(option);
        }
      });

      this.forceUpdate();
    }

    if (!multiple) {
      let option = options.filter(option => option.props.value === val)[0];

      if (option) {
        this.addOptionToValue(option);
        this.setState({ selectedInit, currentPlaceholder });
      } else {
        selected = {};
        selectedLabel = '';
        this.setState({ selectedInit, selected, currentPlaceholder, selectedLabel }, () => {
          this.resetHoverIndex();
        });
      }
    }
  }

  onSelectedChange(val, bubble = true) {
    const { form } = this.context;
    const { multiple, filterable, onChange } = this.props;
    let { query, hoverIndex, inputLength, selectedInit, currentPlaceholder, cachedPlaceHolder, valueChangeBySelected } = this.state;

    if (multiple) {
      if (val.length > 0) {
        currentPlaceholder = '';
      } else {
        currentPlaceholder = cachedPlaceHolder;
      }

      this.setState({ currentPlaceholder }, () => {
        this.resetInputHeight();
      });

      valueChangeBySelected = true;

      if (bubble) {
        onChange && onChange(val.map(item => item.props.value), val);
        form && form.onFieldChange();
      }

      // this.dispatch('form-item', 'el.form.change', val);

      if (filterable) {
        query = '';
        hoverIndex = -1;
        inputLength = 20;

        this.refs.input.focus();
      }

      this.setState({ valueChangeBySelected, query, hoverIndex, inputLength }, () => {
        if (this.refs.input) {
          this.refs.input.value = '';
        }
      });
    } else {
      if (selectedInit) {
        return this.setState({
          selectedInit: false
        });
      }

      if (bubble) {
        onChange && onChange(val.props.value, val);
        form && form.onFieldChange();
      }
    }
  }

  onQueryChange(query) {
    const { multiple, filterable, remote, remoteMethod, filterMethod } = this.props;
    let { voidRemoteQuery, hoverIndex, options, optionsCount } = this.state;

    if (this.popperJS) {
      this.popperJS.update();
    }

    if (multiple && filterable) {
      this.resetInputHeight();
    }

    if (remote && typeof remoteMethod === 'function') {
      hoverIndex = -1;
      voidRemoteQuery = query === '';

      remoteMethod(query);

      options.forEach(option => {
        option.resetIndex();
      });
    } else if (typeof filterMethod === 'function') {
      filterMethod(query);
    } else {
      this.setState({
        filteredOptionsCount: optionsCount
      }, () => {
        options.forEach(option => {
          option.queryChange(query);
        });
      });
    }

    this.setState({ hoverIndex, voidRemoteQuery });
  }

  onEnter() {
    this.popperJS = new Popper(this.reference, this.popper, {
      gpuAcceleration: false
    });
  }

  onAfterLeave() {
    this.popperJS.destroy();
  }

  optionsAllDisabled(options) {
     return options.length === (options.filter(item => item.props.disabled === true).length);
  }

  iconClass() {
    return this.showCloseIcon() ? 'circle-close' : (this.props.remote && this.props.filterable ? '' : `caret-top ${this.state.visible ? 'is-reverse' : ''}`);
  }

  showCloseIcon() {
    let criteria = this.props.clearable && this.state.inputHovering && !this.props.multiple && this.state.options.indexOf(this.state.selected) > -1;

    if (!this.refs.root) return false;

    let icon = this.refs.root.querySelector('.ishow-input__icon');

    if (icon) {
      if (criteria) {
        icon.addEventListener('click', this.deleteSelected.bind(this));
        icon.classList.add('is-show-close');
      } else {
        icon.removeEventListener('click', this.deleteSelected.bind(this));
        icon.classList.remove('is-show-close');
      }
    }

    return criteria;
  }

  emptyText() {
    const { loading, filterable } = this.props;
    const { voidRemoteQuery, options, filteredOptionsCount } = this.state;

    if (loading) {
      return '加载中';
    } else {
      if (voidRemoteQuery) {
        this.setState({ voidRemoteQuery: false });
        return false;
      }

      if (filterable && filteredOptionsCount === 0) {
        return '无匹配数据';
      }

      if (options.length === 0) {
        return '无数据';
      }
    }

    return null;
  }

  doDestroy() {
    this.refs.popper.doDestroy();
  }

  handleClose() {
    this.setState({ visible: false });
  }

  toggleLastOptionHitState(hit) {
    const { selected } = this.state;

    if (!Array.isArray(selected)) return;

    const option = selected[selected.length - 1];

    if (!option) return;

    if (hit === true || hit === false) {
      return option.hitState = hit;
    }

    option.hitState = !option.hitState;

    return option.hitState;
  }

  deletePrevTag(e) {
    if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
      const { selected } = this.state;

      selected.pop();

      this.setState({ selected });
    }
  }

  addOptionToValue(option, init) {
    const { multiple, remote } = this.props;
    let { selected, selectedLabel, hoverIndex, value } = this.state;

    if (multiple) {
      if (selected.indexOf(option) === -1 && (remote ? value.indexOf(option.props.value) === -1 : true)) {
        this.selectedInit = !!init;

        selected.push(option);

        this.resetHoverIndex();
      }
    } else {
      this.selectedInit = !!init;

      selected = option;
      selectedLabel = option.currentLabel();
      hoverIndex = option.index;

      this.setState({ selected, selectedLabel, hoverIndex });
    }
  }

  managePlaceholder() {
    let { currentPlaceholder, cachedPlaceHolder } = this.state;

    if (currentPlaceholder !== '') {
      currentPlaceholder = this.refs.input.value ? '' : cachedPlaceHolder;
    }

    this.setState({ currentPlaceholder });
  }

  resetInputState(e) {
    if (e.keyCode !== 8) {
      this.toggleLastOptionHitState(false);
    }

    this.setState({
      inputLength: this.refs.input.value.length * 15 + 20
    });
  }

  resetInputWidth() {
    this.setState({
      inputWidth: this.reference.getBoundingClientRect().width
    })
  }

  resetInputHeight() {
    let inputChildNodes = this.reference.childNodes;
    let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0];

    input.style.height = Math.max(this.refs.tags.clientHeight + 6, sizeMap[this.props.size] || 36) + 'px';

    if (this.popperJS) {
      this.popperJS.update();
    }
  }

  resetHoverIndex() {
    const { multiple } = this.props;
    let { hoverIndex, options, selected } = this.state;

    setTimeout(() => {
      if (!multiple) {
        hoverIndex = options.indexOf(selected);
      } else {
        if (selected.length > 0) {
          hoverIndex = Math.min.apply(null, selected.map(item => options.indexOf(item)));
        } else {
          hoverIndex = -1;
        }
      }

      this.setState({ hoverIndex });
    }, 300);
  }

  toggleMenu() {
    const { filterable, disabled } = this.props;
    const { query, visible } = this.state;

    if (filterable && query === '' && visible) {
      return;
    }

    if (!disabled) {
      this.setState({
        visible: !visible
      });
    }
  }

  navigateOptions(direction) {
    let { visible, hoverIndex, options } = this.state;

    if (!visible) {
      return this.setState({
        visible: true
      });
    }

    let skip;

    if (options.length !== options.filter(item => item.props.disabled === true).length) {
      if (direction === 'next') {
        hoverIndex++;

        if (hoverIndex === options.length) {
          hoverIndex = 0;
        }

        if (options[hoverIndex].props.disabled === true ||
            options[hoverIndex].props.groupDisabled === true ||
           !options[hoverIndex].state.visible ) {
          skip = 'next';
        }
      }

      if (direction === 'prev') {
        hoverIndex--;

        if (hoverIndex < 0) {
          hoverIndex = options.length - 1;
        }

        if (options[hoverIndex].props.disabled === true ||
            options[hoverIndex].props.groupDisabled === true ||
           !options[hoverIndex].state.visible ) {
          skip = 'prev';
        }
      }
    }

    this.setState({ hoverIndex, options }, () => {
      if (skip) {
        this.navigateOptions(skip);
      }

      this.resetScrollTop();
    });
  }

  resetScrollTop() {
    const element = ReactDOM.findDOMNode(this.state.options[this.state.hoverIndex]);
    const bottomOverflowDistance = element.getBoundingClientRect().bottom - this.popper.getBoundingClientRect().bottom;
    const topOverflowDistance = element.getBoundingClientRect().top - this.popper.getBoundingClientRect().top;

    if (this.state.dropdownUl) {
      let _scrollTop = this.state.dropdownUl.scrollTop;
      if (bottomOverflowDistance > 0) {
        this.setState({
          dropdownUl: {scrollTop:_scrollTop+=bottomOverflowDistance},
        });
        //this.state.dropdownUl.scrollTop += bottomOverflowDistance;
      }
      if (topOverflowDistance < 0) {
        this.setState({
          dropdownUl: {scrollTop:_scrollTop+=topOverflowDistance},
        });
        //this.state.dropdownUl.scrollTop += topOverflowDistance;
      }
    }
  }

  selectOption() {
    let { hoverIndex, options } = this.state;

    if (options[hoverIndex]) {
      this.onOptionClick(options[hoverIndex]);
    }
  }

  deleteSelected(e) {
    if(e){
      e.stopPropagation();
    } 
    

    if (this.state.selectedLabel !== '') {
      this.setState({
        selected: {},
        selectedLabel: '',
        visible: false
      });

      this.context.form && this.context.form.onFieldChange();

      if (this.props.onChange) {
        this.props.onChange('');
      }

      if (this.props.onClear) {
        this.props.onClear();
      }
    }
  }

  deleteTag(tag) {
    const index = this.state.selected.indexOf(tag);

    if (index > -1 && !this.props.disabled) {
      const selected = this.state.selected.slice(0);

      selected.splice(index, 1);

      this.setState({ selected }, () => {
        if (this.props.onRemoveTag) {
          this.props.onRemoveTag(tag.props.value);
        }
      });
    }
  }

  handleIconClick(event) {
    if (this.iconClass().indexOf('circle-close') > -1) {
      this.deleteSelected(event);
    } else {
      this.toggleMenu();
    }
  }

  onInputChange() {
    if (this.props.filterable && this.state.selectedLabel !== this.state.value) {
      this.setState({
        query: this.state.selectedLabel
      });
    }
  }

  onOptionCreate(option) {
    let _optionsCount = this.state.optionsCount;
    let _filteredOptionsCount = this.state.filteredOptionsCount;
    this.state.options.push(option);
    this.setState({
      optionsCount:_optionsCount++ ,
    });
    //this.state.optionsCount++;
    this.setState({
      filteredOptionsCount:_filteredOptionsCount++ ,
    });
    //this.state.filteredOptionsCount++;

    this.forceUpdate();
    this.handleValueChange();
  }

  onOptionDestroy(option) {
    let _optionsCount = this.state.optionsCount;
    let _filteredOptionsCount = this.state.filteredOptionsCount;
    this.setState({
      optionsCount:_optionsCount-- ,
    });
    //this.state.optionsCount--;
    this.setState({
      filteredOptionsCount:_filteredOptionsCount-- ,
    });
    //this.state.filteredOptionsCount--;

    const index = this.state.options.indexOf(option);

    if (index > -1) {
      this.state.options.splice(index, 1);
    }

    this.state.options.forEach(el => {
      if (el !== option) {
        el.resetIndex();
      }
    });

    this.forceUpdate();
    this.handleValueChange();
  }

  onOptionClick(option) {
    const { multiple } = this.props;
    let { visible, selected, selectedLabel } = this.state;

    if (!multiple) {
      selected = option;
      selectedLabel = option.currentLabel();
      visible = false;
    } else {
      let optionIndex = -1;

      selected = selected.slice(0);

      selected.forEach((item, index) => {
        if (item === option || item.currentLabel() === option.currentLabel()) {
          optionIndex = index;
        }
      });

      if (optionIndex > -1) {
        selected.splice(optionIndex, 1);
      } else {
        selected.push(option);
      }
    }

    this.setState({ selected, selectedLabel }, () => {
      if (!multiple) {
        this.onSelectedChange(this.state.selected);
      }

      this.setState({ visible });
    });
  }

  onMouseDown(event) {
    event.preventDefault();

    if (this.refs.input) {
      this.refs.input.focus();
    }

    this.toggleMenu();
  }

  onMouseEnter() {
    this.setState({
      inputHovering: true
    })
  }

  onMouseLeave() {
    this.setState({
      inputHovering: false
    })
  }

  render() {
    const { multiple, size, disabled, filterable, loading,id } = this.props;
    const { selected, inputWidth, inputLength, query, selectedLabel, visible, options, filteredOptionsCount, currentPlaceholder } = this.state;

    return (
      <div ref="root" style={this.style()} className={this.className('ishow-select')}>
        {
          multiple && (
            <div ref="tags" className="ishow-select__tags" onClick={this.toggleMenu.bind(this)} style={{
              maxWidth: inputWidth - 32
            }}>
              {
                selected.map(el => {
                  return (
                    <Tag
                      type="primary"
                      key={el.props.value}
                      hit={el.hitState}
                      closable={!disabled}
                      closeTransition={true}
                      onClose={this.deleteTag.bind(this, el)}
                    >
                      <span className="ishow-select__tags-text">{el.currentLabel()}</span>
                    </Tag>
                  )
                })
              }
              {
                filterable && (
                  <input
                    ref="input"
                    type="text"
                    className={this.classNames('ishow-select__input', size && `is-${size}`)}
                    style={{ width: inputLength, maxWidth: inputWidth - 42 }}
                    disabled={disabled}
                    defaultValue={query}
                    onKeyUp={this.managePlaceholder.bind(this)}
                    onKeyDown={e => {
                      this.resetInputState(e);

                      switch (e.keyCode) {
                        case 27:
                          this.setState({ visible: false }); e.preventDefault();
                          break;
                        case 8:
                          this.deletePrevTag(e);
                          break;
                        case 13:
                          this.selectOption(); e.preventDefault();
                          break;
                        case 38:
                          this.navigateOptions('prev'); e.preventDefault();
                          break;
                        case 40:
                          this.navigateOptions('next'); e.preventDefault();
                          break;
                        default:
                          break;
                      }
                    }}
                    onChange={e => {
                      clearTimeout(this.timeout);

                      this.timeout = setTimeout(() => {
                        this.setState({
                          query: this.state.value
                        });
                      }, this.debounce());
                      this.setState({ value: e.target.value });
                    }}
                  />
                )
              }
            </div>
          )
        }
        <Input
          ref="reference"
          value={selectedLabel}
          type="text"
          placeholder={currentPlaceholder}
          name="name"
          id={id}
          size={size}
          disabled={disabled}
          readOnly={!filterable || multiple}
          icon={this.iconClass() || undefined}
          onChange={value => this.setState({ selectedLabel: value })}
          onIconClick={this.handleIconClick.bind(this)}
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
          onKeyUp={this.debouncedOnInputChange.bind(this)}
          onKeyDown={e => {
            switch (e.keyCode) {
              case 9:
              case 27:
                this.setState({ visible: false }); e.preventDefault();
                break;
              case 13:
                this.selectOption(); e.preventDefault();
                break;
              case 38:
                this.navigateOptions('prev'); e.preventDefault();
                break;
              case 40:
                this.navigateOptions('next'); e.preventDefault();
                break;
              default:
                break;
            }
          }}
        />
         <Transition name="ishow-zoom-in-top" onEnter={this.onEnter.bind(this)} onAfterLeave={this.onAfterLeave.bind(this)}>
          <View show={visible && this.emptyText() !== false}>
            <div ref="popper" className={this.classNames('ishow-select-dropdown', {
                'is-multiple': multiple
            })} style={{
              minWidth: inputWidth,
            }}>
              <View show={options.length > 0 && filteredOptionsCount > 0 && !loading}>
                <Scrollbar
                  viewComponent="ul"
                  wrapClass="ishow-select-dropdown__wrap"
                  viewClass="ishow-select-dropdown__list"
                >
                  {this.props.children}
                </Scrollbar>
              </View>
              { this.emptyText() && <p className="ishow-select-dropdown__empty">{this.emptyText()}</p> }
            </div>
          </View>
 </Transition>
      </div>
    )
  }
}

Select.childContextTypes = {
  component: PropTypes.any
};

Select.contextTypes = {
  form: PropTypes.any
};

Select.propTypes = {
  value: PropTypes.any,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  filterable: PropTypes.bool,
  loading: PropTypes.bool,
  remote: PropTypes.bool,
  remoteMethod: PropTypes.func,
  filterMethod: PropTypes.func,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onVisibleChange: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onClear: PropTypes.func
}

export default ClickOutside(Select);
