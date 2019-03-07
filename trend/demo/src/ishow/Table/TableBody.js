// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js'; 
import { getRowIdentity } from "./utils";//getValueByPath notUsed
// import {toDate} from "../date-picker/utils/index";

import Checkbox from '../Checkbox/CheckBox';
// import Tag from '../Tag/Tag';


export default class TableBody extends Component{
  static contextTypes = {
    store: PropTypes.any,
    layout: PropTypes.any,
  };

  constructor(props) {
    super(props);
    ['handleMouseLeave'].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });
  }

  handleMouseEnter(index) {
    this.context.store.setHoverRow(index);
  }

  handleMouseLeave() {
    this.context.store.setHoverRow(null);
  }

  handleCellMouseEnter(row, column, event) {
    this.dispatchEvent('onCellMouseEnter', row, column, event.currentTarget, event)
  }

  handleCellMouseLeave(row, column, event) {
    this.dispatchEvent('onCellMouseLeave', row, column, event.currentTarget, event)
  }

  handleCellClick(row, column, event) {
    this.dispatchEvent('onCellClick', row, column, event.currentTarget, event)
    this.dispatchEvent('onRowClick', row, event, column);
  }

  handleCellDbClick(row, column, event) {
    this.dispatchEvent('onCellDbClick', row, column, event.currentTarget, event)
    this.dispatchEvent('onRowDbClick', row, column)
  }

  handleRowContextMenu(row, event) {
    this.dispatchEvent('onRowContextMenu', row, event)
  }

  dispatchEvent(name, ...args) {
    const fn = this.props[name];
    fn && fn(...args);
  }

  isColumnHidden(index) {
    const { store, layout, ...props } = this.props;
    if (props.fixed === true || props.fixed === 'left') {
      return index >= this.leftFixedCount;
    } else if (props.fixed === 'right') {
      return index < this.columnsCount - this.rightFixedCount;
    } else {
      return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
    }
  }

  getRowStyle(row, index) {
    const { rowStyle } = this.props;
    if (typeof rowStyle === 'function') {
      return rowStyle.call(null, row, index);
    }

    return rowStyle;
  }

  getKeyOfRow(row, index) {
    const { rowKey } = this.props;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }

    return index;
  }

  // getRowClass(row, index) {
  //   const { rowClassName, stripe } = this.props;
  //
  // }

  get columnsCount() {
    return this.props.store.columns.length;
  }

  get leftFixedCount() {
    return this.props.store.fixedColumns.length;
  }

  get rightFixedCount() {
    return this.props.store.rightFixedColumns.length;
  }

  handleExpandClick(row, rowKey) {
    this.context.store.toggleRowExpanded(row, rowKey);
  }

  handleClick(row) {
    this.context.store.setCurrentRow(row);
  }

  renderCell(row, column, index, rowKey){
    const { type, selectable } = column;
    if (type === 'expand') {
      return (
        <div
          className={this.classNames('ishow-table__expand-icon ', {
            'ishow-table__expand-icon--expanded': this.context.store.isRowExpanding(row, rowKey)
          })}
          onClick={this.handleExpandClick.bind(this, row, rowKey)}
        >
          <i className="ishow-icon ishow-icon-arrow-right" />
        </div>
      )
    }

    if (type === 'index') {
      return <div>{index + 1}</div>;
    }

    if (type === 'selection') {
      const isSelected = this.context.store.isRowSelected(row, rowKey);
      return (
        <Checkbox
          checked={isSelected}
          disabled={selectable && !selectable(row, index)}
          onChange={() => { this.context.store.toggleRowSelection(row, !isSelected); }}
        />
      )
    }
    // this.renderTitle(column.render(row, column, index))
    return column.render(row, column, index);
  }
  renderTitle(obj){
    if(obj && obj.props && obj.props.dangerouslySetInnerHTML && obj.props.dangerouslySetInnerHTML.__html){
      return obj.props.dangerouslySetInnerHTML.__html
    }else if(obj && obj.props &&obj.props.children){
      if(Object.prototype.toString.call(obj.props.children) === "[object String]"){       //判断对象类型
        if(obj.type && obj.type.name==="Button"){
          return;
        }else{
          return obj.props.children
        }
      }
    }else{
      if(Object.prototype.toString.call(obj) === "[object Array]"||Object.prototype.toString.call(obj) === "[object Object]"){                       //若render里是个数组，并没有renderTitle

      }else{
        return obj;
      }
      // let string = ''
      // for(let i=0;i<obj.length;i++){
      //   if(obj[i].props.children){
      //     string+=obj[i].props.children.join("")
      //   }
      // }
      //   return string
    }
  }
  render() {
    const { store, layout, ...props } = this.props;
    const columnsHidden = store.columns.map((column, index) => this.isColumnHidden(index));
    return (
      <table
        className="ishow-table__body"
        cellPadding={0}
        cellSpacing={0}
        style={this.style({
          borderSpacing: 0,
          border: 0
        })}
      >
        <colgroup>
          {store.columns.map((column, index) => (
            <col style={{ width: column.realWidth }} key={index} />
          ))}
        </colgroup>
        <tbody>
        {store.data.map((row, rowIndex) => {
          const rowKey = this.getKeyOfRow(row, rowIndex);
          return [(
            <tr
              key={rowKey}
              style={this.getRowStyle(row, rowIndex)}
              className={this.className('ishow-table__row', {
                'ishow-table__row--striped': props.stripe && rowIndex % 2 === 1,
                'hover-row': store.hoverRow === rowIndex,
                'current-row': props.highlightCurrentRow && (props.currentRowKey === rowKey || store.currentRow === row)
              }, typeof props.rowClassName === 'string'
                ? props.rowClassName
                : typeof props.rowClassName === 'function'
                && props.rowClassName(row, rowIndex))}
              onMouseEnter={this.handleMouseEnter.bind(this, rowIndex)}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleClick.bind(this, row)}
              onContextMenu={this.handleRowContextMenu.bind(this, row)}
            >
              {store.columns.map((column, cellIndex) => (
                <td
                  key={cellIndex}
                  className={this.classNames(column.className, column.align, column.columnKey, {
                    'is-hidden': columnsHidden[cellIndex]
                  })}
                  onMouseEnter={this.handleCellMouseEnter.bind(this, row, column)}
                  onMouseLeave={this.handleCellMouseLeave.bind(this, row, column)}
                  onClick={this.handleCellClick.bind(this, row, column)}
                  onDoubleClick={this.handleCellDbClick.bind(this, row, column)}
                >
                  <div className="cell" 
                    title={this.renderTitle(this.renderCell(row, column, rowIndex, rowKey))}
                      >{this.renderCell(row, column, rowIndex, rowKey)}</div>
                </td>
              ))}
              {!props.fixed && layout.scrollY && !!layout.gutterWidth && (
                <td className="gutter" />
              )}
            </tr>
          ), this.context.store.isRowExpanding(row, rowKey) && (
            <tr key={`${rowKey}Expanded`}>
              <td
                colSpan={store.columns.length}
                className="ishow-table__expanded-cell"
              >
                {typeof props.renderExpanded === 'function' && props.renderExpanded(row, rowIndex)}
              </td>
            </tr>
          )];
        })}
        </tbody>
      </table>
    );
  }
}
