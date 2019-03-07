import React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js';
import Button from "../Button/index";
import TransferPanel from './TransferPanel.js';
import '../Common/css/Transfer.css';

export default class Transfer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftChecked: [],
      rightChecked: []
    };
  }

  componentWillMount() {
    const { leftDefaultChecked, rightDefaultChecked } = this.props;
    if (leftDefaultChecked.length) {
      this.setState({ leftChecked: leftDefaultChecked })
    }
    if (rightDefaultChecked.length) {
      this.setState({ rightChecked: rightDefaultChecked })
    }
  }

  onSourceCheckedChange = (val) => {
    this.setState({ leftChecked: val });
  };

  onTargetCheckedChange = (val) => {
    this.setState({ rightChecked: val });
  };

  addToLeft = () => {
    const { value } = this.props;
    const { rightChecked } = this.state;
    let currentValue = value.slice();
    rightChecked.forEach(item => {
      const index = currentValue.indexOf(item);
      if (index > -1) {
        currentValue.splice(index, 1);
      }
    });
    this.setState({ rightChecked: [] }, () =>
      this.props.onChange(currentValue, 'left', rightChecked));
  };

  addToRight = () => {
    const { value } = this.props;
    const { leftChecked } = this.state;
    let currentValue = value.slice();
    leftChecked.forEach(item => {
      if (!value.includes(item)) {
        currentValue = currentValue.concat(item);
      }
    });
    this.setState({ leftChecked: [] }, () =>
      this.props.onChange(currentValue, 'right', leftChecked));
  };

  get sourceData(){
    const { data, value, propsAlias } = this.props;
    return data.filter(item => !value.includes(item[propsAlias.key]));
  }

  get targetData(){
    const { data, value, propsAlias } = this.props;
    return data.filter(item => value.includes(item[propsAlias.key]));
  }

  render(){
    const {
      filterPlaceholder,
      titles,
      buttonTexts,
      propsAlias,
      filterable,
      filterMethod,
      footerFormat,
      leftFooter,
      rightFooter,
      renderContent,
      isShowTitle,
      disabled,
      allCheckVisible
    } = this.props;
    const { leftChecked, rightChecked } = this.state;

    return (
      <div className="ishow-transfer">
        <TransferPanel
          isShowTitle={isShowTitle}
          propsAlias={propsAlias}
          data={this.sourceData}
          disabled={disabled}
	  title={titles[0] || '列表 1'}
          checked={leftChecked}
          filterable={filterable}
          filterMethod={filterMethod}
          footerFormat={footerFormat}
          renderContent={renderContent}
          placeholder={
            filterPlaceholder || '请输入搜索内容'
          }
          allCheckVisible={allCheckVisible}
          onChange={this.onSourceCheckedChange}
        >
          {leftFooter}
        </TransferPanel>
        <div className="ishow-transfer__buttons">
          <Button
            type="primary"
            size="small"
            onClick={this.addToLeft}
            disabled={rightChecked.length === 0}
          >
            <i className="ishow-icon-arrow-left" />
            {buttonTexts[0] !== undefined && <span>{buttonTexts[0]}</span>}
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={this.addToRight}
            disabled={leftChecked.length === 0}
          >
            {buttonTexts[1] !== undefined && <span>{buttonTexts[1]}</span>}
            <i className="ishow-icon-arrow-right" />
          </Button>
        </div>
        <TransferPanel
          isShowTitle={isShowTitle}
          propsAlias={propsAlias}
          data={this.targetData}
          disabled={disabled}
          title={titles[1] || '列表 2'}
          checked={rightChecked}
          filterable={filterable}
          filterMethod={filterMethod}
          footerFormat={footerFormat}
          renderContent={renderContent}
          placeholder={
            filterPlaceholder || '请输入搜索内容'
          }
          allCheckVisible={allCheckVisible}
          onChange={this.onTargetCheckedChange}
        >
          {rightFooter}
        </TransferPanel>
      </div>
    );
  }
}

Transfer.defaultProps = {
  data: [],
    titles: [],
    buttonTexts: [],
    filterPlaceholder: '',
    leftDefaultChecked: [],
    rightDefaultChecked: [],
    value: [],
    footerFormat: {},
    propsAlias: {
      label: 'label',
      key: 'key',
      disabled: 'disabled'
    },
    allCheckVisible: true,  // 是否显示全选勾选框
    isShowTitle: true,
    disabled: false,
    onChange() {}
};

Transfer.propTypes = {
  data: PropTypes.array,
  titles: PropTypes.array,
  buttonTexts: PropTypes.array,
  filterPlaceholder: PropTypes.string,
  filterMethod: PropTypes.func,
  leftDefaultChecked: PropTypes.array,
  rightDefaultChecked: PropTypes.array,
  renderContent: PropTypes.func,
  value: PropTypes.array,
  footerFormat: PropTypes.object,
  filterable: PropTypes.bool,
  propsAlias: PropTypes.object,
  onChange: PropTypes.func,
  leftFooter: PropTypes.node,
  rightFooter: PropTypes.node,
  allCheckVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  isShowTitle: PropTypes.bool
};