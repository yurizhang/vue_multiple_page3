import React from 'react';
import PropTypes from 'prop-types';
import BasePicker from './BasePicker'
import TimeSelectPanel from './panel/TimeSelectPanel'
import '../Common/css/Date-picker.css'
export default class TimeSelect extends BasePicker {
  static get propTypes() {
    let result = Object.assign({}, {
      start: PropTypes.string,
      end: PropTypes.string,
      step: PropTypes.string,
      minTime: PropTypes.instanceOf(Date),
    },
      BasePicker.propTypes)

    return result;
  }

  static get defaultProps() {
    let result = Object.assign({}, BasePicker.defaultProps)
    return result;
  }


  constructor(props) {
    // props, type, state
    super(props, 'timeselect', {});
  }

  isDateValid(value) {
    return super.isDateValid(value) && TimeSelectPanel.isValid(this.dateToStr(value), this.panelProps())
  }

  panelProps(props){
    const ps = props || this.props
    const minTime = this.dateToStr(this.props.minTime)
    return {...ps, minTime}
  }

  pickerPanel(state, props) {
    const value = this.dateToStr(state.value)
    return (
      <TimeSelectPanel
        {...this.panelProps(props)}
        value={value}
        onPicked={this.onPicked.bind(this)}
        dateParser={(str) => {
          const r = this.parseDate(str)
          return r
        } }
        />
    )
  }
}
