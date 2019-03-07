import React from 'react'
import PropTypes from 'prop-types';
import {default as Component} from '../../Common/plugs/index.js'; //提供style, classname方法
import { hasClass, deconstructDate, SELECTION_MODES } from '../utils';
import Locale from '../../Common/locale';
import '../../Common/css/Date-picker.css'

export default class MonthTable extends Component {

  getCellStyle(month) {
    const {date, disabledDate, value} = this.props
    const style = {};
    const ndate = new Date(date)
    ndate.setMonth(month);
    // in the element repo, you could see the original code that only disable current month only when all days contains in this month are disabled
    // which i don't think is a good design, so i changed disabledDate callback with an additional type param to solve this kind issue.
    // so the caller can handle different picker views on each switch arm condition.
    style.disabled = typeof disabledDate === 'function' && disabledDate(ndate, SELECTION_MODES.MONTH);
    style.current = value && deconstructDate(value).month === month;
    return style;
  }

  handleMonthTableClick(event) {
    const target = event.target;
    if (target.tagName !== 'A') return;
    if (hasClass(target.parentNode, 'disabled')) return;
    const column = target.parentNode.cellIndex;
    const row = target.parentNode.parentNode.rowIndex;
    const month = row * 4 + column;

    this.props.onPick(month)
  }

  render() {
    const $t = Locale.t
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    return (
      <table onClick={this.handleMonthTableClick.bind(this)} className="ishow-month-table">
        <tbody>
          {
            months.map((key, idx) => {
              return (
                <td className={this.classNames(this.getCellStyle(idx))} key={idx}>
                  <a className="cell">{$t(`ishow.datepicker.months.${key}`)}</a>
                </td>
              )
            }).reduce((col, item) => {
              let tararr
              if (!(Array.isArray(col[0]) && col[0].length !== 4)) {
                col.unshift([])
              }
              tararr = col[0]
              tararr.push(item)
              return col
            }, []).reverse().map((e, idx) => <tr key={idx}>{e}</tr>)
          }
        </tbody>
      </table>
    );
  }
}

MonthTable.propTypes = {
  // current date, specific to view
  date: PropTypes.instanceOf(Date).isRequired,
  // user picked value, value: Date|null
  value: PropTypes.instanceOf(Date),
  onPick: PropTypes.func.isRequired,
  // (Date)=>boolean
  disabledDate: PropTypes.func
}
