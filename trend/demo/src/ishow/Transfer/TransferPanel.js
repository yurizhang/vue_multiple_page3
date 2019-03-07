import React from 'react';
import PropTypes from 'prop-types';
import {default as Component,View} from '../Common/plugs/index.js';
import Input from "../Input/index";
import Checkbox from "../Checkbox/index";
import i18n from '../Common/locale/index.js';

export default class TransferPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      inputHover: false
    };
  }

  handleMouseEnter = () => this.setState({ inputHover: true });

  handleMouseLeave = () => this.setState({ inputHover: false });

  clearQuery = () => {
    if (this.inputIcon === 'circle-close') {
      this.setState({ query: '' });
    }
  };

  handleAllCheckedChange = (ischecked) => {
    const checked = ischecked
      ? this.checkableData.map(item => item[this.keyProp])
      : [];
    this.props.onChange(checked);
  };

  handleCheckedChange = (value) => {
    this.props.onChange(value);
  };

  handleInputChange = (value) => {
    this.setState({ query: value });
  };

  get allChecked(){
    const checkableDataKeys = this.checkableData.map(
      item => item[this.keyProp]
    );
    return checkableDataKeys.length > 0 &&
      checkableDataKeys.every(item => this.props.checked.includes(item));
  }

  get filteredData(){
    return this.props.data.filter(item => {
      if (typeof this.props.filterMethod === 'function') {
        return this.props.filterMethod(this.state.query, item);
      } else {
        const label = item[this.labelProp] || item[this.keyProp].toString();
        return label.toLowerCase().includes(this.state.query.toLowerCase());
      }
    });
  }

  get checkableData(){
    return this.filteredData.filter(item => !item[this.disabledProp]);
  }

  get checkedSummary(){
    const checkedLength = this.props.checked.length;
    const dataLength = this.props.data.length;
    const { noChecked, hasChecked } = this.props.footerFormat;
    if (noChecked && hasChecked) {
      return checkedLength > 0
        ? hasChecked
            .replace(/\${checked}/g, checkedLength)
            .replace(/\${total}/g, dataLength)
        : noChecked.replace(/\${total}/g, dataLength);
    } else {
      return checkedLength > 0
        ? i18n.t('ishow.transfer.hasCheckedFormat', {
            total: dataLength,
            checked: checkedLength
          })
        : i18n.t('ishow.transfer.noCheckedFormat', { total: dataLength });
    }
  }

  get isIndeterminate(){
    const checkedLength = this.props.checked.length;
    return checkedLength > 0 && checkedLength < this.checkableData.length;
  }

  get hasNoMatch(){
    const { query } = this.state;
    return query.length > 0 && this.filteredData.length === 0;
  }

  get inputIcon(){
    const { query, inputHover } = this.state;
    return query.length > 0 && inputHover ? 'circle-close' : 'search';
  }

  get labelProp(){
    return this.props.propsAlias.label;
  }

  get keyProp(){
    return this.props.propsAlias.key;
  }

  get disabledProp(){
    return this.props.propsAlias.disabled;
  }

  render(){
    const {
      filterable,
      title,
      data,
      renderContent,
      checked,
      placeholder,
      disabled,
      allCheckVisible,
      isShowTitle
    } = this.props;
    const { query } = this.state;
    return (
      <div className="ishow-transfer-panel">
        <p className="ishow-transfer-panel__header" style={{ 'display': (isShowTitle ? 'block' : 'none') }}>{title}</p>

        <div className="ishow-transfer-panel__body">
          {filterable &&
            <Input
              className="ishow-transfer-panel__filter"
              value={query}
              size="small"
              placeholder={placeholder}
              icon={this.inputIcon}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onIconClick={this.clearQuery}
              onChange={this.handleInputChange}
            />}
          <View show={!this.hasNoMatch && data.length > 0}>
            <Checkbox.Group
              value={checked}
              v-show=""
              className={this.classNames({
                'is-filterable': filterable,
                'ishow-transfer-panel__list': true
              })}
              onChange={this.handleCheckedChange}
            >
              {this.filteredData.map((item, index) => (
                <Checkbox
                  className="ishow-transfer-panel__item"
                  label={item[this.labelProp]}
                  disabled={disabled?true:item[this.disabledProp]}
                  value={item[this.keyProp]}
                  key={index}
                >
                  <OptionContent
                    option={item}
                    renderContent={renderContent}
                    labelProp={this.labelProp}
                    keyProp={this.keyProp}
                  />
                </Checkbox>
              ))}
            </Checkbox.Group>
          </View>

          <View show={this.hasNoMatch}>
            <p className="ishow-transfer-panel__empty">
              {'无匹配数据'}
            </p>
          </View>
          <View show={data.length === 0 && !this.hasNoMatch}>
            <p className="ishow-transfer-panel__empty">
              {'无数据'}
            </p>
          </View>
        </div>
        <p className="ishow-transfer-panel__footer" style={{display: allCheckVisible ? 'block' : 'none'}}>
          <Checkbox
            checked={this.allChecked}
            onChange={this.handleAllCheckedChange}
            indeterminate={this.isIndeterminate}
            disabled={disabled}
          >
            {this.checkedSummary}
          </Checkbox>
          {this.props.children}
        </p>
      </div>
    );
  }
}

const OptionContent = ({ option, renderContent, labelProp, keyProp }) => {
  return renderContent
    ? renderContent(option)
    : <span>{option[labelProp] || option[keyProp]}</span>;
};

TransferPanel.defaultProps= {
  data: [],
  footerFormat: {},
  propsAlias: {},
  allCheckVisible: true,  // 是否显示全选勾选框
  onChange() {}
};

TransferPanel.propTypes = {
  data: PropTypes.array,
  renderContent: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  filterable: PropTypes.bool,
  footerFormat: PropTypes.object,
  filterMethod: PropTypes.func,
  propsAlias: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.array,
  allCheckVisible: PropTypes.bool
};