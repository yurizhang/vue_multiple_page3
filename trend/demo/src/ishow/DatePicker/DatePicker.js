//@flow
import React from 'react';

import { pick } from '../Common/utils'
import { SELECTION_MODES } from './utils'

import BasePicker from './BasePicker'
import DatePanel from './panel/DatePanel'
import '../Common/css/Date-picker.css'

export default class DatePicker extends BasePicker {
  static get propTypes() {
    return Object.assign(
      {},
      // eslint-disable-next-line react/forbid-foreign-prop-types
      BasePicker.propTypes,
      // eslint-disable-next-line react/forbid-foreign-prop-types
      pick(DatePanel.propTypes,['value', 'shortcuts', 'selectionMode', 'disabledDate', 'showWeekNumber', 'firstDayOfWeek', 'isShowTime']))
  }

  static get defaultProps() {
    let result = Object.assign({}, BasePicker.defaultProps)
    return result;
  }

  constructor(props) {
    let type = 'date'
    switch (props.selectionMode) {
      case SELECTION_MODES.YEAR:
        type = 'year'; break;
      case SELECTION_MODES.MONTH:
        type = 'month'; break;
      case SELECTION_MODES.WEEK:
        type = 'week'; break;
      default: break;
    }
    super(props, type, {})
  }

  pickerPanel(state, props) {
    return (
      <DatePanel
        {...props}
        value={state.value}
        onPick={this.onPicked.bind(this)}
      />
    )
  }
}
