/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {default as Component} from '../Common/plugs/index.js'; 
import debounce from 'throttle-debounce/debounce';
import CollapseTransition from '../Collapse/CollapseTransition';
import {IDGenerator,watchPropertyChange} from '../Common/utils';
import Checkbox from '../Checkbox/index';

function NodeContent({context, renderContent}) {
  const {nodeModel, treeNode} = context.props;

  if (typeof renderContent === 'function') {
    return renderContent(nodeModel, nodeModel.data, treeNode.store);
  } else {
    return <span className="ishow-tree-node__label">{nodeModel.label}</span>;
  }
}

NodeContent.propTypes = {
  renderContent: PropTypes.func,
  context: PropTypes.object.isRequired
};

export default class Node extends Component {

  constructor(props) {
    super(props);

    this.state = {
      childNodeRendered: false,
      isShowCheckbox: false
    };
    this.state.isShowCheckbox = props.treeNode.isShowCheckbox;

    this.oldChecked = false;
    this.oldIndeterminate = false;
    this.idGen = new IDGenerator();
  }

  componentDidMount(){
    const nodeModel = this.props.nodeModel;
    const childrenKey = this.props.options.children || 'children';

    const triggerChange = debounce(20, (...args) => {
      if (this.isDeconstructed) return;
      this.handleSelectChange.apply(this, args);
    });

    this.loadHandler = this.enhanceLoad(nodeModel);
    this.watchers = {
      [this.idGen.next()]: watchPropertyChange(
        nodeModel,
        'indeterminate',
        value => {
          triggerChange(nodeModel.checked, value);
        }
      ),
      [this.idGen.next()]: watchPropertyChange(nodeModel, 'checked', value => {
        triggerChange(value, nodeModel.indeterminate);
      }),
      [this.idGen.next()]: watchPropertyChange(nodeModel, 'loading', () => {
        this.setState({});
      })
    };

    if (nodeModel.data != null) {
      this.watchers[
        this.idGen.next()
      ] = watchPropertyChange(nodeModel.data, childrenKey, () => {
        nodeModel.updateChildren();
        this.setState({}); //force update view
      });
    }
  }

  componentWillUnmount(){
    this.loadHandler();
    // clear watchs
    for (let w in this.watchers) {
      if (this.watchers[w]) {
        this.watchers[w]();
      }
    }
    this.isDeconstructed = true;
  }

  enhanceLoad(nodeModel){
    const load = nodeModel.load;
    const enhanced = (...args) => {
      load.apply(null, args);
      this.setState({});
    };
    nodeModel.load = enhanced;
    return () => {
      nodeModel.load = load;
    };
  }

  handleSelectChange(checked, indeterminate){
    const { onCheckChange, nodeModel } = this.props;

    // !NOTE: 原码是 && 的关系，感觉有bug
    if (
      this.oldChecked !== checked || this.oldIndeterminate !== indeterminate
    ) {
      onCheckChange(nodeModel.data, checked, indeterminate);
      this.setState({}); //force update
    }

    this.oldChecked = checked;
    this.oldIndeterminate = indeterminate;
  }

  getNodeKey(node, otherwise) {
    const nodeKey = this.props.nodeKey;
    if (nodeKey && node) {
      return node.data[nodeKey];
    }
    return otherwise;
  }


  handleClick(evt) {
    if (evt) evt.stopPropagation();
    const { nodeModel, treeNode } = this.props;// eslint-disable-line no-unused-vars

    treeNode.setCurrentNode(this);
    if (treeNode.props.expandOnClickNode){
      this.handleExpandIconClick()
    }
  }

  handleExpandIconClick(evt){
    if (evt) evt.stopPropagation();

    const { nodeModel, parent } = this.props;
    const {onNodeCollapse, onNodeExpand} = this.props.treeNode.props;

    if (nodeModel.isLeaf) return;

    if (nodeModel.expanded) {
      nodeModel.collapse()
      this.refresh()
      onNodeCollapse(nodeModel.data, nodeModel, this)
    } else {
      nodeModel.expand(() => {
        this.setState({childNodeRendered: true }, () => {
          onNodeExpand(nodeModel.data, nodeModel, this)
        });
        parent.closeSiblings(nodeModel)
      });
    }
  }

  closeSiblings(exclude){
    const {treeNode, nodeModel} = this.props;
    if (!treeNode.props.accordion) return;
    if (nodeModel.isLeaf || !nodeModel.childNodes || !nodeModel.childNodes.length) return;

    nodeModel.childNodes.filter(e=> e !== exclude).forEach(e=>e.collapse());
    this.refresh();
  }

  refresh(){
    this.setState({})
  }

  handleUserClick(){
    let {nodeModel, checkStrictly} = this.props.treeNode;
    if (nodeModel.indeterminate) {
      nodeModel.setChecked(nodeModel.checked, !checkStrictly);
    }
  }

  handleCheckChange(checked){
    this.props.nodeModel.setChecked(checked, true);
  }

  render(){
    const { childNodeRendered } = this.state;
    const { treeNode, nodeModel, renderContent, isShowCheckbox } = this.props;// eslint-disable-next-line

    let expanded = nodeModel.expanded;

    return (
      <div
        onClick={this.handleClick.bind(this)}
        className={this.classNames('ishow-tree-node', {
          expanded: childNodeRendered && expanded,
          'is-current': treeNode.getCurrentNode() === this,
          'is-hidden': !nodeModel.visible
        })}
        style={{display: nodeModel.visible ? '': 'none'}}
      >
        <div
          className="ishow-tree-node__content"
          style={{ paddingLeft: `${(nodeModel.level - 1) * treeNode.props.indent}px` }}
        >
          <span
            className={this.classNames('ishow-tree-node__expand-icon', {
              'is-leaf': nodeModel.isLeaf,
              expanded: !nodeModel.isLeaf && expanded
            })}
            onClick={this.handleExpandIconClick.bind(this)}
          />
          {isShowCheckbox &&
            <Checkbox
              checked={nodeModel.checked}
              onChange={this.handleCheckChange.bind(this)}
              indeterminate={nodeModel.indeterminate}
              onClick={this.handleUserClick.bind(this)}
            />}
          {nodeModel.loading &&
            <span className="ishow-tree-node__loading-icon ishow-icon-loading"> </span>}
          <NodeContent
            nodeModel={nodeModel}
            renderContent={treeNode.props.renderContent}
            context={this}
          />
        </div>
        <CollapseTransition isShow={expanded} ref="collapse">
          <div className="ishow-tree-node__children">
            {nodeModel.childNodes.map((e, idx) => {
              let props = Object.assign({}, this.props, { nodeModel: e, parent: this });
              return <Node {...props} key={this.getNodeKey(e, idx)} />;
            })}
          </div>
        </CollapseTransition>
      </div>
    );
  }
}

Node.propTypes = {
  nodeModel: PropTypes.object,
  options: PropTypes.object,
  treeNode: PropTypes.object.isRequired,
  isShowCheckbox: PropTypes.bool,
  onCheckChange: PropTypes.func,
};

Node.defaultProps = {
  nodeModel: {},
  options: {},
  onCheckChange() {},
};
